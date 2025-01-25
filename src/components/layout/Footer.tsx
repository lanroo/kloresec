import React from 'react';
import { Twitter, Github, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6 md:py-8 mt-12 md:mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm md:text-base">© 2024 Klore Sec</p>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            <Youtube className="w-5 h-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;