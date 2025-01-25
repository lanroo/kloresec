import React from 'react';
import { Globe, Smartphone, Cloud, Settings, ArrowRight } from 'lucide-react';

const PenetrationTesting: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-24">
      <div className="order-2 md:order-1 relative">
        <div className="absolute -inset-4 bg-green-400/20 blur-xl rounded-full"></div>
        <div className="relative h-[300px] md:h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80" 
            alt="Penetration Testing" 
            className="rounded-lg shadow-2xl w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="order-1 md:order-2 space-y-6 md:space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400" data-searchable>
            Penetration Testing (Pentest)
          </h3>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg" data-searchable>
            We provide specialized Pentest services to protect your systems through comprehensive security assessments. Our expertise covers WEB/API, Mobile, Cloud, and Hardware systems.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg" data-searchable>
            Using Black-box, Gray-box, and White-box approaches, we deliver thorough vulnerability analysis and actionable remediation strategies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-black/40 p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Globe className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <span className="text-sm">WEB / API</span>
          </div>
          <div className="bg-black/40 p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Smartphone className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <span className="text-sm">Mobile</span>
          </div>
          <div className="bg-black/40 p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Cloud className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <span className="text-sm">Cloud</span>
          </div>
          <div className="bg-black/40 p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Settings className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <span className="text-sm">Hardware</span>
          </div>
        </div>

        <button className="w-full md:w-auto bg-[#c5f82a] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#d4ff33] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default PenetrationTesting;