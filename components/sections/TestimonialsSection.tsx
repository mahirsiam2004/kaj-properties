'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useGsapFadeUp, useGsapSlideLeft, useGsapSlideRight } from '@/lib/useGsap';

const testimonials = [
  {
    name: 'Tahomina Akter',
    role: 'Client',
    rating: 5,
    img: '/assets/review/Tahomina akter.jpeg',
    quote:
      "We looked at several projects before deciding on Kaz Properties, but what really sold us was their transparency. From the first site visit to the handover discussion, they were incredibly upfront about timelines and materials. It's rare to find a developer that values building a relationship as much as building a structure.",
  },
  {
    name: 'Ikbal Hossain',
    role: 'Client',
    rating: 5,
    img: '/assets/review/Ikbal Hossain.jpeg',
    quote:
      'ছায়াবীথির (Chayabithi) লোকেশন একদম বেস্ট! সত্যি বলতে, এমন লোকেশনে এখন বাসা পাওয়া একদম দায়। যাতায়াতের দারুণ সুবিধার পাশাপাশি এখানকার কমিউনিটিও বেশ মার্জিত। সব মিলিয়ে থাকার জন্য এটা একটা চমৎকার জায়গা!',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const headerRef = useGsapFadeUp();
  const contentRef = useGsapSlideLeft({ delay: 0.1 });
  const galleryRef = useGsapSlideRight({ delay: 0.2 });

  return (
    <section className="relative bg-[#FAF7F5] dark:bg-[#0d0d0d] py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden" id="testimonials">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BE9F98] to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
        {/* Section label */}
        <div ref={headerRef} className="mb-8 sm:mb-10 xl:mb-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-px h-8 xl:h-10 bg-[#BE9F98]" />
            <span className="text-[#BE9F98] uppercase tracking-widest text-xs xl:text-sm font-bold">Happy Clients</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-[#000000] dark:text-white leading-tight">
            What Our Clients Say About Us
          </h2>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-stretch">
          {/* Left: quote area */}
          <div ref={contentRef} className="flex-1 flex flex-col justify-between">
            <Quote size={48} className="text-[#BE9F98]/20 mb-4 xl:mb-6 shrink-0 lg:w-16 lg:h-16 xl:w-20 xl:h-20" strokeWidth={1} />

            <div className="flex gap-1 xl:gap-1.5 mb-4 xl:mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} fill="#BE9F98" color="#BE9F98" className="w-4 h-4 xl:w-5 xl:h-5" />
              ))}
            </div>

            <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl text-brand-black/80 dark:text-white/80 font-light leading-relaxed flex-1 mb-6 xl:mb-8">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-3 xl:gap-4 mb-6 xl:mb-8">
              <img src={t.img} alt={t.name} className="hidden sm:block w-12 h-12 xl:w-14 xl:h-14 rounded-full object-cover shadow-lg ring-2 ring-accent/30" />
              <div>
                <div className="text-sm xl:text-base font-bold text-brand-black dark:text-white">{t.name}</div>
                <div className="text-xs xl:text-sm uppercase tracking-widest text-brand-black/50 dark:text-white/50 mt-0.5">{t.role}</div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 xl:gap-4">
              <button onClick={prev} aria-label="Previous"
                className="w-9 h-9 xl:w-10 xl:h-10 rounded-full border border-black/15 dark:border-white/20 hover:bg-[#000000] dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-[#000000] flex items-center justify-center transition-all duration-300 text-[#000000] dark:text-white">
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-[#BE9F98]' : 'w-2 h-2 bg-black/20 dark:bg-white/20 hover:bg-[#BE9F98]/50'}`}
                  />
                ))}
              </div>

              <button onClick={next} aria-label="Next"
                className="w-9 h-9 xl:w-10 xl:h-10 rounded-full border border-black/15 dark:border-white/20 hover:bg-[#000000] dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-[#000000] flex items-center justify-center transition-all duration-300 text-[#000000] dark:text-white">
                <ChevronRight className="w-4 h-4" />
              </button>

              <span className="ml-2 text-xs xl:text-sm text-black/30 dark:text-white/30 font-light tracking-widest">
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right: portrait gallery */}
          <div ref={galleryRef} className="hidden lg:flex lg:w-64 xl:w-80 shrink-0 flex-col gap-3 xl:gap-4 justify-center items-center">
            {testimonials.map((item, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`relative overflow-hidden rounded-sm transition-all duration-500 w-full outline-none ${
                  i === current
                    ? 'h-48 xl:h-60 shadow-2xl ring-2 ring-[#BE9F98] ring-offset-4 ring-offset-[#FAF7F5] dark:ring-offset-[#0d0d0d]'
                    : 'h-20 xl:h-24 opacity-40 hover:opacity-70 hover:shadow-md'
                }`}
              >
                <img src={item.img} alt={item.name} className="w-full h-full object-cover object-top" />
                {i === current && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                    <div>
                      <div className="text-white font-semibold text-xs xl:text-sm">{item.name}</div>
                      <div className="text-white/60 text-[10px] uppercase tracking-wider">{item.role}</div>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
