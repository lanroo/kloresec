import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Tag,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  AlertTriangle,
} from "lucide-react";
import { getPostBySlug, getAllPosts } from "../utils/posts";
import { siteConfig } from "../config/site";
import { Post } from "../data/types";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPost() {
      if (slug) {
        const postData = await getPostBySlug(slug);
        if (postData) {
          setPost(postData);
          // Carregar posts relacionados
          const allPosts = await getAllPosts();
          const related = allPosts
            .filter(
              (p) =>
                p.slug !== slug &&
                p.tags.some((tag) => postData.tags.includes(tag))
            )
            .slice(0, 3);
          setRelatedPosts(related);

          // Atualiza as meta tags
          document.title = `${postData.title} | ${siteConfig.name}`;
          updateMetaTag(
            "description",
            postData.excerpt || siteConfig.description
          );
          updateMetaTag("og:type", "article");
          updateMetaTag("og:title", postData.title);
          updateMetaTag("og:description", postData.excerpt || postData.title);
          updateMetaTag("og:image", postData.image);
          updateMetaTag("og:url", `${siteConfig.url}/blog/${postData.slug}`);
          updateMetaTag("og:site_name", siteConfig.name);
          updateMetaTag("og:image:width", "1200");
          updateMetaTag("og:image:height", "630");
          updateMetaTag("og:image:alt", postData.title);
          updateMetaTag("article:published_time", postData.date);
          updateMetaTag("article:author", postData.author.name);
          updateMetaTag("article:section", postData.tags[0]);
          postData.tags.forEach((tag) => {
            updateMetaTag("article:tag", tag);
          });

          updateMetaTag("twitter:card", "summary_large_image");
          updateMetaTag("twitter:site", "@kloresec");
          updateMetaTag(
            "twitter:creator",
            "@" +
              (postData.author.social?.twitter?.replace(
                /https?:\/\/(www\.)?twitter\.com\//,
                ""
              ) || "kloresec")
          );
          updateMetaTag("twitter:title", postData.title);
          updateMetaTag(
            "twitter:description",
            postData.excerpt || postData.title
          );
          updateMetaTag("twitter:image", postData.image);
          updateMetaTag(
            "twitter:url",
            `${siteConfig.url}/blog/${postData.slug}`
          );
        }
      }
    }
    loadPost();

    return () => {
      // Limpa as meta tags
      document.title = siteConfig.name;
      removeMetaTag("description");
      removeMetaTag("og:type");
      removeMetaTag("og:title");
      removeMetaTag("og:description");
      removeMetaTag("og:image");
      removeMetaTag("og:url");
      removeMetaTag("og:site_name");
      removeMetaTag("og:image:width");
      removeMetaTag("og:image:height");
      removeMetaTag("og:image:alt");
      removeMetaTag("article:published_time");
      removeMetaTag("article:author");
      removeMetaTag("article:section");
      removeMetaTag("article:tag");
      removeMetaTag("twitter:card");
      removeMetaTag("twitter:site");
      removeMetaTag("twitter:creator");
      removeMetaTag("twitter:title");
      removeMetaTag("twitter:description");
      removeMetaTag("twitter:image");
      removeMetaTag("twitter:url");
    };
  }, [slug]);

  const updateMetaTag = (name: string, content: string) => {
    let meta =
      document.querySelector(`meta[property="${name}"]`) ||
      document.querySelector(`meta[name="${name}"]`);

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(name.includes("og:") ? "property" : "name", name);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  };

  const removeMetaTag = (name: string) => {
    const meta =
      document.querySelector(`meta[property="${name}"]`) ||
      document.querySelector(`meta[name="${name}"]`);
    if (meta) meta.remove();
  };

  const handleShare = (platform: string) => {
    if (!post) return;

    const postUrl = `${siteConfig.url}/blog/${post.slug}`;
    const title = post.title;
    const description = post.excerpt || "";
    const hashtags = post.tags.map((tag) => tag.replace(/\s+/g, "")).join(" #");

    const twitterText = `🔍 ${title}\n\n${description}\n\n#${hashtags} #cybersecurity #pentest`;
    const linkedinText = `🔐 Novo artigo sobre ${title}\n\n${description}\n\nConfira mais detalhes sobre este estudo de caso em profundidade. #${hashtags} #cybersecurity #pentest`;
    const facebookText = `📢 ${title}\n\n${description}\n\nAcesse o artigo completo para aprender mais sobre este caso interessante de segurança.\n\n#${hashtags} #cybersecurity #pentest`;

    const twitterUrl = new URL("https://twitter.com/intent/tweet");

    switch (platform) {
      case "twitter":
        twitterUrl.searchParams.append("text", twitterText);
        twitterUrl.searchParams.append("url", postUrl);
        twitterUrl.searchParams.append("via", "kloresec");
        window.open(twitterUrl.toString(), "_blank", "noopener,noreferrer");
        break;

      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            postUrl
          )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
            linkedinText
          )}`,
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case "facebook":
        window.open(
          `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
            postUrl
          )}&quote=${encodeURIComponent(facebookText)}`,
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case "copy":
        navigator.clipboard.writeText(
          `${title}\n\n${description}\n\n#${hashtags} #cybersecurity #pentest\n\n${postUrl}`
        );
        break;
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
          <Link
            to="/"
            className="text-green-400 hover:text-green-500 transition-colors"
          >
            Voltar para home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-32 relative">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar
        </button>

        <article className="prose prose-invert prose-green max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full border-2 border-green-400/20"
              />
              <div>
                <a
                  href="https://www.linkedin.com/in/lucas-d-86730b227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-green-400 hover:text-green-500 transition-colors"
                >
                  {post.author.name}
                </a>
                <p className="text-gray-400 text-sm">{post.author.role}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/tags/${tag.toLowerCase()}`}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </Link>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-8 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-500 mb-1">
                  Disclaimer
                </h4>
                <p className="text-sm text-gray-300">
                  Este artigo é apenas para fins educacionais. As técnicas
                  descritas devem ser usadas apenas em ambientes de teste
                  autorizados. Sempre siga as leis e regulamentos aplicáveis.
                </p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />

          {/* Share Buttons */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <h3 className="text-xl font-semibold mb-4">
              Compartilhe este artigo
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() => handleShare("twitter")}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                title="Compartilhar no Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                title="Compartilhar no LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                title="Compartilhar no Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare("copy")}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                title="Copiar link"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-16 bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full border-2 border-green-400/20"
              />
              <div>
                <h4 className="font-bold text-green-400 text-lg">
                  {post.author.name}
                </h4>
                <p className="text-gray-400">{post.author.role}</p>
              </div>
            </div>
            <p className="text-gray-300">
              Sou o CEO da Klore Security. Um pesquisador apaixonado por
              cybersecurity com expertise em testes de penetração, avaliação de
              vulnerabilidades e operações de red team. Comprometido em tornar o
              mundo digital mais seguro através da educação e divulgação
              responsável.
            </p>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-green-400/20">
              <h2 className="text-2xl font-bold mb-6">Posts Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg overflow-hidden">
                      <div className="relative h-48">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="text-lg font-bold group-hover:text-green-400 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                            <Clock className="w-4 h-4" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
