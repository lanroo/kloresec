import React, { createContext, useState, useEffect } from "react";
import { posts } from "../data/posts";
import { SearchContextType, SearchResult } from "./types";

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Buscar em elementos com data-searchable
    const searchableElements = document.querySelectorAll("[data-searchable]");
    searchableElements.forEach((element) => {
      const text = element.textContent?.toLowerCase() || "";
      if (text.includes(query)) {
        results.push({
          type: element.tagName === "H3" ? "service" : "content",
          title: element.textContent || "",
          content: element.textContent || "",
          element: element as HTMLElement,
        });
      }
    });

    // Buscar nos posts
    posts.forEach((post) => {
      const shouldInclude =
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      if (shouldInclude) {
        results.push({
          type: "post",
          title: post.title,
          content: post.excerpt,
          url: `/blog/${post.slug}`,
          tags: post.tags,
          excerpt: post.excerpt,
        });
      }
    });

    setSearchResults(results);
  }, [searchQuery]);

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, searchResults }}
    >
      {children}
    </SearchContext.Provider>
  );
};
