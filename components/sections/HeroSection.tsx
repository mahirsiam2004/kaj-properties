'use client';

import { useState, useEffect } from 'react';

const slides = [
  { url: '/assets/banner/1.jpeg', label: 'Premium Living Spaces' },
  { url: '/assets/banner/2.jpeg', label: 'Modern Architecture' },
  { url: '/assets/banner/3.png',  label: 'Luxury Interiors' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black text-white" id="home">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={slide.url}
            alt={slide.label}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${i === current ? 'scale-105' : 'scale-100'}`}
          />

          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Text content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20 h-full flex items-center">
        <div className="max-w-4xl w-full">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight"
          >
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white/70">
              Your Abode of Peace
            </span>
          </h1>
          <p
            className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 font-light max-w-md xl:max-w-xl mb-6 sm:mb-8 lg:mb-10 leading-relaxed"
          >
            Explore the Future of Urban Spaces with Kaz Properties
          </p>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 flex-col gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-white ${i === current ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
