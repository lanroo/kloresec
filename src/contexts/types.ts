export interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: SearchResult[];
}

export interface SearchResult {
  type: "post" | "service" | "content";
  title: string;
  content: string;
  url?: string;
  tags?: string[];
  excerpt?: string;
  element?: HTMLElement;
  slug?: string;
}

export interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}
