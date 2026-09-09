'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, MapPin, BedDouble, Bath, Phone, Mail,
  ChevronLeft, ChevronRight, CheckCircle2,
} from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.984-1.407A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.274-1.243l-.306-.182-3.18.898.893-3.096-.2-.318A7.946 7.946 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
  </svg>
);

const gallery = [
  '/assets/feature/2.jpg',
];

const features = [
  '3 Spacious Bedrooms',
  '1 Hall / Drawing Room',
  '1 Modern Kitchen',
  'Full Bathrooms',
  'Balconies',
  'South-Facing Units',
  'Dedicated Parking Facility',
  'Lift & Backup Generator',
  'CCTV Surveillance',
  '24/7 Security',
];

export default function ChayanirClient() {
  const [activeImg, setActiveImg] = useState(0);

  const prev = () => setActiveImg(i => (i - 1 + gallery.length) % gallery.length);
  const next = () => setActiveImg(i => (i + 1) % gallery.length);

  return (
    <div className="h-screen overflow-y-auto bg-brand-black text-white scrollbar-thin">

      {/* ── Top nav ── */}
      <div className="sticky top-0 z-30 bg-brand-black/90 backdrop-blur-md border-b border-white/10 px-5 md:px-10 lg:px-14 xl:px-20 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm font-medium group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>
        <img src="/logo1.png" alt="Kaz Properties" className="h-8 md:h-9 xl:h-10 w-auto object-contain" />
      </div>

      {/* ══════════════════════════════════════════════
          HERO — left text  |  right image
      ══════════════════════════════════════════════ */}
      <section className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14 xl:py-16 border-b border-white/10">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">

          {/* Left: title block */}
          <div className="flex-1 min-w-0">
            <span className="text-accent uppercase tracking-widest text-[10px] xl:text-xs font-bold">
              Kaz Properties — Residential Project
            </span>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-light mt-3 mb-4 leading-none tracking-tight">
              Chayanir
            </h1>
            <div className="flex items-start gap-2 text-white/50 mb-8">
              <MapPin size={13} className="text-accent shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm font-light leading-snug">
                Jahangirnagar Society, Savar<br />
                Dhaka, Bangladesh
              </span>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="bg-white/[0.04] border border-white/10 rounded-sm p-4 flex flex-col items-center text-center gap-1.5">
                <BedDouble size={18} className="text-accent" />
                <div className="text-2xl xl:text-3xl font-bold text-white">3</div>
                <div className="text-accent font-semibold text-[10px] xl:text-xs uppercase tracking-wider">Beds</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-sm p-4 flex flex-col items-center text-center gap-1.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                <div className="text-2xl xl:text-3xl font-bold text-white">1</div>
                <div className="text-accent font-semibold text-[10px] xl:text-xs uppercase tracking-wider">Hall</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-sm p-4 flex flex-col items-center text-center gap-1.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <path d="M8 6h8M8 12h8M8 18h8M4 6h.01M4 12h.01M4 18h.01"/>
                </svg>
                <div className="text-2xl xl:text-3xl font-bold text-white">1</div>
                <div className="text-accent font-semibold text-[10px] xl:text-xs uppercase tracking-wider">Kitchen</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-sm p-4 flex flex-col items-center text-center gap-1.5">
                <Bath size={18} className="text-accent" />
                <div className="text-accent font-semibold text-[10px] xl:text-xs uppercase tracking-wider mt-1">Bathrooms</div>
                <div className="text-white/40 text-[9px]">Available</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+8801774873972"
                className="flex items-center gap-2 bg-accent hover:bg-white text-white hover:text-brand-black transition-colors px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest"
              >
                <Phone size={13} /> Call Us
              </a>
              <a
                href="https://wa.me/8801856621076"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white transition-colors px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
              <a
                href="mailto:hellokazpnd@gmail.com"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white transition-colors px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest"
              >
                <Mail size={13} /> Email
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full lg:w-[52%] xl:w-[55%] shrink-0 flex flex-col gap-3">
            <div className="relative w-full overflow-hidden rounded-sm bg-white/[0.03]" style={{ aspectRatio: '16/10' }}>
              <img
                src={gallery[activeImg]}
                alt="Chayanir"
                className="w-full h-full object-contain transition-all duration-500"
              />
              {gallery.length > 1 && (
                <>
                  <button onClick={prev} aria-label="Previous"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                    <ChevronLeft size={14} />
                  </button>
                  <button onClick={next} aria-label="Next"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                    <ChevronRight size={14} />
                  </button>
                </>
              )}
            </div>
            {/* Thumbnail strip — only shows when >1 image */}
            {gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {gallery.map((src, i) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`shrink-0 w-20 h-14 rounded-sm overflow-hidden border-2 transition-all ${i === activeImg ? 'border-accent opacity-100' : 'border-transparent opacity-40 hover:opacity-70'}`}>
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════════ */}
      <div className="px-5 md:px-10 lg:px-14 xl:px-20 py-12 xl:py-16">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">

          {/* Left column */}
          <div className="flex-1 min-w-0 space-y-12 xl:space-y-14">

            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-px h-6 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-[10px] xl:text-xs font-bold">Overview</span>
              </div>
              <h2 className="text-2xl xl:text-3xl font-light mb-3 leading-snug">A Home Designed for Comfortable Living</h2>
              <p className="text-white/55 font-light text-sm xl:text-base leading-relaxed">
                Chayanir is a thoughtfully planned residential project located in Jahangirnagar Society, Savar —
                offering spacious 3-bedroom apartments with a dedicated hall, modern kitchen, full bathrooms, and
                generous balconies, all within a well-connected community setting.
              </p>
            </div>

            {/* Features */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-px h-6 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-[10px] xl:text-xs font-bold">Apartment Features</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xl:gap-3">
                {features.map(f => (
                  <div key={f} className="flex items-center gap-3 py-2 border-b border-white/5">
                    <CheckCircle2 size={13} className="text-accent shrink-0" strokeWidth={2} />
                    <span className="text-white/65 text-xs xl:text-sm font-light">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-px h-6 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-[10px] xl:text-xs font-bold">Location</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { direction: 'Society',  place: 'Jahangirnagar Society' },
                  { direction: 'Area',     place: 'Savar, Dhaka' },
                  { direction: 'Nearby',   place: 'Jahangirnagar University' },
                  { direction: 'Access',   place: 'Dhaka-Aricha Highway' },
                ].map(item => (
                  <div key={item.direction} className="flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-sm p-4">
                    <MapPin size={13} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white/30 text-[9px] uppercase tracking-wider mb-0.5">{item.direction}</div>
                      <div className="text-white text-xs xl:text-sm font-medium">{item.place}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right sidebar */}
          <div className="w-full lg:w-72 xl:w-80 shrink-0 space-y-4">
            <div className="bg-white/[0.04] border border-white/10 rounded-sm p-5 xl:p-6 lg:sticky lg:top-6">
              <h3 className="text-white font-semibold text-sm xl:text-base mb-4 pb-4 border-b border-white/10">
                Project Details
              </h3>
              <div className="space-y-2.5 text-xs mb-5">
                {[
                  { label: 'Project Name', value: 'Chayanir' },
                  { label: 'Developer',    value: 'Kaz Properties & Developers' },
                  { label: 'Type',         value: 'Residential' },
                  { label: 'Location',     value: 'Jahangirnagar Society, Savar' },
                  { label: 'Bedrooms',     value: '3 Bedrooms' },
                  { label: 'Hall',         value: '1 Hall / Drawing Room' },
                  { label: 'Kitchen',      value: '1 Modern Kitchen' },
                  { label: 'Bathrooms',    value: 'Available' },
                  { label: 'Balconies',    value: 'Available' },
                  { label: 'Status',       value: 'Available' },
                ].map(row => (
                  <div key={row.label} className="flex justify-between gap-2 py-2 border-b border-white/5 last:border-0">
                    <span className="text-white/40 shrink-0">{row.label}</span>
                    <span className="text-white font-medium text-right">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5">
                <a href="tel:+8801774873972"
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-white text-white hover:text-brand-black transition-colors py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <Phone size={13} /> Call Us Now
                </a>
                <a href="https://wa.me/8801856621076" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white transition-colors py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a href="mailto:hellokazpnd@gmail.com"
                  className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white transition-colors py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <Mail size={13} /> Email Us
                </a>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/8 rounded-sm p-4 xl:p-5">
              <h4 className="text-white/40 text-[10px] uppercase tracking-widest mb-2">Office Address</h4>
              <p className="text-white/65 text-xs font-light leading-relaxed">
                Bachelor Gate, Ambagan Road,<br />
                Jahangirnagar University,<br />
                Savar, Dhaka, Bangladesh
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-white/10 px-5 md:px-10 lg:px-14 xl:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
        <p>© {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.</p>
        <Link href="/" className="flex items-center gap-2 hover:text-accent transition-colors">
          <ArrowLeft size={12} /> Back to Home
        </Link>
      </div>

    </div>
  );
}
