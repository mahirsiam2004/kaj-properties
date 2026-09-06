'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Tahomina akter', role: 'Client', rating: 5,
    img: '/assets/review/Tahomina akter.jpeg',
    quote: "We looked at several projects before deciding on Kaz Properties, but what really sold us was their transparency. From the first site visit to the handover discussion, they were incredibly upfront about timelines and materials. It's rare to find a developer that values building a relationship as much as building a structure. We're so excited to start this new chapter in our flat!",
  },
  {
    name: 'Ikbal Hossain', role: 'Client', rating: 5,
    img: '/assets/review/Ikbal Hossain.jpeg',
    quote: 'ছায়াবীথির (Chayabithi) লোকেশন একদম বেস্ট! সত্যি বলতে, এমন লোকেশনে এখন বাসা পাওয়া একদম দায়। যাতায়াতের দারুণ সুবিধার পাশাপাশি এখানকার কমিউনিটিও বেশ মার্জিত। সব মিলিয়ে থাকার জন্য এটা একটা চমৎকার জায়গা!',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <section className="bg-white min-h-[100dvh] flex items-center overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 lg:px-12 fade-up w-full py-3 lg:py-12 max-h-[100dvh]">
        <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-16 items-center">
          {/* Thumbnails */}
          <div className="w-full lg:w-1/3 flex lg:flex-col gap-2 justify-center">
            {testimonials.map((item, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 outline-none ${i === current ? 'w-10 h-10 lg:w-24 lg:h-24 shadow-xl ring-2 lg:ring-4 ring-accent ring-offset-2 lg:ring-offset-4' : 'w-7 h-7 lg:w-16 lg:h-16 opacity-50 hover:opacity-100 hover:scale-105'}`}>
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {/* Content */}
          <div className="w-full lg:w-2/3">
            <p className="text-accent tracking-widest text-[7px] lg:text-xs font-semibold uppercase mb-1.5 lg:mb-3">Happy Clients</p>
            <h2 className="text-sm lg:text-3xl tracking-tight text-brand-black mb-2 lg:mb-5 font-light leading-tight">What Customers Say About Us</h2>
            <div className="flex gap-1 mb-2 lg:mb-4">
              {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={12} fill="#BE9F98" color="#BE9F98" className="lg:w-5 lg:h-5" />)}
            </div>
            <blockquote className="text-[10px] lg:text-xl text-brand-black/90 font-light leading-snug lg:leading-relaxed mb-2 lg:mb-6 min-h-[60px] lg:min-h-[120px]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-2 lg:gap-4 mb-3 lg:mb-8">
              <img src={t.img} alt={t.name} className="w-7 h-7 lg:w-12 lg:h-12 rounded-full object-cover lg:hidden" />
              <div>
                <div className="text-xs lg:text-lg font-bold text-brand-black">{t.name}</div>
                <div className="text-brand-black/60 uppercase text-[7px] lg:text-xs tracking-wide mt-0.5">{t.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 lg:gap-6">
              <button className="p-1.5 lg:p-3 rounded-full border border-brand-black/10 hover:bg-brand-black hover:text-white transition-colors text-brand-black" onClick={prev} aria-label="Previous"><ChevronLeft size={14} className="lg:w-5 lg:h-5" /></button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-accent scale-125' : 'bg-brand-black/20 hover:bg-accent/50'}`} />
                ))}
              </div>
              <button className="p-1.5 lg:p-3 rounded-full border border-brand-black/10 hover:bg-brand-black hover:text-white transition-colors text-brand-black" onClick={next} aria-label="Next"><ChevronRight size={14} className="lg:w-5 lg:h-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
