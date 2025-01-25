import React, { useState, useEffect } from 'react';
import { Terminal, Search, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Element[]>([]);
  const [currentResultIndex, setCurrentResultIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Close search with Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;

    // Normalize search query
    const query = searchQuery.toLowerCase().trim();
    
    // Find all searchable elements
    const elements = Array.from(document.querySelectorAll('[data-searchable]'));
    const matches = elements.filter(element => {
      const content = element.textContent?.toLowerCase() || '';
      return content.includes(query);
    });

    setSearchResults(matches);
    
    if (matches.length > 0) {
      setCurrentResultIndex(0);
      scrollToResult(matches[0]);
    }
  };

  const scrollToResult = (element: Element) => {
    // Remove previous highlights
    document.querySelectorAll('.search-highlight').forEach(el => {
      el.classList.remove('search-highlight');
    });

    // Scroll to element
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    // Add highlight effect
    element.classList.add('search-highlight');
  };

  const handleNextResult = () => {
    if (searchResults.length === 0) return;
    
    const nextIndex = (currentResultIndex + 1) % searchResults.length;
    setCurrentResultIndex(nextIndex);
    scrollToResult(searchResults[nextIndex]);
  };

  const handlePrevResult = () => {
    if (searchResults.length === 0) return;
    
    const prevIndex = currentResultIndex === 0 
      ? searchResults.length - 1 
      : currentResultIndex - 1;
    setCurrentResultIndex(prevIndex);
    scrollToResult(searchResults[prevIndex]);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold">KLORE SEC</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-green-400 transition-colors">HOME</a>
            <a href="#purpose" className="hover:text-green-400 transition-colors">OUR PURPOSE</a>
            <a href="#services" className="hover:text-green-400 transition-colors">SERVICES</a>
            <a href="#" className="hover:text-green-400 transition-colors">CONTACT</a>
            
            {/* Search Bar */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hover:text-green-400 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 bg-black/95 backdrop-blur-sm border border-green-400/20 rounded-lg p-2 w-80">
                  <form onSubmit={handleSearch}>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="bg-transparent border-b border-green-400/20 px-2 py-1 focus:outline-none focus:border-green-400 w-full text-sm"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="text-green-400 hover:text-green-500 transition-colors"
                        aria-label="Submit search"
                      >
                        <Search className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                  
                  {searchResults.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-green-400/20">
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>
                          {currentResultIndex + 1} of {searchResults.length} results
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={handlePrevResult}
                            className="hover:text-green-400 transition-colors"
                            aria-label="Previous result"
                          >
                            ↑
                          </button>
                          <button
                            onClick={handleNextResult}
                            className="hover:text-green-400 transition-colors"
                            aria-label="Next result"
                          >
                            ↓
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button className="bg-green-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-green-500 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-100 hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#" className="hover:text-green-400 transition-colors py-2">HOME</a>
              <a href="#purpose" className="hover:text-green-400 transition-colors py-2">OUR PURPOSE</a>
              <a href="#services" className="hover:text-green-400 transition-colors py-2">SERVICES</a>
              <a href="#" className="hover:text-green-400 transition-colors py-2">CONTACT</a>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-black/50 border border-green-400/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-green-400"
                />
                <button
                  type="submit"
                  className="text-green-400 hover:text-green-500 transition-colors"
                  aria-label="Submit search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>

              <button className="bg-green-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-green-500 transition-colors w-full">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;