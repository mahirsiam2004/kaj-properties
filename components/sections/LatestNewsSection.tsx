'use client';

import { useEffect, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';

interface Update {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
  createdAt: string;
}

export default function LatestNewsSection() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/api/updates')
      .then(r => r.json())
      .then(d => { if (d.success) setUpdates(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading || updates.length === 0) return null;

  const total = updates.length;
  const item = updates[current];
  const prev = () => setCurrent(c => (c - 1 + total) % total);
  const next = () => setCurrent(c => (c + 1) % total);

  const fmt = (d?: string, fallback?: string) =>
    new Date(d || fallback || '').toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

  return (
    <section
      className="relative bg-brand-black text-white w-full h-[100dvh] overflow-hidden flex flex-col"
      id="news"
    >
      {/* Top accent line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent shrink-0" />

      {/* Main two-column layout */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0">

        {/* ── LEFT: Image panel ── */}
        <div className="relative w-full lg:w-[52%] xl:w-[55%] h-52 sm:h-64 lg:h-full shrink-0 overflow-hidden">
          <img
            key={item._id}
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-700"
          />
          {/* Dark gradient overlay for desktop right-edge blend */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-brand-black pointer-events-none" />
          {/* Bottom fade on mobile */}
          <div className="lg:hidden absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />

          {/* Index badge */}
          <div className="absolute top-4 left-4 bg-brand-black/70 backdrop-blur-sm border border-white/10 rounded-sm px-3 py-1 flex items-center gap-2">
            <Newspaper size={11} className="text-accent" />
            <span className="text-white/60 text-[10px] uppercase tracking-widest font-medium">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ── RIGHT: Content panel ── */}
        <div className="flex-1 flex flex-col justify-between px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-8 lg:py-16 xl:py-20 min-h-0">

          {/* Section label */}
          <div className="flex items-center gap-2 mb-6 lg:mb-10">
            <div className="w-5 h-5 grid grid-cols-3 gap-0.5 shrink-0">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-accent' : 'bg-white/30'}`} />
              ))}
            </div>
            <span className="text-white/40 uppercase tracking-widest text-xs font-medium">Latest News</span>
          </div>

          {/* Article content */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Date */}
            <div className="flex items-center gap-2 text-accent text-xs uppercase tracking-widest mb-4">
              <Calendar size={11} />
              <span>{fmt(item.date, item.createdAt)}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold leading-tight mb-5 xl:mb-7">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-base xl:text-lg text-white/60 leading-relaxed max-w-lg line-clamp-4">
              {item.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous news"
              className="w-10 h-10 xl:w-11 xl:h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 shrink-0"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {updates.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`News ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-accent'
                      : 'w-2 h-2 bg-white/15 hover:bg-accent/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next news"
              className="w-10 h-10 xl:w-11 xl:h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 shrink-0"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="w-full h-px bg-white/8 shrink-0" />
    </section>
  );
}
