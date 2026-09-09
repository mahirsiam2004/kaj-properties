'use client';

import { useState, useEffect } from 'react';

const slides = [
  { url: '/assets/banner/3 copy.jpg.jpeg', label: 'Premium Living Spaces' },
  { url: '/assets/banner/4 copy.jpg.jpeg', label: 'Modern Architecture' },
  { url: '/assets/banner/5 copy.jpg.jpeg', label: 'Luxury Interiors' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-brand-black text-white" id="home">
      {/* Background image slides — use img not bg-fixed (bg-fixed breaks inside Swiper) */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 h-full flex items-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-6 md:mb-8 xl:mb-10 leading-[1.1] tracking-tight">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent/50">
              Your Abode of Peace
            </span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white/80 font-light max-w-md xl:max-w-xl mb-8 md:mb-10 xl:mb-12 leading-relaxed">
            Explore the Future of Urban Spaces with Kaz Properties
          </p>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-4">
        {slides.map((_, i) => (
          <button key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${i === current ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'}`}
            onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
