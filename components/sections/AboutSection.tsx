'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const counters = [
  { end: 18,  suffix: '+', label: 'Total SQFT Built (K)' },
  { end: 27,  suffix: '+', label: 'Number Of Units' },
  { end: 100, suffix: '%', label: 'Happy Clients' },
  { end: 2,   suffix: '+', label: 'Number of Projects' },
];

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function Counter({ end, suffix, label, start, index }: {
  end: number; suffix: string; label: string; start: boolean; index: number;
}) {
  const val = useCountUp(end, 2000, start);
  return (
    <div className={`flex flex-col items-center justify-center py-4 px-2 sm:py-5 sm:px-4
      ${index < 3 ? 'border-b sm:border-b-0 sm:border-r border-white/10' : ''}
      ${index === 1 ? 'border-r border-white/10 sm:border-r' : ''}
    `}>
      <div className="text-2xl sm:text-3xl xl:text-4xl font-bold text-accent leading-none">
        {val}<span className="text-white">{suffix}</span>
      </div>
      <div className="text-[9px] sm:text-[10px] xl:text-xs uppercase tracking-wider text-white/60 text-center mt-1 leading-tight">
        {label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-brand-black text-white relative w-full h-[100dvh] flex items-center overflow-hidden"
      id="about"
    >
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative z-10 w-full h-full flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36 py-6 sm:py-8">

        {/* Section label */}
        <div className="flex items-center gap-2 mb-4 sm:mb-5">
          <div className="w-px h-6 sm:h-8 bg-accent" />
          <span className="text-accent uppercase tracking-widest text-xs sm:text-sm font-bold">About Us</span>
        </div>

        {/* Main grid: text left | video right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 xl:gap-20 items-center flex-1 min-h-0">

          {/* Left: text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light leading-tight mb-3 sm:mb-4">
              Building Tomorrow&apos;s<br className="hidden sm:block" /> Legacy, Today
            </h2>
            <p className="text-xs sm:text-sm xl:text-base leading-relaxed font-light text-white/70 mb-3 sm:mb-4">
              Kaz Properties started its journey in the real estate development sector partnering with renowned projects.
              Backed by current good reputation and sector experience, Kaz Properties has expanded its footprint to the
              building construction sector.
            </p>
            <p className="text-xs sm:text-sm xl:text-base leading-relaxed font-light text-white/70 mb-5 sm:mb-6">
              We have a skilled, experienced, and committed management team — widely experienced professionals trained
              both at home and abroad, including civil engineers, structural engineers, and architects.
            </p>

            {/* Stats grid */}
            <div
              ref={ref}
              className="grid grid-cols-4 border border-white/10 rounded-sm bg-white/[0.04] backdrop-blur-sm mb-5 sm:mb-6"
            >
              {counters.map((c, i) => (
                <Counter key={c.label} {...c} start={started} index={i} />
              ))}
            </div>

            {/* Learn More → management team */}
            <div>
              <Link
                href="/management-team"
                className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-brand-black transition-colors px-5 py-2 sm:px-6 sm:py-2.5 uppercase tracking-widest text-xs sm:text-sm rounded-sm font-semibold"
              >
                Learn More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: video — hidden on very small screens to avoid overflow */}
          <div className="hidden sm:flex flex-col justify-center">
            <div className="relative w-full rounded-sm overflow-hidden border border-white/10 bg-white/[0.03]"
              style={{ aspectRatio: '16/9' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/nQD1CNlsArE?si=-54bb1Cdn4NIOdZl"
                title="About Kaz Properties"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            {/* Decorative accent line below video */}
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-accent/20" />
              <span className="text-white/20 text-[10px] uppercase tracking-widest">Kaz Properties</span>
              <div className="h-px flex-1 bg-accent/20" />
            </div>
          </div>
        </div>

        {/* Video shown below on mobile */}
        <div className="sm:hidden mt-4">
          <div className="relative w-full rounded-sm overflow-hidden border border-white/10 bg-white/[0.03]"
            style={{ aspectRatio: '16/9' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/nQD1CNlsArE?si=-54bb1Cdn4NIOdZl"
              title="About Kaz Properties"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
}
