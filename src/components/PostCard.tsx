import { Post } from "@/data/types";
import { Link } from "react-router-dom";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative flex flex-col w-full min-h-[600px] p-6 pb-3 mb-12 rounded-lg bg-white/5 backdrop-blur-sm">
      <div className="flex flex-col h-full">
        {/* Cabeçalho com data e tempo de leitura */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex-grow space-y-6 mb-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            <Link to={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>

          {post.excerpt && (
            <p className="text-gray-500 dark:text-gray-400 text-base">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-400">{post.author.name}</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/tags/${tag}`}
                className="text-sm px-4 py-1.5 rounded-full bg-gray-700/30 text-gray-300 hover:bg-gray-700/50"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Imagem no final - posicionamento absoluto */}
        {post.image && (
          <div className="absolute bottom-0 left-0 p-3 sm:p-4 w-full">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[250px] object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </article>
  );
}
