import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
