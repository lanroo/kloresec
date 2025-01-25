import React from 'react';

interface TagsSectionProps {
  tags: string[];
}

const TagsSection: React.FC<TagsSectionProps> = ({ tags }) => {
  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Explore Tags</h2>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {tags.map(tag => (
          <button key={tag} className="tag text-xs md:text-sm">
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TagsSection;