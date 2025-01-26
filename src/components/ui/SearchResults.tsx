import React from "react";
import { useSearch } from "../../contexts/useSearch";
import { SearchResult } from "../../contexts/types";
import { X, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchResultsProps {
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ onClose }) => {
  const { searchResults, searchQuery } = useSearch();
  const navigate = useNavigate();

  if (!searchQuery) return null;

  const handleResultClick = (result: SearchResult) => {
    if (result.url) {
      navigate(result.url);
      onClose();
    } else if (result.element) {
      result.element.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-black/90 border border-green-400/20 rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">
              Resultados da pesquisa para "{searchQuery}"
            </h2>
            <button
              onClick={onClose}
              className="hover:text-green-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {searchResults.length === 0 ? (
            <p className="text-gray-400">Nenhum resultado encontrado.</p>
          ) : (
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="p-4 border border-green-400/20 rounded-lg hover:border-green-400/40 transition-colors cursor-pointer"
                  onClick={() => handleResultClick(result)}
                >
                  <h3 className="font-bold text-green-400 mb-2">
                    {result.title}
                  </h3>
                  <p className="text-gray-400 mb-2">{result.content}</p>

                  {result.type === "post" && result.tags && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {result.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-green-400/10 rounded-full border border-green-400/20"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="text-sm text-gray-500 mt-2">
                    {result.type === "post"
                      ? "Post"
                      : result.type === "service"
                      ? "Serviço"
                      : "Conteúdo"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
