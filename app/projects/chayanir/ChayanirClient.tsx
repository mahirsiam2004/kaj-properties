'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft, MapPin, BedDouble, Bath, Phone, Mail,
  ChevronLeft, ChevronRight, CheckCircle2, Download, ChevronDown,
} from 'lucide-react';
import ThemeToggleButton from '@/components/ThemeToggleButton';

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.984-1.407A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.274-1.243l-.306-.182-3.18.898.893-3.096-.2-.318A7.946 7.946 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
  </svg>
);

const gallery = ['/assets/feature/2.jpg'];

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
  const router = useRouter();
  const [activeImg, setActiveImg] = useState(0);
  const prev = () => setActiveImg(i => (i - 1 + gallery.length) % gallery.length);
  const next = () => setActiveImg(i => (i + 1) % gallery.length);

  return (
    <div className="h-screen overflow-y-auto bg-white dark:bg-brand-black text-brand-black dark:text-white scroll-smooth">

      {/* ── Top nav ── */}
      <div className="sticky top-0 z-30 bg-white/95 dark:bg-brand-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 px-5 md:px-10 lg:px-14 xl:px-20 py-3 flex items-center justify-between">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-accent transition-colors text-sm font-medium group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <img src="/logo1.png" alt="Kaz Properties" className="h-7 md:h-8 w-auto object-contain" />
        <ThemeToggleButton variant="light" />
      </div>

      {/* ══════════════════════════════════════════
          ABOVE THE FOLD — hero capped at ~80vh
          so content below is always visible
      ══════════════════════════════════════════ */}
      <div className="px-5 md:px-10 lg:px-14 xl:px-20 pt-5 pb-4 border-b border-black/10 dark:border-white/10" style={{ maxHeight: '82vh' }}>
        <div className="flex flex-col lg:flex-row gap-6 items-start h-full">

          {/* Left: title + stats + CTAs */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <span className="text-accent uppercase tracking-widest text-[10px] font-bold">Kaz Properties — Residential Project</span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-light mt-2 mb-2 leading-tight tracking-tight text-brand-black dark:text-white">Chayanir</h1>
              <div className="flex items-start gap-2 text-black/50 dark:text-white/50 mb-4">
                <MapPin size={12} className="text-accent shrink-0 mt-0.5" />
                <span className="text-xs font-light leading-snug">Jahangirnagar Society, Savar · Dhaka, Bangladesh</span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-sm p-3 flex flex-col items-center text-center gap-1">
                  <BedDouble size={16} className="text-accent" />
                  <div className="text-xl font-bold text-brand-black dark:text-white">3</div>
                  <div className="text-accent text-[9px] uppercase tracking-wider font-semibold">Beds</div>
                </div>
                <div className="bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-sm p-3 flex flex-col items-center text-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <div className="text-xl font-bold text-brand-black dark:text-white">1</div>
                  <div className="text-accent text-[9px] uppercase tracking-wider font-semibold">Hall</div>
                </div>
                <div className="bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-sm p-3 flex flex-col items-center text-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M8 6h8M8 12h8M8 18h8M4 6h.01M4 12h.01M4 18h.01"/>
                  </svg>
                  <div className="text-xl font-bold text-brand-black dark:text-white">1</div>
                  <div className="text-accent text-[9px] uppercase tracking-wider font-semibold">Kitchen</div>
                </div>
                <div className="bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-sm p-3 flex flex-col items-center text-center gap-1">
                  <Bath size={16} className="text-accent" />
                  <div className="text-[9px] text-accent uppercase tracking-wider font-semibold mt-1">Baths</div>
                  <div className="text-black/40 dark:text-white/40 text-[9px]">Avail.</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-2">
                <a href="tel:+8801774873972" className="flex items-center gap-1.5 bg-accent hover:bg-brand-black dark:hover:bg-white text-white dark:hover:text-brand-black transition-colors px-4 py-2 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <Phone size={12} /> Call Us
                </a>
                <a href="https://wa.me/8801856621076" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-brand-black dark:text-white transition-colors px-4 py-2 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a href="https://maps.app.goo.gl/5EawevRMfDMrDrV98" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-brand-black dark:text-white transition-colors px-4 py-2 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <MapPin size={12} /> Open Map
                </a>
                <a href="/#contact" className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-brand-black dark:text-white transition-colors px-4 py-2 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <Mail size={12} /> Email
                </a>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="hidden lg:flex items-center gap-2 mt-4 text-black/25 dark:text-white/25 text-[10px] uppercase tracking-widest">
              <ChevronDown size={13} className="animate-bounce" />
              Scroll for details
            </div>
          </div>

          {/* Right: image — capped height so content below peeks */}
          <div className="w-full lg:w-[52%] shrink-0">
            <div className="relative w-full rounded-sm overflow-hidden bg-black/[0.03] dark:bg-white/[0.03]" style={{ maxHeight: '55vh', aspectRatio: '4/3' }}>
              <img
                src={gallery[activeImg]}
                alt="Chayanir"
                className="w-full h-full object-contain"
              />
              {gallery.length > 1 && (
                <>
                  <button onClick={prev} aria-label="Prev" className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 dark:bg-brand-black/60 border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-accent transition-all text-white">
                    <ChevronLeft size={13} />
                  </button>
                  <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 dark:bg-brand-black/60 border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-accent transition-all text-white">
                    <ChevronRight size={13} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll invite strip — always visible below hero ── */}
      <div className="px-5 md:px-10 lg:px-14 xl:px-20 py-3 flex items-center gap-3 border-b border-black/8 dark:border-white/8 bg-black/[0.02] dark:bg-white/[0.02]">
        <ChevronDown size={14} className="text-accent animate-bounce shrink-0" />
        <span className="text-black/40 dark:text-white/40 text-xs font-light">Overview · Features · Location · Floor Plan · Project Details</span>
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <div className="px-5 md:px-10 lg:px-14 xl:px-20 py-6">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left column */}
          <div className="flex-1 min-w-0 space-y-7">

            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-px h-5 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-[10px] font-bold">Overview</span>
              </div>
              <p className="text-black/55 dark:text-white/55 font-light text-sm leading-relaxed">
                Chayanir is a thoughtfully planned residential project in Jahangirnagar Society, Savar — offering spacious
                3-bedroom apartments with a dedicated hall, modern kitchen, full bathrooms, and generous balconies, all
                within a well-connected community setting.
              </p>
            </div>

            {/* Features + Location side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-px h-5 bg-accent" />
                  <span className="text-accent uppercase tracking-widest text-[10px] font-bold">Apartment Features</span>
                </div>
                <div className="space-y-0">
                  {features.map(f => (
                    <div key={f} className="flex items-center gap-2.5 py-1.5 border-b border-black/5 dark:border-white/5">
                      <CheckCircle2 size={11} className="text-accent shrink-0" strokeWidth={2} />
                      <span className="text-black/60 dark:text-white/60 text-xs font-light">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-px h-5 bg-accent" />
                  <span className="text-accent uppercase tracking-widest text-[10px] font-bold">Location</span>
                </div>
                <div className="space-y-2">
                  {[
                    { direction: 'Society', place: 'Jahangirnagar Society' },
                    { direction: 'Area',    place: 'Savar, Dhaka' },
                    { direction: 'Nearby',  place: 'Jahangirnagar University' },
                    { direction: 'Access',  place: 'Dhaka-Aricha Highway' },
                  ].map(item => (
                    <div key={item.direction} className="flex items-start gap-2.5 bg-black/[0.03] dark:bg-white/[0.03] border border-black/8 dark:border-white/8 rounded-sm p-3">
                      <MapPin size={11} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="text-black/30 dark:text-white/30 text-[9px] uppercase tracking-wider">{item.direction}</div>
                        <div className="text-brand-black dark:text-white text-xs font-medium">{item.place}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floor Plan */}
            <div>
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-px h-5 bg-accent" />
                  <span className="text-accent uppercase tracking-widest text-[10px] font-bold">Floor Plan</span>
                </div>
                <a href="/assets/feature/chayanir_plan.jpeg" download="Chayanir-Floor-Plan.jpeg"
                  className="flex items-center gap-1.5 bg-accent hover:bg-brand-black dark:hover:bg-white text-white dark:hover:text-brand-black transition-colors px-3 py-1.5 rounded-sm text-[10px] font-semibold uppercase tracking-widest">
                  <Download size={11} /> Download
                </a>
              </div>
              <div className="border border-black/10 dark:border-white/10 rounded-sm bg-black/[0.02] dark:bg-white/[0.02] overflow-hidden">
                <img
                  src="/assets/feature/chayanir_plan.jpeg"
                  alt="Chayanir Floor Plan"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>

          {/* Right sidebar */}
          <div className="w-full lg:w-64 xl:w-72 shrink-0">
            <div className="bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-sm p-4 lg:sticky lg:top-4 space-y-4">

              <div>
                <h3 className="text-brand-black dark:text-white font-semibold text-sm mb-3 pb-3 border-b border-black/10 dark:border-white/10">Project Details</h3>
                <div className="space-y-0 text-xs">
                  {[
                    { label: 'Project',   value: 'Chayanir' },
                    { label: 'Developer', value: 'Kaz Properties' },
                    { label: 'Type',      value: 'Residential' },
                    { label: 'Location',  value: 'Jahangirnagar Society' },
                    { label: 'Bedrooms',  value: '3 Bedrooms' },
                    { label: 'Hall',      value: '1 Hall / Drawing Room' },
                    { label: 'Kitchen',   value: '1 Modern Kitchen' },
                    { label: 'Bathrooms', value: 'Available' },
                    { label: 'Balconies', value: 'Available' },
                    { label: 'Status',    value: 'Available' },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between gap-2 py-1.5 border-b border-black/5 dark:border-white/5 last:border-0">
                      <span className="text-black/35 dark:text-white/35 shrink-0">{row.label}</span>
                      <span className="text-brand-black dark:text-white font-medium text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-1 border-t border-black/10 dark:border-white/10">
                <a href="tel:+8801774873972" className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-brand-black dark:hover:bg-white text-white dark:hover:text-brand-black transition-colors py-2 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <Phone size={12} /> Call Us
                </a>
                <a href="https://wa.me/8801856621076" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-brand-black dark:text-white transition-colors py-2 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a href="/#contact" className="flex items-center justify-center gap-2 w-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-brand-black dark:text-white transition-colors py-2 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <Mail size={12} /> Email Us
                </a>
              </div>

              <div className="pt-1 border-t border-black/10 dark:border-white/10">
                <p className="text-black/30 dark:text-white/30 text-[9px] uppercase tracking-widest mb-1">Office</p>
                <p className="text-black/55 dark:text-white/55 text-xs font-light leading-relaxed">
                  Bachelor Gate, Ambagan Road,<br />Jahangirnagar University,<br />Savar, Dhaka
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-black/10 dark:border-white/10 px-5 md:px-10 lg:px-14 xl:px-20 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-black/25 dark:text-white/25">
        <p>© {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.</p>
        <button onClick={() => router.back()} className="flex items-center gap-1.5 hover:text-accent transition-colors">
          <ArrowLeft size={11} /> Back
        </button>
      </div>

    </div>
  );
}
