import React from 'react';
import MatrixRain from '../ui/MatrixRain';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dggewyuon/image/upload/v1737837251/112222_wfwr35.jpg")',
        }}
      />
      
      {/* Matrix Rain Effect - Full Height */}
      <div className="absolute inset-0 w-full h-full">
        <MatrixRain />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>
      
      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center w-full">
        <div className="text-center px-4 w-full max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Klore Sec</h1>
          <p className="text-lg md:text-xl text-gray-400">Arsenal of Hacking and Offensive Security content.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;