import React, { useState } from "react";
import { posts, tags } from "../../data/posts";
import { Link } from "react-router-dom";
import { Clock, ArrowDown, ArrowUp } from "lucide-react";
import { useTag } from "../../hooks/useTag";

const POSTS_PER_PAGE = 4;

const BlogSection: React.FC = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const { filterByTag } = useTag();

  const showMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + POSTS_PER_PAGE, posts.length));
  };

  const showLessPosts = () => {
    setVisiblePosts(POSTS_PER_PAGE);
    document
      .querySelector("#latest-news")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(0, visiblePosts).map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
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

                    {/* Autor */}
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

                    <h3
                      className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors"
                      data-searchable
                    >
                      {post.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
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

        <div className="flex justify-center mt-12">
          {visiblePosts < posts.length ? (
            <button
              onClick={showMorePosts}
              className="group relative inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm 
                border border-green-400/20 px-8 py-3 rounded-lg font-bold
                hover:border-green-400/40 hover:bg-black/60 transition-all duration-300
                before:absolute before:inset-0 before:bg-green-400/10 before:rounded-lg
                before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100
                before:origin-left"
            >
              <span className="relative">Show More Posts</span>
              <ArrowDown className="w-5 h-5 relative transition-transform group-hover:translate-y-1" />
            </button>
          ) : (
            <button
              onClick={showLessPosts}
              className="group relative inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm 
                border border-green-400/20 px-8 py-3 rounded-lg font-bold
                hover:border-green-400/40 hover:bg-black/60 transition-all duration-300
                before:absolute before:inset-0 before:bg-green-400/10 before:rounded-lg
                before:transition-transform before:duration-300 before:scale-x-0 hover:before:scale-x-100
                before:origin-left"
            >
              <span className="relative">Show Less</span>
              <ArrowUp className="w-5 h-5 relative transition-transform group-hover:-translate-y-1" />
            </button>
          )}
        </div>
      </section>

      {/* Latest Posts and Explore Tags Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Latest Posts */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="relative">
                <span className="absolute -inset-1 bg-green-400/30 blur-sm rounded-lg"></span>
                <h2 className="relative bg-black px-4 py-1 text-2xl md:text-3xl font-bold border border-green-400/50 rounded-lg">
                  Latest
                  <span className="text-green-400 ml-2">Posts</span>
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {posts.slice(0, 2).map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group flex gap-4 items-start"
                >
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                      <span>{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3
                      className="font-mono text-lg group-hover:text-green-400 transition-colors"
                      data-searchable
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-5 h-5 rounded-full"
                      />
                      <span className="text-sm text-gray-400">
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
            <div className="flex items-center gap-2 mb-8">
              <div className="relative">
                <span className="absolute -inset-1 bg-green-400/30 blur-sm rounded-lg"></span>
                <h2 className="relative bg-black px-4 py-1 text-2xl md:text-3xl font-bold border border-green-400/50 rounded-lg">
                  Explore
                  <span className="text-green-400 ml-2">Tags</span>
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => filterByTag(tag)}
                  className="px-4 py-2 rounded-full text-sm bg-gray-800/50 hover:bg-gray-700/50 
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
