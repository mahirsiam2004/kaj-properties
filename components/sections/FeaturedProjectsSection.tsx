'use client';

import { ArrowRight, MapPin, BedDouble, Bath, Maximize2, Clock } from 'lucide-react';
import Link from 'next/link';

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
      { icon: 'bed',  value: '3',    label: 'Beds' },
      { icon: 'bath', value: '4',    label: 'Baths' },
      { icon: 'balcony', value: '6', label: 'Balconies' },
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
      { icon: 'bed',     value: '3',  label: 'Beds' },
      { icon: 'bath',    value: '—',  label: 'Baths' },
      { icon: 'balcony', value: '—',  label: 'Balconies' },
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
  if (type === 'sqft')    return <Maximize2 size={13} className="text-accent" />;
  if (type === 'bed')     return <BedDouble size={13} className="text-accent" />;
  if (type === 'bath')    return <Bath size={13} className="text-accent" />;
  // balcony fallback
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <rect x="3" y="3" width="18" height="4" rx="1"/><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><line x1="9" y1="11" x2="9" y2="19"/><line x1="15" y1="11" x2="15" y2="19"/>
    </svg>
  );
}

export default function FeaturedProjectsSection() {
  return (
    <section className="bg-brand-black text-white min-h-[100dvh] flex flex-col justify-center relative overflow-hidden" id="featured">

      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative z-10 w-full px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 py-12 md:py-16 lg:py-20 xl:py-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 xl:mb-14 2xl:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-px h-8 xl:h-10 bg-accent" />
              <span className="text-accent uppercase tracking-widest text-xs xl:text-sm font-bold">Our Portfolio</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light leading-tight">
              Explore Our<br className="hidden md:block" /> Featured Projects
            </h2>
          </div>
          <p className="text-white/40 font-light text-xs xl:text-sm 2xl:text-base max-w-xs xl:max-w-sm text-right hidden md:block">
            Each project is built on trust, quality craftsmanship, and a commitment to the communities we serve.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6 2xl:gap-8">
          {projects.map((project, i) => (
            project.comingSoon ? (
              /* ── Coming Soon card ── */
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-sm border border-white/10 flex flex-col"
                style={{ minHeight: '460px' }}
              >
                {/* Full-opacity background image */}
                <img
                  src={project.image}
                  alt="Coming Soon"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Light gradient only at bottom so badge is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />

                {/* Coming Soon badge — centered */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-2 bg-brand-black/60 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full">
                    <Clock size={13} className="text-accent" />
                    <span className="text-sm text-white font-semibold uppercase tracking-widest">Coming Soon</span>
                  </div>
                </div>
              </div>
            ) : (
              /* ── Active project card ── */
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative overflow-hidden rounded-sm border border-white/10 flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{ minHeight: '460px' }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/10 transition-colors duration-500" />

                {/* Card number + status */}
                <div className="relative z-10 p-5 xl:p-7 flex items-start justify-between">
                  <span className="text-xs xl:text-sm font-bold uppercase tracking-widest text-white/40">0{i + 1}</span>
                  <div className="flex items-center gap-1.5 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] xl:text-xs font-bold uppercase tracking-widest text-white">{project.status}</span>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="relative z-10 mt-auto p-5 xl:p-7">
                  <div className="w-10 xl:w-12 h-px bg-accent mb-4 xl:mb-5" />
                  <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-light text-white mb-1.5 xl:mb-2">{project.name}</h3>
                  <p className="text-white/60 text-xs xl:text-sm font-light leading-relaxed mb-3 xl:mb-4">{project.tagline}</p>

                  {/* Location */}
                  <div className="flex items-start gap-1.5 text-white/50 mb-4 xl:mb-5">
                    <MapPin size={11} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-xs font-light leading-snug">{project.location}</span>
                  </div>

                  {/* Stats */}
                  {project.stats.length > 0 && (
                    <div className="grid grid-cols-4 gap-2 xl:gap-3 mb-5 xl:mb-6 border-t border-white/10 pt-4 xl:pt-5">
                      {project.stats.map(s => (
                        <div key={s.label} className="flex flex-col items-center gap-1">
                          <StatIcon type={s.icon} />
                          <span className="text-white font-bold text-sm xl:text-base">{s.value}</span>
                          <span className="text-white/40 text-[9px] xl:text-[10px] uppercase tracking-wide">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all duration-300">
                    <span className="text-xs xl:text-sm font-semibold uppercase tracking-widest">View Details</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            )
          ))}
        </div>

      </div>
    </section>
  );
}
