'use client';

import { useEffect, useRef, useState } from 'react';

const counters = [
  { end: 18, suffix: '+', label: 'Total SQFT Built (K)' },
  { end: 27, suffix: '+', label: 'Number Of Units' },
  { end: 100, suffix: '%', label: 'Happy Clients' },
  { end: 2, suffix: '+', label: 'Number of Projects' },
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

function Counter({ end, suffix, label, start, index }: { end: number; suffix: string; label: string; start: boolean; index: number }) {
  const val = useCountUp(end, 2000, start);
  return (
    <div className={`flex flex-col items-center justify-center p-2 lg:p-4 pb-2 lg:pb-4 border-b lg:border-b-0 border-white/10 ${index % 2 === 0 ? 'border-r' : 'lg:border-r'} last:border-r-0 last:border-b-0`}>
      <div className="text-base lg:text-3xl font-bold text-accent mb-0.5">{val}<span className="text-white">{suffix}</span></div>
      <div className="text-[7px] lg:text-xs uppercase tracking-wider text-white/70 text-center leading-tight">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-brand-black text-white relative overflow-hidden min-h-[100dvh] flex items-center" id="about">
      <div className="container mx-auto px-4 lg:px-12 w-full py-3 lg:py-12 max-h-[100dvh]">
        <div className="mb-3 lg:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 lg:w-6 lg:h-6 grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => <div key={i} className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-accent' : 'bg-white/50'}`} />)}
            </div>
            <h2 className="text-base lg:text-2xl font-light tracking-wide uppercase">About Us</h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 lg:gap-16 items-center mb-3 lg:mb-10">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-[10px] lg:text-sm leading-snug lg:leading-relaxed font-light text-white/90 text-justify mb-2 lg:mb-4">
              Kaz Properties started its journey in the real estate development sector partnering with renowned projects. Backing with current good reputation and sector experience, Kaz Properties has expanded its footprint to the building construction sector.
            </p>
            <p className="text-[10px] lg:text-sm leading-snug lg:leading-relaxed font-light text-white/90 text-justify mb-3 lg:mb-5">
              We have a skilled, experienced, and committed management team. We gather widely experienced professionals, trained both at home and abroad, including civil engineers, structural engineers, and architects.
            </p>
            <a href="#property" className="inline-block border border-accent text-accent hover:bg-accent hover:text-brand-black transition-colors px-3 lg:px-5 py-1 lg:py-2 uppercase tracking-wide text-[9px] lg:text-xs rounded-sm">
              Learn More
            </a>
          </div>
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-brand-black border border-white/10">
              <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/nQD1CNlsArE?si=-54bb1Cdn4NIOdZl"
                title="About Kaz Properties" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-sm bg-white/5 backdrop-blur-sm" ref={ref}>
          {counters.map((c, i) => <Counter key={c.label} {...c} start={started} index={i} />)}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
}
