import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { posts } from '../data/posts';
import Footer from './Footer';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link 
            to="/" 
            className="text-green-400 hover:text-green-500 transition-colors"
          >
            Return to home
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
          Back
        </button>

        <article className="prose prose-invert prose-green max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1 bg-green-400/10 rounded-full border border-green-400/20"
                >
                  <Tag className="w-4 h-4" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div 
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;