'use client';

import { useEffect, useState } from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { useGsapFadeUp, useGsapStaggerChildren } from '@/lib/useGsap';

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

  useEffect(() => {
    fetch('/api/updates')
      .then(r => r.json())
      .then(d => { if (d.success) setUpdates(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const headerRef = useGsapFadeUp();
  const gridRef = useGsapStaggerChildren('.news-grid', ':scope > article');

  if (loading || updates.length === 0) return null;

  const fmt = (d?: string, fallback?: string) =>
    new Date(d || fallback || '').toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

  return (
    <section className="relative bg-white dark:bg-brand-black py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden" id="news">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BE9F98] to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
        {/* Header */}
        <div ref={headerRef} className="mb-8 sm:mb-10 xl:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-px h-7 xl:h-10 bg-[#BE9F98]" />
            <span className="text-[#BE9F98] uppercase tracking-widest text-xs xl:text-sm font-bold">Stay Updated</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-[#000000] dark:text-white leading-tight">
            Latest <span className="font-bold">News</span>
          </h2>
        </div>

        {/* News cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6 news-grid">
          {updates.map((item, i) => (
            <article
              key={item._id}
              className="group relative bg-[#FAF7F5] dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                  <Calendar size={10} className="text-[#BE9F98]" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#000000]">
                    {fmt(item.date, item.createdAt)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="w-8 h-px bg-[#BE9F98] mb-3" />
                <h3 className="text-base sm:text-lg font-semibold text-[#000000] dark:text-white leading-snug mb-2 line-clamp-2 group-hover:text-[#BE9F98] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-black/50 dark:text-white/50 leading-relaxed line-clamp-2 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-[#BE9F98] group-hover:gap-3 transition-all duration-300">
                  <span className="text-xs font-semibold uppercase tracking-widest">Read More</span>
                  <div className="w-5 h-5 rounded-full border border-[#BE9F98]/30 group-hover:border-[#BE9F98] flex items-center justify-center transition-colors">
                    <ArrowUpRight size={10} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
