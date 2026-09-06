'use client';

import { useEffect, useState } from 'react';
import { Calendar, Newspaper } from 'lucide-react';

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

  if (loading || updates.length === 0) return null;

  const latest = updates[0];
  const previous = updates.slice(1, 4);

  const fmt = (d?: string, fallback?: string) =>
    new Date(d || fallback || '').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <section className="bg-brand-black text-white relative overflow-hidden min-h-[100dvh] flex items-center" id="news">
      <div className="container mx-auto px-4 lg:px-12 w-full py-3 lg:py-12 max-h-[100dvh]">
        <div className="mb-3 lg:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 lg:w-6 lg:h-6 grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => <div key={i} className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-accent' : 'bg-white/50'}`} />)}
            </div>
            <h2 className="text-base lg:text-2xl font-light tracking-wide uppercase">Latest News</h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="w-full lg:w-2/3">
            <div className="relative overflow-hidden rounded-sm group border border-white/10 bg-white/5">
              <div className="aspect-video w-full overflow-hidden">
                <img src={latest.imageUrl} alt={latest.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3 lg:p-6">
                <div className="flex items-center gap-2 text-accent text-[9px] lg:text-xs uppercase tracking-wider mb-2">
                  <Calendar size={12} /><span>{fmt(latest.date, latest.createdAt)}</span>
                </div>
                <h3 className="text-sm lg:text-xl font-semibold mb-2">{latest.title}</h3>
                <p className="text-[10px] lg:text-sm text-white/70 leading-relaxed line-clamp-3">{latest.description}</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-accent text-[9px] lg:text-xs uppercase tracking-wider mb-1">
              <Newspaper size={14} /><span>Previous Updates</span>
            </div>
            {previous.length > 0 ? previous.map((item) => (
              <div key={item._id} className="flex gap-3 p-2 lg:p-3 border border-white/10 rounded-sm bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div className="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 overflow-hidden rounded-sm">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[8px] lg:text-[10px] text-accent uppercase tracking-wider mb-1">
                    {new Date(item.date || item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h4 className="text-[10px] lg:text-sm font-medium leading-tight truncate">{item.title}</h4>
                  <p className="text-[8px] lg:text-[10px] text-white/50 mt-1 line-clamp-2">{item.description}</p>
                </div>
              </div>
            )) : <p className="text-white/50 text-xs">No previous updates yet.</p>}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
    </section>
  );
}
