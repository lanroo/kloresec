import React from "react";
import MatrixRain from "../../ui/MatrixRain";

const Hero: React.FC = () => {
  return (
    <section role="banner" className="relative h-[60vh] w-full overflow-hidden">
      {/* Background Image Container */}
      <div
        data-testid="hero-background"
        className="absolute inset-0 w-full h-full"
      >
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="https://res.cloudinary.com/dggewyuon/image/upload/w_640,q_auto,f_auto/v1737837251/112222_wfwr35.jpg"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="https://res.cloudinary.com/dggewyuon/image/upload/w_1024,q_auto,f_auto/v1737837251/112222_wfwr35.jpg"
          />
          <img
            src="https://res.cloudinary.com/dggewyuon/image/upload/q_auto,f_auto/v1737837251/112222_wfwr35.jpg"
            alt="Hero background"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Matrix Rain Effect - Full Height */}
      <div className="absolute inset-0 w-full h-full">
        <MatrixRain />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center w-full">
        <div className="text-center px-4 w-full max-w-4xl mx-auto z-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4 transition-all">
            Klore Sec
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto transition-all">
            Arsenal of Hacking and Offensive Security content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
