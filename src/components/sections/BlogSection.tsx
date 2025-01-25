import React, { useState } from 'react';
import { posts } from '../../data/posts';
import { Link } from 'react-router-dom';
import { Clock, ArrowDown, ArrowUp } from 'lucide-react';

const POSTS_PER_PAGE = 4;

const BlogSection: React.FC = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

  const showMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + POSTS_PER_PAGE, posts.length));
  };

  const showLessPosts = () => {
    setVisiblePosts(POSTS_PER_PAGE);
    document.querySelector('#latest-news')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div id="latest-news" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" data-searchable>
          Latest Cybersecurity News
        </h2>
        <p className="text-gray-400 text-lg" data-searchable>
          Stay informed about the latest threats and security best practices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.slice(0, visiblePosts).map(post => (
          <Link 
            key={post.id} 
            to={`/blog/${post.slug}`}
            className="group"
          >
            <article className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-green-400/40 hover:scale-[1.02]">
              <div className="relative h-48 md:h-64">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center gap-4 mb-2 text-sm text-gray-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 bg-green-400/10 rounded-full border border-green-400/20"
                      >
                        {tag}
                      </span>
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
  );
};

export default BlogSection;