import React from 'react';
import { Shield, Code, Bug, Globe, ArrowRight } from 'lucide-react';

const SecurityDevelopment: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-24">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400" data-searchable>Security Development</h3>
          <p className="text-gray-300 leading-relaxed" data-searchable>
            We offer specialized services in application security ensuring that your systems
            are protected against vulnerabilities and cyber attacks from the beginning of
            development.
          </p>
          <p className="text-gray-300 leading-relaxed" data-searchable>
            We will implement security at all stages of the software development lifecycle
            (SDLC). Where we will carry out activities such as:
          </p>
          <p className="text-gray-300" data-searchable>
            Threat Modeling, SAST, IaC, DAST, Monitoring, and Pentest.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-black/40 p-3 md:p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
            <span className="text-xs md:text-sm">SAST</span>
          </div>
          <div className="bg-black/40 p-3 md:p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Code className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
            <span className="text-xs md:text-sm">IaC</span>
          </div>
          <div className="bg-black/40 p-3 md:p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Bug className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
            <span className="text-xs md:text-sm">DAST</span>
          </div>
          <div className="bg-black/40 p-3 md:p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Globe className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
            <span className="text-xs md:text-sm">Web API</span>
          </div>
        </div>

        <button className="w-full md:w-auto bg-[#c5f82a] text-black px-4 md:px-6 py-3 rounded-lg font-bold hover:bg-[#d4ff33] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative mt-8 md:mt-0">
        <div className="absolute -inset-4 bg-green-400/20 blur-xl rounded-full"></div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
            alt="Security Development" 
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityDevelopment;