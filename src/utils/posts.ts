import { marked } from "marked";
import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
import { Post } from "../data/types";
import { authors } from "../data/authors";

interface RawPost {
  slug: string;
  content: string;
  created: Date;
  modified: Date;
}

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

// Função para calcular o tempo de leitura
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Função para formatar a data
function formatDate(date: string | Date): string {
  const d = new Date(date);

  // Se a data for inválida, retorna a data atual
  if (isNaN(d.getTime())) {
    return formatDate(new Date());
  }

  // Formatar a data no estilo "Nov 6, 2024"
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formatter.format(d);
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

  // Parse YAML-style frontmatter
  frontMatter.split("\n").forEach((line) => {
    const [key, ...values] = line.split(":");
    if (key && values.length > 0) {
      let value = values.join(":").trim();
      // Remove aspas se existirem
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      // Parse arrays
      if (value.startsWith("[") && value.endsWith("]")) {
        data[key.trim()] = value
          .slice(1, -1)
          .split(",")
          .map((item) => item.trim().replace(/['"]/g, ""));
      }
      // Valores simples
      else {
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
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

export async function getAllPosts(): Promise<Post[]> {
  log("Iniciando carregamento dos posts...");
  try {
    const postsPath = import.meta.env.PROD ? "/src/posts/" : "/posts/";
    const response = await fetch(postsPath);
    log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = (await response.json()) as RawPost[];
    log("Posts carregados:", posts.length);

    if (!Array.isArray(posts)) {
      throw new Error("Invalid response format");
    }

    const processedPosts = posts
      .map((post) => {
        try {
          log("Processando post:", post.slug);
          const { data, content } = parseFrontMatter(post.content);
          log("Frontmatter:", data);
          const htmlContent = marked(content);

          // Usar a data do frontmatter ou a data de criação do arquivo
          const postDate = data.date
            ? formatDate(new Date(data.date))
            : formatDate(post.created);
          const readTime = calculateReadTime(content);

          // Buscar informações do autor
          const authorId = data.author || "guest";
          const author = authors[authorId] || authors.guest;

          const processedPost = {
            id: post.slug,
            slug: post.slug,
            title: data.title || "Sem título",
            excerpt: data.excerpt || "",
            image: data.image || "",
            date: postDate,
            readTime: readTime,
            tags: Array.isArray(data.tags) ? data.tags : [],
            content: htmlContent,
            author: author,
          } as Post;

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
      .filter((post): post is Post => post !== null)
      .sort((a, b) => {
        // Ordenar por data do frontmatter ou data de modificação
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        // Se ambas as datas são válidas, compara normalmente
        if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
          return dateB.getTime() - dateA.getTime();
        }

        // Se uma data é inválida, coloca o post no final
        if (isNaN(dateA.getTime())) return 1;
        if (isNaN(dateB.getTime())) return -1;

        return 0;
      });

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
    const postsPath = import.meta.env.PROD ? "/src/posts/" : "/posts/";
    const response = await fetch(`${postsPath}${slug}.md`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const content = await response.text();
    const { data, content: markdownContent } = parseFrontMatter(content);
    const htmlContent = marked(markdownContent);

    // Usar a data do frontmatter ou gerar data automaticamente
    const postDate = data.date
      ? formatDate(new Date(data.date))
      : formatDate(new Date());
    const readTime = calculateReadTime(markdownContent);

    // Buscar informações do autor
    const authorId = data.author || "guest";
    const author = authors[authorId] || authors.guest;

    log("Data do post individual:", postDate);
    log("Tempo de leitura:", readTime);
    log("Autor:", author.name);

    return {
      id: slug,
      slug,
      title: data.title || "Sem título",
      excerpt: data.excerpt || "",
      image: data.image || "",
      date: postDate,
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
