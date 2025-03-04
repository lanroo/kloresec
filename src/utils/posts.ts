import { marked } from "marked";
import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
import { Post } from "../data/types";
import { authors } from "../data/authors";

interface FrontMatterData {
  title?: string;
  excerpt?: string;
  image?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  author?: string;
  [key: string]: string | string[] | undefined;
}

const isDev = import.meta.env.DEV;

const log = (message: string, ...args: unknown[]) => {
  if (isDev) {
    console.log(message, ...args);
  }
};

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Função para formatar a data
function formatDate(date: string | Date): string {
  // Se for string e não tiver horário, adiciona meio-dia com fuso horário
  const inputDate =
    typeof date === "string" && !date.includes("T")
      ? new Date(`${date}T12:00:00-03:00`)
      : new Date(date);

  // Formatar a data usando o locale en-US mas com timezone do Brasil
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formatter.format(inputDate);
}

// Função para extrair o frontmatter
function parseFrontMatter(content: string): {
  data: FrontMatterData;
  content: string;
} {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);

  if (!match) {
    return {
      data: {},
      content: content,
    };
  }

  const [, frontMatter, markdownContent] = match;
  const data: FrontMatterData = {};

  frontMatter.split("\n").forEach((line) => {
    const [key, ...values] = line.split(":");
    if (key && values.length > 0) {
      let value = values.join(":").trim();
      // Remove aspas se existirem
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }

      // Tratamento especial para datas
      if (key.trim() === "date") {
        // Adiciona 12:00:00 para garantir que a data fique no meio do dia
        if (!value.includes("T")) {
          value = `${value}T12:00:00-03:00`; // Adiciona fuso horário do Brasil
        }
      }

      // Parse arrays
      if (value.startsWith("[") && value.endsWith("]")) {
        data[key.trim()] = value
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim().replace(/['"]/g, ""));
      } else {
        data[key.trim()] = value;
      }
    }
  });

  return {
    data,
    content: markdownContent,
  };
}

// Configurar o marked com highlight.js
marked.use(
  markedHighlight({
    langPrefix: "language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

// Configuração do highlight.js
hljs.configure({
  cssSelector: "pre code",
  ignoreUnescapedHTML: true,
  languages: ["typescript", "javascript", "python", "bash", "plaintext"],
});

export async function getAllPosts(): Promise<Post[]> {
  log("Iniciando carregamento dos posts...");
  try {
    const postFiles = import.meta.glob("../posts/*.md", {
      eager: true,
      as: "raw",
    });
    const posts = await Promise.all(
      Object.entries(postFiles).map(async ([path, content]) => {
        const slug = path.split("/").pop()?.replace(".md", "") || "";

        // Obter as estatísticas do arquivo para data de criação
        const now = new Date();
        return {
          slug,
          content: content as string,
          created: now,
          modified: now,
        };
      })
    );

    log("Posts carregados:", posts.length);

    const processedPosts = posts
      .map((post) => {
        try {
          log("Processando post:", post.slug);
          const { data, content } = parseFrontMatter(post.content);
          log("Frontmatter:", data);
          const htmlContent = marked(content);

          // Se não houver data no frontmatter, usa a data atual
          const postDate = data.date ? new Date(data.date) : new Date();
          const formattedDate = formatDate(postDate);
          const readTime = calculateReadTime(content);

          const authorId = data.author || "guest";
          const author = authors[authorId] || authors.guest;

          const processedPost = {
            id: post.slug,
            slug: post.slug,
            title: data.title || "Sem título",
            excerpt: data.excerpt || "",
            image: data.image || "",
            date: formattedDate,
            timestamp: postDate.getTime(), // Adicionando timestamp para ordenação
            readTime: readTime,
            tags: Array.isArray(data.tags) ? data.tags : [],
            content: htmlContent,
            author: author,
          } as Post & { timestamp: number };

          log("Post processado:", {
            slug: processedPost.slug,
            title: processedPost.title,
            date: processedPost.date,
          });

          return processedPost;
        } catch (error) {
          log(`Error processing post ${post.slug}:`, error);
          return null;
        }
      })
      .filter((post): post is Post & { timestamp: number } => post !== null)
      .sort((a, b) => b.timestamp - a.timestamp); // Ordenando por timestamp

    log("Posts processados:", processedPosts.length);
    return processedPosts;
  } catch (error) {
    log("Error loading posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  log("Carregando post:", slug);
  try {
    const postFiles = import.meta.glob("../posts/*.md", {
      eager: true,
      as: "raw",
    });
    const postPath = Object.keys(postFiles).find((path) =>
      path.includes(`${slug}.md`)
    );

    if (!postPath) {
      throw new Error(`Post não encontrado: ${slug}`);
    }

    const content = postFiles[postPath] as string;
    const { data, content: markdownContent } = parseFrontMatter(content);
    const htmlContent = marked(markdownContent);

    const postDate = data.date ? new Date(data.date) : new Date();
    const formattedDate = formatDate(postDate);
    const readTime = calculateReadTime(markdownContent);

    const authorId = data.author || "guest";
    const author = authors[authorId] || authors.guest;

    log("Data do post individual:", formattedDate);
    log("Tempo de leitura:", readTime);
    log("Autor:", author.name);

    return {
      id: slug,
      slug,
      title: data.title || "Sem título",
      excerpt: data.excerpt || "",
      image: data.image || "",
      date: formattedDate,
      timestamp: postDate.getTime(),
      readTime: readTime,
      tags: Array.isArray(data.tags) ? data.tags : [],
      content: htmlContent,
      author: author,
    } as Post;
  } catch (error) {
    log(`Error loading post ${slug}:`, error);
    return null;
  }
}
