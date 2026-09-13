'use client';

import { useRef } from 'react';
import { ArrowRight, MapPin, BedDouble, Bath, Maximize2, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useGsapFadeUp, useGsapStaggerChildren } from '@/lib/useGsap';

const projects = [
  {
    id: 'chayabithi',
    name: 'Chayabithi',
    tagline: 'Our successful flagship project that proved the land-share model works.',
    location: 'Dhaka-Aricha Highway, Savar — Adjacent to Jahangirnagar University',
    status: 'Available',
    comingSoon: false,
    image: '/assets/feature/CHAYABITHI.jpg',
    stats: [
      { icon: 'sqft', value: '1800', label: 'Sq. Ft.' },
      { icon: 'bed', value: '4', label: 'Beds' },
      { icon: 'bath', value: '4', label: 'Baths' },
      { icon: 'balcony', value: '4', label: 'Balconies' },
    ],
  },
  {
    id: 'chayanir',
    name: 'Chayanir',
    tagline: 'A thoughtfully designed residential project in the heart of Jahangirnagar Society.',
    location: 'Jahangirnagar Society, Savar, Dhaka',
    status: 'Available',
    comingSoon: false,
    image: '/assets/feature/2.jpg',
    stats: [
      { icon: 'bed', value: '3', label: 'Beds' },
      { icon: 'bath', value: '—', label: 'Baths' },
      { icon: 'balcony', value: '—', label: 'Balconies' },
    ],
  },
  {
    id: 'project-3',
    name: 'Project Three',
    tagline: 'A vision in progress — redefining premium residential spaces.',
    location: 'Dhaka, Bangladesh',
    status: 'Coming Soon',
    comingSoon: true,
    image: '/assets/feature/3.png',
    stats: [],
  },
];

function StatIcon({ type }: { type: string }) {
  if (type === 'sqft') return <Maximize2 size={13} className="text-[#BE9F98]" />;
  if (type === 'bed') return <BedDouble size={13} className="text-[#BE9F98]" />;
  if (type === 'bath') return <Bath size={13} className="text-[#BE9F98]" />;
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#BE9F98]">
      <rect x="3" y="3" width="18" height="4" rx="1"/><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><line x1="9" y1="11" x2="9" y2="19"/><line x1="15" y1="11" x2="15" y2="19"/>
    </svg>
  );
}

function CardInner({ project, i }: { project: typeof projects[0]; i: number }) {
  if (project.comingSoon) {
    return (
      <div className="relative rounded-sm border border-black/10 overflow-hidden flex flex-col group w-full h-full bg-white" style={{ aspectRatio: '3/4' }}>
        <img src={project.image} alt="Coming Soon" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full">
            <Clock size={13} className="text-[#BE9F98]" />
            <span className="text-sm text-white font-semibold uppercase tracking-widest">Coming Soon</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Link href={`/projects/${project.id}`} className="block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE9F98]">
      <div className="relative rounded-sm border border-black/10 overflow-hidden flex flex-col group cursor-pointer w-full bg-white" style={{ aspectRatio: '3/4' }}>
        <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        <div className="relative z-10 p-4 sm:p-5 flex items-start justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">0{i + 1}</span>
          <div className="flex items-center gap-1.5 bg-[#BE9F98]/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">{project.status}</span>
          </div>
        </div>
        <div className="relative z-10 mt-auto p-4 sm:p-5">
          <div className="w-8 h-px bg-[#BE9F98] mb-3" />
          <h3 className="text-xl sm:text-2xl xl:text-3xl font-light text-white mb-1">{project.name}</h3>
          <p className="text-white/55 text-xs font-light leading-relaxed mb-2">{project.tagline}</p>
          <div className="flex items-start gap-1.5 text-white/45 mb-3">
            <MapPin size={11} className="mt-0.5 shrink-0 text-[#BE9F98]" />
            <span className="text-xs font-light leading-snug">{project.location}</span>
          </div>
          {project.stats.length > 0 && (
            <div className="grid grid-cols-4 gap-2 mb-4 border-t border-white/10 pt-3">
              {project.stats.map(s => (
                <div key={s.label} className="flex flex-col items-center gap-0.5">
                  <StatIcon type={s.icon} />
                  <span className="text-white font-bold text-sm">{s.value}</span>
                  <span className="text-white/40 text-[9px] uppercase tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2 text-[#BE9F98] group-hover:gap-3 transition-all duration-300">
            <span className="text-xs font-semibold uppercase tracking-widest">View Details</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const headerRef = useGsapFadeUp();
  const gridRef = useGsapStaggerChildren('.projects-grid', ':scope > div');

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('div')?.clientWidth ?? 280;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -(cardWidth + 16) : (cardWidth + 16), behavior: 'smooth' });
  };

  return (
    <section className="bg-[#FAF7F5] dark:bg-[#0d0d0d] text-[#000000] dark:text-white py-16 sm:py-20 lg:py-24 xl:py-32 relative overflow-hidden" id="featured">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BE9F98] to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
        {/* Header */}
        <div ref={headerRef} className="flex items-end justify-between gap-4 mb-8 sm:mb-10 xl:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-px h-7 xl:h-10 bg-[#BE9F98]" />
              <span className="text-[#BE9F98] uppercase tracking-widest text-sm sm:text-base font-bold">Our Portfolio</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light leading-tight text-[#000000] dark:text-white">
              Explore Our Featured Projects
            </h2>
          </div>
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button onClick={() => scroll('left')} aria-label="Previous"
              className="w-9 h-9 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-accent hover:border-accent transition-all active:scale-95">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => scroll('right')} aria-label="Next"
              className="w-9 h-9 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-accent hover:border-accent transition-all active:scale-95">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div ref={scrollRef} className="flex lg:hidden gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {projects.map((project, i) => (
            <div key={project.id} className="shrink-0 w-[72vw] sm:w-[55vw] max-w-xs">
              <CardInner project={project} i={i} />
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div ref={gridRef} className="hidden lg:grid grid-cols-3 gap-5 xl:gap-6 projects-grid">
          {projects.map((project, i) => (
            <CardInner key={project.id} project={project} i={i} />
          ))}
        </div>

        <p className="lg:hidden text-black/25 dark:text-white/25 text-xs text-center mt-3 tracking-widest uppercase">Swipe to explore</p>
      </div>
    </section>
  );
}
