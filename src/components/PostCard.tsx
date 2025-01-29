import { Post } from "@/data/types";
import { Link } from "react-router-dom";
import { PostInfo } from "./PostInfo";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative flex flex-col space-y-2">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="aspect-[2/1] w-full rounded-md object-cover transition-all hover:opacity-90"
        />
      )}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              #{tag}
            </Link>
          ))}
        </div>
        <h2 className="text-xl font-semibold tracking-tight">
          <Link to={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        {post.excerpt && (
          <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
        )}
        <PostInfo
          date={post.date}
          readTime={post.readTime}
          author={post.author}
        />
      </div>
    </article>
  );
}
