import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TagContextType {
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  filterByTag: (tag: string) => void;
}

const TagContext = createContext<TagContextType | undefined>(undefined);

export const TagProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const navigate = useNavigate();

  const filterByTag = (tag: string) => {
    setSelectedTag(tag);
    navigate(`/tag/${tag.toLowerCase()}`);
  };

  return (
    <TagContext.Provider value={{ selectedTag, setSelectedTag, filterByTag }}>
      {children}
    </TagContext.Provider>
  );
};

export { TagContext };
