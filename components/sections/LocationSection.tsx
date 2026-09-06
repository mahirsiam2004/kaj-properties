'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./LocationMap'), { ssr: false });

const locations = [
  { name: 'Chayabithi', area: 'Senwalia, Ashulia, Savar', city: 'Dhaka', lat: 23.8955, lng: 90.3212, mapUrl: 'https://maps.app.goo.gl/UDWjGdeHk4AG6XJe6', tag: 'Flat Share for Sale' },
  { name: 'Kaz Project', area: 'Colony, Savar', city: 'Savar, Dhaka', lat: 23.8475, lng: 90.2635, mapUrl: 'https://maps.app.goo.gl/yPWpcXj4djTQnarG8', tag: 'Upcoming' },
  { name: 'Kaz Project', area: 'Uttara', city: 'Dhaka', lat: 23.8759, lng: 90.3980, mapUrl: 'https://maps.app.goo.gl/Fz8LJ6eJHn1Trpug6', tag: 'Upcoming' },
];

export default function LocationSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative w-full h-[100dvh] bg-white overflow-hidden" id="location">
      {/* Map fills full background */}
      <div className="absolute inset-0 z-0" style={{ height: '100%', width: '100%' }}>
        <Map locations={locations} activeIdx={activeIdx} onSelect={setActiveIdx} />
      </div>

      {/* Gradient overlays over the map */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/80 via-transparent to-white/40 pointer-events-none" />

      {/* Content sits on top */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between px-6 lg:px-14 pt-24 pb-10">
        {/* Header */}
        <div className="fade-up">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
              <div className="bg-accent w-full h-full rounded-sm" />
              <div className="bg-accent/50 w-full h-full rounded-sm" />
              <div className="bg-accent/50 w-full h-full rounded-sm" />
              <div className="bg-accent w-full h-full rounded-sm" />
            </div>
            <span className="text-accent uppercase font-semibold text-xs tracking-widest">Where We Build</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-brand-black leading-tight">
            Project <span className="font-bold">Locations</span>
          </h2>
        </div>

        {/* Location cards */}
        <div className="flex flex-col sm:flex-row gap-3 fade-up">
          {locations.map((loc, i) => (
            <button key={i} onClick={() => setActiveIdx(i)}
              className={`text-left flex-1 border backdrop-blur-md px-5 py-4 transition-all duration-300 rounded-sm
                ${activeIdx === i
                  ? 'bg-accent/20 border-accent shadow-[0_0_30px_rgba(190,159,152,0.2)]'
                  : 'bg-white/80 border-gray-300 hover:bg-white hover:border-gray-400'}`}>
              <span className={`block text-[9px] uppercase tracking-[0.2em] font-bold mb-1 ${activeIdx === i ? 'text-accent' : 'text-gray-500'}`}>
                {loc.tag}
              </span>
              <span className="block text-brand-black font-semibold text-sm">{loc.name}</span>
              <span className="block text-gray-600 text-xs mt-0.5">{loc.area}</span>
              <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="inline-flex items-center gap-1 mt-3 text-[10px] uppercase tracking-widest font-semibold text-accent hover:text-brand-black transition-colors">
                <ExternalLink size={10} /> Open Map
              </a>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
