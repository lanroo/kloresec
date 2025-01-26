import React from "react";
import { siteConfig } from "../config/site";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-green-400/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Logo e Redes Sociais */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-green-400 mb-4 text-center tracking-wider">
              KLORE SECURITY
            </h2>
            <div className="flex items-center justify-center gap-8">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Linha Divisória */}
          <div className="w-24 h-px bg-green-400/20 my-6" />

          {/* Copyright e Créditos */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Developed by{" "}
              <a
                href="https://lannadevinger.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500 transition-colors"
              >
                Deevoy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
