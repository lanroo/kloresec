import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowDown, ArrowUp } from "lucide-react";
import { useTag } from "../../hooks/useTag";
import { usePosts } from "../../hooks/usePosts";

const POSTS_PER_PAGE = 4;

const BlogSection: React.FC = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const { filterByTag } = useTag();
  const { posts, loading, error } = usePosts();

  const showMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + POSTS_PER_PAGE, posts.length));
  };

  const showLessPosts = () => {
    setVisiblePosts(POSTS_PER_PAGE);
    document
      .querySelector("#latest-news")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex justify-center items-center">
          <p className="text-lg text-gray-400">Carregando posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex justify-center items-center">
          <p className="text-lg text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  // Extrair tags únicas de todos os posts
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  return (
    <>
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {posts.slice(0, visiblePosts).map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <article className="h-full bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-green-400/40 hover:scale-[1.02]">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
                  <div className="absolute bottom-0 left-0 p-3 sm:p-4 w-full">
                    <div className="flex items-center gap-2 mb-2 text-xs sm:text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 mb-2">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Autor */}
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-600 object-cover flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-gray-300 truncate">
                        {post.author.name}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {post.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={(e) => {
                            e.preventDefault();
                            filterByTag(tag);
                          }}
                          className="text-xs px-2 py-1 bg-green-400/10 rounded-full border border-green-400/20 hover:border-green-400/40 transition-colors"
                          data-searchable
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-12">
          {visiblePosts < posts.length ? (
            <button
              onClick={showMorePosts}
              className="group relative inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm 
                border border-green-400/20 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base
                hover:border-green-400/40 hover:bg-black/60 transition-all duration-300
                before:absolute before:inset-0 before:bg-green-400/10 before:rounded-lg
                before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100
                before:origin-left"
            >
              <span className="relative">Mostrar Mais Posts</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 relative transition-transform group-hover:translate-y-1" />
            </button>
          ) : (
            <button
              onClick={showLessPosts}
              className="group relative inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm 
                border border-green-400/20 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base
                hover:border-green-400/40 hover:bg-black/60 transition-all duration-300
                before:absolute before:inset-0 before:bg-green-400/10 before:rounded-lg
                before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100
                before:origin-left"
            >
              <span className="relative">Mostrar Menos</span>
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 relative transition-transform group-hover:-translate-y-1" />
            </button>
          )}
        </div>
      </section>

      {/* Latest Posts and Explore Tags Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Latest Posts */}
          <div>
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="relative">
                <span className="absolute -inset-1 bg-green-400/30 blur-sm rounded-lg"></span>
                <h2 className="relative bg-black px-3 sm:px-4 py-1 text-xl sm:text-2xl md:text-3xl font-bold border border-green-400/50 rounded-lg">
                  Últimos
                  <span className="text-green-400 ml-2">Posts</span>
                </h2>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {posts.slice(0, 2).map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex gap-3 sm:gap-4 items-start"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-1">
                      <span>{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3
                      className="font-mono text-base sm:text-lg group-hover:text-green-400 transition-colors line-clamp-2"
                      data-searchable
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 min-w-0">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-gray-400 truncate">
                        {post.author.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Explore Tags */}
          <div>
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="relative">
                <span className="absolute -inset-1 bg-green-400/30 blur-sm rounded-lg"></span>
                <h2 className="relative bg-black px-3 sm:px-4 py-1 text-xl sm:text-2xl md:text-3xl font-bold border border-green-400/50 rounded-lg">
                  Explorar
                  <span className="text-green-400 ml-2">Tags</span>
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => filterByTag(tag)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm bg-gray-800/50 hover:bg-gray-700/50 
                    border border-green-400/20 hover:border-green-400/40 transition-colors"
                  data-searchable
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
