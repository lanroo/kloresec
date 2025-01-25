import React from 'react';
import StatsCard from '../ui/StatsCard';

const ServicesSection: React.FC = () => {
  return (
    <section id="purpose" className="container mx-auto px-4 py-16 md:py-24 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4" data-searchable>Sophistication & Dedication</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed" data-searchable>
            We offer services that guarantee the security of your systems and information, 
            allowing you to focus on what really matters: the growth of your business.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed" data-searchable>
            With us, your company will always be one step ahead of cyber attacks.
          </p>
          <button className="mt-6 md:mt-8 bg-green-400 text-black px-6 md:px-8 py-3 rounded-lg font-bold 
            hover:bg-green-500 transition-colors duration-300 transform hover:scale-105 w-full md:w-auto">
            Contact Us
          </button>
        </div>
        <div className="relative mt-8 md:mt-0">
          <div className="absolute -inset-4 bg-green-400/20 blur-xl rounded-full"></div>
          <div className="relative">
            <StatsCard />
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
              alt="Cybersecurity Services" 
              className="relative rounded-lg shadow-2xl w-full h-full object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;