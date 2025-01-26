import React from "react";
import { siteConfig } from "../config/site";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-green-400/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-green-400 mb-4">KLORE</h2>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} {siteConfig.name}.
          </p>
          <p className="text-gray-400 text-sm mt-2">
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
    </footer>
  );
};

export default Footer;
