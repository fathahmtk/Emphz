import React, { useState, useEffect, useMemo } from 'react';
import Button from './Button';
import { HERO_SECTION } from '../constants';

const kenburnsAnimations = [
  'animate-kenburns-center',
  'animate-kenburns-top-left',
  'animate-kenburns-bottom-right',
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Memoize the animation class so it doesn't change on every render, only when the image index changes.
  const animationClass = useMemo(() => {
    return kenburnsAnimations[currentImageIndex % kenburnsAnimations.length];
  }, [currentImageIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_SECTION.backgroundImages.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative h-screen flex items-end justify-start text-left overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Showcase of EMPHZ industries"
    >
      {/* Background Images Wrapper for opacity transition */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_SECTION.backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentImageIndex ? 1 : 0, zIndex: -1 }}
          >
            {/* The actual image div with animation that gets a new key on change */}
            {index === currentImageIndex && (
              <div
                key={currentImageIndex} // Use index to force re-mount and restart animation
                className={`w-full h-full bg-cover bg-center ${animationClass}`}
                style={{ backgroundImage: `url('${image}')` }}
              />
            )}
          </div>
        ))}
      </div>


      {/* Dark Gradient Overlay to enhance text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0"></div>

      <div className="relative z-10 p-8 md:p-16 max-w-3xl text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fadeInUp shadow-text-lg">
          {HERO_SECTION.headline}
        </h1>
        <p className="text-lg lg:text-xl font-light text-white/90 max-w-3xl mb-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {HERO_SECTION.subline}
        </p>
        <div className="flex flex-wrap items-center justify-start gap-4 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <Button variant="primary" href="/contact" className="px-8 py-4 text-lg">
            {HERO_SECTION.cta1}
          </Button>
          <Button variant="secondary" href="/products" className="px-8 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white/20 hover:border-white">
            {HERO_SECTION.cta2}
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;