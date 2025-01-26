import React, { useState, useEffect } from "react";
import { Terminal, Search, X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSearch } from "../../contexts/useSearch";
import SearchResults from "../ui/SearchResults";

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-sm border-b border-green-400/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Terminal className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold">KLORE SEC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`hover:text-green-400 transition-colors ${
                location.pathname === "/" ? "text-green-400" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-green-400 transition-colors ${
                location.pathname === "/about" ? "text-green-400" : ""
              }`}
            >
              About
            </Link>
            <a
              href="#contact"
              className="hover:text-green-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Search and Mobile Menu Buttons */}
          <div className="flex items-center gap-4">
            {/* Search Button and Input */}
            <div className="relative">
              {isSearchOpen ? (
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 
                  bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-lg p-2 w-64 md:w-80"
                >
                  <Search className="w-5 h-5 text-green-400" />
                  <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="bg-transparent border-none outline-none text-sm w-full text-gray-100 placeholder-gray-400"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="hover:text-green-400 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:text-green-400 transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:text-green-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-black/95 backdrop-blur-sm border-t border-green-400/20">
            <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
              <Link
                to="/"
                className={`hover:text-green-400 transition-colors ${
                  location.pathname === "/" ? "text-green-400" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`hover:text-green-400 transition-colors ${
                  location.pathname === "/about" ? "text-green-400" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="#contact"
                className="block hover:text-green-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Search Results */}
      {searchQuery && (
        <SearchResults
          onClose={() => {
            setIsSearchOpen(false);
            setSearchQuery("");
          }}
        />
      )}
    </header>
  );
};

export default Navbar;
