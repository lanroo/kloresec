import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { useSearch } from "../../contexts/search/hooks";
import SearchResults from "../ui/SearchResults";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useSearch();
  const location = useLocation();

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-green-400/20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold hover:text-green-400 transition-colors"
          >
            KloreSec
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
              onClick={handleContact}
              className="hover:text-green-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Search and Mobile Menu Buttons */}
          <div className="flex items-center gap-4">
            {/* Search Button and Input */}
            <div className="relative z-50">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:text-green-400 transition-colors touch-target"
                aria-label={isSearchOpen ? "Close search" : "Open search"}
                aria-expanded={isSearchOpen}
                aria-controls="search-input"
              >
                <Search className="w-5 h-5" />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-60 sm:w-72">
                  <input
                    id="search-input"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search posts..."
                    className="w-full px-4 py-2 bg-black/95 border border-green-400/20 rounded-lg focus:outline-none focus:border-green-400/40 transition-colors"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:text-green-400 transition-colors touch-target"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
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
          <div
            id="mobile-menu"
            className="md:hidden absolute left-0 right-0 top-full mt-2 bg-black/95 backdrop-blur-sm border-t border-green-400/20"
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
              <Link
                to="/"
                className={`touch-target hover:text-green-400 transition-colors ${
                  location.pathname === "/" ? "text-green-400" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`touch-target hover:text-green-400 transition-colors ${
                  location.pathname === "/about" ? "text-green-400" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="#contact"
                onClick={(e) => {
                  handleContact(e);
                  setIsMobileMenuOpen(false);
                }}
                className="touch-target block hover:text-green-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {searchTerm && (
        <SearchResults
          onClose={() => {
            setIsSearchOpen(false);
            setSearchTerm("");
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
