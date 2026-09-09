'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

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

  return (
    <section className="relative bg-white min-h-[100dvh] flex items-center overflow-hidden" id="testimonials">

      {/* Decorative background split */}
      <div className="absolute inset-y-0 right-0 w-1/3 xl:w-2/5 bg-brand-light pointer-events-none" />
      {/* Accent dot grid on the right panel */}
      <div
        className="absolute inset-y-0 right-0 w-1/3 xl:w-2/5 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />

      <div className="relative z-10 w-full px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 py-12 md:py-16 lg:py-20 xl:py-24 fade-up">

        {/* Section label */}
        <div className="mb-10 xl:mb-14 2xl:mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-px h-8 xl:h-10 bg-accent" />
            <span className="text-accent uppercase tracking-widest text-xs xl:text-sm 2xl:text-base font-bold">Happy Clients</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-brand-black leading-tight">
            What Our Clients<br className="hidden lg:block" /> Say About Us
          </h2>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-stretch">

          {/* Left: quote area */}
          <div className="flex-1 flex flex-col justify-between">

            {/* Big decorative quote mark */}
            <Quote
              size={64}
              className="text-accent/20 mb-4 xl:mb-6 2xl:mb-8 shrink-0 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24"
              strokeWidth={1}
            />

            {/* Stars */}
            <div className="flex gap-1 xl:gap-1.5 mb-5 xl:mb-7 2xl:mb-8">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} fill="#BE9F98" color="#BE9F98"
                  className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-brand-black/80 font-light leading-relaxed flex-1 mb-8 xl:mb-10 2xl:mb-12">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 xl:gap-5 2xl:gap-6 mb-8 xl:mb-10">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 rounded-full object-cover shadow-lg ring-2 ring-accent/30"
              />
              <div>
                <div className="text-sm xl:text-base 2xl:text-lg font-bold text-brand-black">{t.name}</div>
                <div className="text-xs xl:text-sm 2xl:text-base uppercase tracking-widest text-brand-black/50 mt-0.5">{t.role}</div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 xl:gap-6">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full border border-brand-black/15 hover:bg-brand-black hover:text-white hover:border-brand-black flex items-center justify-center transition-all duration-300 text-brand-black"
              >
                <ChevronLeft className="w-4 h-4 xl:w-5 xl:h-5" />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2 xl:gap-2.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-6 xl:w-8 h-2 xl:h-2.5 bg-accent'
                        : 'w-2 xl:w-2.5 h-2 xl:h-2.5 bg-brand-black/20 hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full border border-brand-black/15 hover:bg-brand-black hover:text-white hover:border-brand-black flex items-center justify-center transition-all duration-300 text-brand-black"
              >
                <ChevronRight className="w-4 h-4 xl:w-5 xl:h-5" />
              </button>

              {/* Counter */}
              <span className="ml-2 text-xs xl:text-sm 2xl:text-base text-brand-black/30 font-light tracking-widest">
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right: portrait gallery */}
          <div className="lg:w-72 xl:w-80 2xl:w-96 shrink-0 flex flex-col gap-4 xl:gap-5 2xl:gap-6 justify-center items-center">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative overflow-hidden rounded-sm transition-all duration-500 w-full outline-none ${
                  i === current
                    ? 'h-52 xl:h-64 2xl:h-80 shadow-2xl ring-2 ring-accent ring-offset-4'
                    : 'h-24 xl:h-28 2xl:h-32 opacity-40 hover:opacity-70 hover:shadow-md'
                }`}
              >
                <img src={item.img} alt={item.name} className="w-full h-full object-cover object-top" />
                {i === current && (
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent flex items-end p-3 xl:p-4">
                    <div>
                      <div className="text-white font-semibold text-xs xl:text-sm 2xl:text-base">{item.name}</div>
                      <div className="text-white/60 text-[10px] xl:text-xs uppercase tracking-wider">{item.role}</div>
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
