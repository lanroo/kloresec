export interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
}

export interface SearchResult {
  type: "service" | "content" | "post";
  title: string;
  content: string;
  element?: HTMLElement;
  url?: string;
  tags?: string[];
  excerpt?: string;
}
