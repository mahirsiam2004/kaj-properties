import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const doneTimer = setTimeout(() => onComplete(), 1700);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-brand-light flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
    >
      <img 
        src="/logo.png" 
        alt="Kaz Properties" 
        className="w-48 sm:w-64 md:w-80 object-contain mb-8 filter grayscale brightness-0 opacity-80" 
      />

      <div className="w-48 md:w-64 h-1 bg-brand-black/10 mt-12 overflow-hidden rounded-full relative">
        <div className="absolute top-0 left-0 h-full bg-accent animate-pulse w-full"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;