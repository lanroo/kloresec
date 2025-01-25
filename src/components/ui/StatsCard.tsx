import React from 'react';
import { DollarSign } from 'lucide-react';

const StatsCard: React.FC = () => {
  return (
    <div className="relative">
      <img 
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
        alt="Cybersecurity Background" 
        className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-20 blur-sm"
      />
      <div className="absolute -top-4 left-[15%] -translate-x-1/2 bg-black/80 backdrop-blur-sm p-3 rounded-lg 
        border border-green-400/20 shadow-[0_0_15px_rgba(74,222,128,0.2)] animate-float z-10
        w-[280px] sm:w-[320px] md:w-[340px]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-green-400/10 rounded-lg">
            <DollarSign className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <p className="text-gray-400 text-xs leading-tight">Cybercrime causes global losses of</p>
            <p className="text-green-400 font-bold text-sm leading-tight mt-0.5">US$10.5 trillion per year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;