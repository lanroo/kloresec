import React from 'react';
import { Mail, Monitor, Wifi, AlertTriangle, ArrowRight } from 'lucide-react';

const RedTeamOperations: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-green-400" data-searchable>
            Red Team Operations
          </h3>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg" data-searchable>
            Our Red Team specializes in simulating real-world cyber attacks to evaluate your organization's security posture. We identify vulnerabilities and test defense effectiveness in both internal and external environments.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg" data-searchable>
            Through strategic assessments, we conduct environment mapping, social engineering, and advanced threat simulations. Our comprehensive reports provide actionable insights for strengthening your security infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-black/40 p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <span className="text-sm">Phishing</span>
          </div>
          <div className="bg-black/40 p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Monitor className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <span className="text-sm">Active Directory</span>
          </div>
          <div className="bg-black/40 p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <Wifi className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <span className="text-sm">Wi-Fi Hacking</span>
          </div>
          <div className="bg-black/40 p-4 rounded-lg border border-green-400/20 backdrop-blur-sm text-center hover:border-green-400/40 transition-colors">
            <AlertTriangle className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <span className="text-sm">Ransomware Simulation</span>
          </div>
        </div>

        <button className="w-full md:w-auto bg-[#c5f82a] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#d4ff33] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group">
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative mt-8 md:mt-0">
        <div className="absolute -inset-4 bg-green-400/20 blur-xl rounded-full"></div>
        <div className="relative h-[300px] md:h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80" 
            alt="Red Team Operations" 
            className="rounded-lg shadow-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RedTeamOperations;