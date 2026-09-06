'use client';

import { useEffect, useState } from 'react';

interface Props { onComplete: () => void; }

export default function LoadingScreen({ onComplete }: Props) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const doneTimer = setTimeout(() => onComplete(), 1700);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[99999] bg-brand-light flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${fadeOut ? 'opacity-0 blur-xl pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
      <div className={`transition-all duration-1000 delay-100 transform ${fadeOut ? 'scale-110 opacity-0' : 'scale-100 opacity-100'} flex flex-col items-center`}>
        <img
          src="/logo.png"
          alt="Kaz Properties"
          className="w-32 md:w-48 object-contain mb-8 filter grayscale brightness-0 opacity-90 transition-transform duration-[2000ms] ease-out"
        />
        <div className="flex flex-col items-center">
          <p className="text-accent uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 animate-pulse">
            Welcome to Your Abode of Peace
          </p>
          <div className="w-32 md:w-48 h-[1px] bg-brand-black/10 overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-full bg-accent transition-transform duration-[1500ms] ease-out origin-left w-full"
              style={{ transform: `scaleX(${fadeOut ? 1 : 0.8})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
