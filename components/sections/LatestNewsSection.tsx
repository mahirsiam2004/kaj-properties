'use client';

import { useEffect, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

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
      className="relative bg-brand-black text-white w-full h-[100dvh] overflow-hidden"
      id="news"
    >
      {/* ── Full-bleed two-column grid ── */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">

        {/* ══ LEFT — image fills its half completely ══ */}
        <div className="relative w-full lg:w-1/2 h-[45vw] max-h-[50vh] lg:max-h-none lg:h-full overflow-hidden">
          <img
            key={item._id}
            src={item.imageUrl}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-[1.02] hover:scale-100"
            style={{ transition: 'transform 8s ease, opacity 0.7s ease' }}
          />
          {/* Subtle dark bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent pointer-events-none" />
          {/* Right-edge blend to the dark panel */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-brand-black pointer-events-none" />

          {/* Floating issue tag on image */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="bg-accent text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm">
              News Update
            </span>
          </div>
        </div>

        {/* ══ RIGHT — content panel, three rows ══ */}
        <div className="relative flex-1 flex flex-col bg-brand-black overflow-hidden">

          {/* Faint dot-grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
          />

          {/* ── ROW 1: Header bar ── */}
          <div className="relative z-10 flex items-center justify-between px-8 lg:px-10 xl:px-14 pt-10 lg:pt-14 xl:pt-16 pb-0 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-px h-8 bg-accent" />
              <div>
                <p className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold">Latest News</p>
                <p className="text-white/25 text-[10px] uppercase tracking-widest mt-0.5">Kaz Properties</p>
              </div>
            </div>
            {/* Large ghost counter */}
            <span className="text-5xl xl:text-6xl font-black text-white/[0.05] tabular-nums select-none leading-none">
              {String(current + 1).padStart(2, '0')}<span className="text-2xl xl:text-3xl">/{String(total).padStart(2, '0')}</span>
            </span>
          </div>

          {/* ── ROW 2: Article body — flex-1 fills all remaining space ── */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-8 lg:px-10 xl:px-14 py-6 xl:py-8 min-h-0">

            {/* Date chip */}
            <div className="inline-flex items-center gap-2 border border-accent/30 rounded-sm px-3 py-1.5 w-fit mb-5 xl:mb-7">
              <Calendar size={11} className="text-accent shrink-0" />
              <span className="text-accent text-[11px] uppercase tracking-widest font-medium">
                {fmt(item.date, item.createdAt)}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-[1.15] mb-5 xl:mb-7 text-white">
              {item.title}
            </h2>

            {/* Accent underline */}
            <div className="flex items-center gap-2 mb-5 xl:mb-7">
              <div className="w-8 h-0.5 bg-accent rounded-full" />
              <div className="w-2 h-0.5 bg-white/15 rounded-full" />
            </div>

            {/* Body copy */}
            <p className="text-sm xl:text-base 2xl:text-lg text-white/55 leading-[1.8] xl:leading-[1.9] line-clamp-5 xl:line-clamp-6">
              {item.description}
            </p>

            {/* Tags / meta row */}
            <div className="flex items-center gap-3 mt-6 xl:mt-8 flex-wrap">
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/25 border border-white/10 px-2.5 py-1 rounded-sm">
                Real Estate
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/25 border border-white/10 px-2.5 py-1 rounded-sm">
                Bangladesh
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/25 border border-white/10 px-2.5 py-1 rounded-sm">
                Kaz Properties
              </span>
            </div>
          </div>

          {/* ── ROW 3: Controls bar ── */}
          <div className="relative z-10 border-t border-white/8 mx-8 lg:mx-10 xl:mx-14 shrink-0">
            <div className="flex items-center justify-between py-5 xl:py-6">

              {/* Prev / dots / next */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                >
                  <ChevronLeft size={15} />
                </button>

                <div className="flex gap-1.5 items-center">
                  {updates.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`News ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === current
                          ? 'w-5 h-1.5 bg-accent'
                          : 'w-1.5 h-1.5 bg-white/15 hover:bg-accent/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                >
                  <ChevronRight size={15} />
                </button>
              </div>

              {/* CTA */}
              <button className="hidden sm:flex items-center gap-2 text-white/40 hover:text-accent transition-colors duration-300 group">
                <span className="text-[11px] uppercase tracking-[0.15em] font-semibold">Read Article</span>
                <div className="w-6 h-6 rounded-full border border-white/15 group-hover:border-accent flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight size={11} className="group-hover:text-accent" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
