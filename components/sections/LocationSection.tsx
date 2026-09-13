'use client';

import { useState } from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { useGsapFadeUp } from '@/lib/useGsap';

const locations = [
  {
    name: 'Chayabithi',
    area: 'Senwalia, Ashulia, Savar',
    city: 'Dhaka',
    mapUrl: 'https://maps.app.goo.gl/VXHvUFQnZ8kAookGA',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.330887376662!2d90.2642597!3d23.877884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e90070398a41%3A0xa6ab520a35c84d04!2sChayabithi%20land%20share%20apartment!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd',
    tag: 'Active Project',
    isFeatured: true,
  },
  {
    name: 'Chayanir',
    area: 'Jahangirnagar Society, Savar',
    city: 'Bangladesh',
    mapUrl: 'https://maps.app.goo.gl/5EawevRMfDMrDrV98',
    embedSrc: 'https://maps.google.com/maps?q=Chayanir,+Jahangirnagar+Society,+Savar,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed',
    tag: 'Active Project',
    isFeatured: false,
  },
  {
    name: 'Coming Soon',
    area: 'New Projects',
    city: 'Dhaka',
    mapUrl: '#',
    embedSrc: '',
    tag: 'Upcoming',
    isFeatured: false,
    isComingSoon: true,
  },
];

export default function LocationSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const headerRef = useGsapFadeUp();
  const cardsRef = useGsapFadeUp({ delay: 0.2 });

  const active = locations[activeIdx];

  return (
    <section
      className="relative w-full bg-white dark:bg-brand-black overflow-hidden"
      id="location"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BE9F98] to-transparent" />

      {/* ── Google Maps iframe (full background) ── */}
      <div className="relative w-full h-[500px]">
        {active.isComingSoon ? (
          <div className="absolute inset-0 bg-gradient-to-br from-[#BE9F98]/20 to-[#BE9F98]/5 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-[#BE9F98]/20 backdrop-blur-md border border-[#BE9F98]/30 px-6 py-3 rounded-full mb-4">
                <div className="w-2 h-2 rounded-full bg-[#BE9F98] animate-pulse" />
                <span className="text-[#BE9F98] font-semibold text-sm uppercase tracking-widest">Coming Soon</span>
              </div>
              <p className="text-brand-black dark:text-white/70 font-light text-sm">New projects launching soon</p>
            </div>
          </div>
        ) : (
          <iframe
            key={activeIdx}
            src={active.embedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map – ${active.name}`}
            className="absolute inset-0 w-full h-full"
          />
        )}

        {/* Left gradient overlay so cards stay readable */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/90 via-white/30 to-transparent dark:from-black/90 dark:via-black/30 hidden lg:block" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/70 via-transparent to-white/30 dark:from-black/70 dark:to-black/30 hidden lg:block" />

        {/* ── Overlay content ── */}
        <div className="absolute inset-0 z-10 flex flex-col justify-start pt-8 sm:pt-10 lg:pt-12 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 pointer-events-none">
          {/* Header */}
          <div ref={headerRef} className="mb-6 sm:mb-8 pointer-events-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                <div className="bg-[#BE9F98] w-full h-full rounded-sm" />
                <div className="bg-[#BE9F98]/50 w-full h-full rounded-sm" />
                <div className="bg-[#BE9F98]/50 w-full h-full rounded-sm" />
                <div className="bg-[#BE9F98] w-full h-full rounded-sm" />
              </div>
              <span className="text-[#BE9F98] uppercase font-semibold text-sm sm:text-base tracking-widest">
                Where We Build
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#000000] dark:text-white leading-tight">
              Project <span className="font-bold">Locations</span>
            </h2>
          </div>

          {/* ── Location cards ── */}
          <div
            ref={cardsRef}
            className="flex flex-col sm:flex-row gap-3 pointer-events-auto"
          >
            {locations.map((loc, i) => {
              const isActive = activeIdx === i;
              const isSmall = !loc.isFeatured;

              return (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`text-left border backdrop-blur-md transition-all duration-300 rounded-sm
                    ${isSmall ? 'px-4 py-3 xl:px-5 xl:py-3' : 'px-5 py-4 xl:px-6 xl:py-5'}
                    ${isActive
                      ? 'bg-[#BE9F98]/20 border-[#BE9F98] shadow-[0_0_30px_rgba(190,159,152,0.2)]'
                      : 'bg-white/80 dark:bg-black/60 border-black/10 dark:border-white/10 hover:bg-white dark:hover:bg-black/80 hover:border-gray-400'
                    }`}
                >
                  {/* Tag */}
                  <span
                    className={`flex items-center gap-1 text-xs uppercase tracking-[0.18em] font-bold mb-1
                      ${isActive ? 'text-[#BE9F98]' : 'text-gray-500 dark:text-gray-400'}
                      ${isSmall ? 'text-[10px]' : 'text-xs'}`}
                  >
                    <MapPin size={isSmall ? 9 : 11} />
                    {loc.tag}
                  </span>

                  {/* Name */}
                  <span
                    className={`block font-semibold text-[#000000] dark:text-white
                      ${isSmall ? 'text-xs xl:text-sm' : 'text-sm xl:text-base'}`}
                  >
                    {loc.name}
                  </span>

                  {/* Area */}
                  <span
                    className={`block text-gray-600 dark:text-gray-300 mt-0.5
                      ${isSmall ? 'text-[10px] xl:text-xs' : 'text-xs xl:text-sm'}`}
                  >
                    {loc.area}
                  </span>

                  {/* Open Map link */}
                  {!loc.isComingSoon && (
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center gap-1 font-semibold text-[#BE9F98] hover:text-[#000000] dark:hover:text-white transition-colors uppercase tracking-widest
                        ${isSmall ? 'mt-2 text-[9px]' : 'mt-3 text-xs'}`}
                    >
                      <ExternalLink size={isSmall ? 9 : 10} /> Open Map
                    </a>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
