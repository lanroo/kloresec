import React from "react";
import { useParams, Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { usePosts } from "../hooks/usePosts";

const TagPosts: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  const { posts, loading, error } = usePosts();

  const filteredPosts = posts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag?.toLowerCase())
  );

  if (loading) {
    return (
      <div className="pt-28 min-h-[80vh]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <p className="text-lg text-gray-400">Carregando posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-28 min-h-[80vh]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <p className="text-lg text-red-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-[80vh]">
      <div className="container mx-auto px-4">
        <div className="relative mb-12">
          <span className="absolute -inset-1 bg-green-400/30 blur-sm rounded-lg"></span>
          <h1 className="relative bg-black px-4 py-2 text-3xl md:text-4xl font-bold border border-green-400/50 rounded-lg inline-block">
            Posts tagged with
            <span className="text-green-400 ml-2">{tag}</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <article className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-green-400/40 hover:scale-[1.02]">
                <div className="relative h-48 md:h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/75"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center gap-4 mb-2 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full border border-gray-600 object-cover"
                      />
                      <span className="text-sm text-gray-300">
                        {post.author.name}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                      {post.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className={`text-xs px-2 py-1 rounded-full border ${
                            t.toLowerCase() === tag?.toLowerCase()
                              ? "bg-green-400/20 border-green-400"
                              : "bg-green-400/10 border-green-400/20"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">
              No posts found with this tag.
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-green-400/10 border border-green-400/20 rounded-lg hover:bg-green-400/20 hover:border-green-400/40 transition-all duration-300"
            >
              Return to home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagPosts;
