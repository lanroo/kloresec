import React from 'react';
import MatrixRain from '../ui/MatrixRain';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] md:h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dggewyuon/image/upload/v1737837251/112222_wfwr35.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Klore Sec</h1>
        <p className="text-lg md:text-xl text-gray-400">Arsenal of Hacking and Offensive Security content.</p>
      </div>
      <MatrixRain />
    </section>
  );
};

export default Hero;