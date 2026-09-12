'use client';

import Link from 'next/link';
import { useGsapFadeUp, useGsapSlideLeft, useGsapSlideRight } from '@/lib/useGsap';

export default function AboutSection() {
  const labelRef = useGsapFadeUp();
  const headingRef = useGsapSlideLeft({ delay: 0.1 });
  const textRef = useGsapSlideLeft({ delay: 0.2 });
  const btnRef = useGsapFadeUp({ delay: 0.4 });
  const videoRef = useGsapSlideRight({ delay: 0.2 });

  return (
    <section
      className="bg-white dark:bg-brand-black text-[#000000] dark:text-white relative w-full py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden"
      id="about"
    >
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BE9F98] to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-36">
        {/* Section label */}
        <div ref={labelRef} className="flex items-center gap-2 mb-4 sm:mb-5">
          <div className="w-px h-6 sm:h-8 bg-[#BE9F98]" />
          <span className="text-[#BE9F98] uppercase tracking-widest text-xs sm:text-sm font-bold">About Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left: text */}
          <div className="flex flex-col justify-center">
            <h2 ref={headingRef} className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-light leading-tight mb-4 sm:mb-5 text-[#000000] dark:text-white">
              Building Tomorrow&apos;s<br className="hidden sm:block" /> Legacy, Today
            </h2>
            <p ref={textRef} className="text-sm sm:text-base xl:text-lg leading-relaxed font-light text-black/60 dark:text-white/60 mb-4 sm:mb-5">
              Kaz Properties started its journey in the real estate development sector partnering with renowned projects.
              Backed by current good reputation and sector experience, Kaz Properties has expanded its footprint to the
              building construction sector.
            </p>
            <p className="text-sm sm:text-base xl:text-lg leading-relaxed font-light text-black/60 dark:text-white/60 mb-6 sm:mb-8">
              We have a skilled, experienced, and committed management team — widely experienced professionals trained
              both at home and abroad, including civil engineers, structural engineers, and architects.
            </p>

            <div ref={btnRef}>
              <Link
                href="/mission-vision"
                className="inline-flex items-center gap-2 border border-[#BE9F98] text-[#BE9F98] hover:bg-[#BE9F98] hover:text-white transition-colors px-5 py-2.5 sm:px-6 sm:py-3 uppercase tracking-widest text-xs sm:text-sm rounded-sm font-semibold"
              >
                Learn More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: video */}
          <div ref={videoRef} className="flex flex-col justify-center">
            <div className="relative w-full rounded-sm overflow-hidden border border-black/10 bg-black/[0.03]"
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
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#BE9F98]/20" />
              <span className="text-black/20 text-[10px] uppercase tracking-widest">Kaz Properties</span>
              <div className="h-px flex-1 bg-[#BE9F98]/20" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-black/10 dark:bg-white/10" />
    </section>
  );
}
