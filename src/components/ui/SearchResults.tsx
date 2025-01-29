import React, { useEffect, useState } from "react";
import { useSearch } from "../../contexts/search/hooks";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Post } from "../../data/types";
import { getAllPosts } from "../../utils/posts";

interface SearchResultsProps {
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ onClose }) => {
  const { searchTerm } = useSearch();
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchPosts = async () => {
      if (!searchTerm) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const posts = await getAllPosts();
        const filtered = posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setResults(filtered);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    };

    searchPosts();
  }, [searchTerm]);

  if (!searchTerm) return null;

  return (
    <div className="fixed inset-0 z-45 flex items-start justify-center pt-32 sm:pt-40 md:pt-48 px-4">
      <div className="bg-black/95 backdrop-blur-sm border border-green-400/20 rounded-lg w-full max-w-2xl shadow-lg max-h-[calc(100vh-180px)] sm:max-h-[calc(100vh-200px)] md:max-h-[calc(100vh-240px)] overflow-y-auto">
        <div className="sticky top-0 flex items-center justify-between p-4 border-b border-green-400/20 bg-black/95 backdrop-blur-sm">
          <h2 className="text-lg font-semibold">Resultados da busca</h2>
          <button
            onClick={onClose}
            className="p-2 hover:text-green-400 transition-colors"
            aria-label="Fechar resultados"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          {loading ? (
            <div className="text-center text-gray-400">
              <div className="animate-pulse">Buscando...</div>
            </div>
          ) : results.length > 0 ? (
            <ul className="space-y-4">
              {results.map((post) => (
                <li
                  key={post.slug}
                  className="border-b border-green-400/10 last:border-0 pb-4 last:pb-0"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    onClick={onClose}
                    className="block hover:bg-green-400/10 p-2 rounded transition-colors"
                  >
                    <h3 className="text-green-400 font-medium mb-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      {post.tags.length > 0 && (
                        <>
                          <span>•</span>
                          <div className="flex flex-wrap gap-1">
                            {post.tags.map((tag) => (
                              <span key={tag} className="text-green-400/60">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-400">
              Nenhum resultado encontrado para "{searchTerm}"
            </p>
          )}
        </div>
      </div>

      {/* Overlay para fechar ao clicar fora */}
      <div
        className="fixed inset-0 bg-black/50 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />
    </div>
  );
};

export default SearchResults;
