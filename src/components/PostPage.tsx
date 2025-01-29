import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Post } from "../data/types";
import { getPostBySlug } from "../utils/posts";
import "highlight.js/styles/github-dark.css";

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        if (!slug) {
          setError("Post não encontrado");
          return;
        }
        setLoading(true);
        const postData = await getPostBySlug(slug);
        if (!postData) {
          setError("Post não encontrado");
          return;
        }
        setPost(postData);
        setError(null);
      } catch {
        setError("Erro ao carregar o post");
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-lg text-gray-600">Carregando post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-6"
        />
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.author.role}</p>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            <p>{post.date}</p>
            <p>{post.readTime}</p>
          </div>
        </div>
      </header>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />
    </article>
  );
}
