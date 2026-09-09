'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, MapPin, BedDouble, Bath, Maximize2,
  Phone, Mail, CheckCircle2, Download, ChevronLeft, ChevronRight,
} from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.984-1.407A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.274-1.243l-.306-.182-3.18.898.893-3.096-.2-.318A7.946 7.946 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
  </svg>
);

const gallery = [
  '/assets/feature/CHAYABITHI.jpg',
  '/assets/Chayabithi/KAJ POST 5.jpg',
  '/assets/Chayabithi/CHAYABITHI 7.jpg',
  '/assets/Chayabithi/vhayabithi_01.png',
];

const stats = [
  { icon: 'sqft',    value: '1800', label: 'Sq. Ft.',   sub: 'Apartment Area' },
  { icon: 'bed',     value: '3',    label: 'Beds',      sub: 'Spacious Rooms' },
  { icon: 'bath',    value: '4',    label: 'Baths',     sub: 'Full Bathrooms' },
  { icon: 'balcony', value: '6',    label: 'Balconies', sub: 'Open Air Views' },
];

const features = [
  '3 Bedrooms + 1 Study / Guest Room',
  'Dining & Drawing Room',
  'Standard Modular Kitchen',
  '4 Full Bathrooms',
  '6 Spacious Balconies',
  'South-Facing Units',
  'Dedicated Parking Facility',
  'Lift & Backup Generator',
  'CCTV Surveillance',
  '24/7 Security',
  'Rooftop Access',
  'Fire Safety System',
];

const locationAdvantages = [
  { direction: 'Highway', place: 'Dhaka-Aricha Highway — Direct Access' },
  { direction: 'North',   place: 'Savar Golf Club' },
  { direction: 'East',    place: 'Savar Cantonment' },
  { direction: 'South',   place: 'Jahangirnagar University' },
  { direction: 'Nearby',  place: 'Renowned Schools & Hospitals' },
];

const steps = [
  { title: 'Land Share Purchase', desc: 'Purchase your share of the land — a transparent, legally documented co-ownership model.' },
  { title: 'Construction Phase',  desc: 'Building costs are paid collectively in easy installments during the construction period.' },
  { title: 'Handover',            desc: 'Receive your fully finished apartment with all agreed amenities upon project completion.' },
];

function StatIcon({ type }: { type: string }) {
  if (type === 'sqft') return <Maximize2 size={18} className="text-accent" />;
  if (type === 'bed')  return <BedDouble size={18} className="text-accent" />;
  if (type === 'bath') return <Bath size={18} className="text-accent" />;
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <rect x="3" y="3" width="18" height="4" rx="1" /><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
      <line x1="9" y1="11" x2="9" y2="19" /><line x1="15" y1="11" x2="15" y2="19" />
    </svg>
  );
}

export default function ChayabithiClient() {
  const [activeImg, setActiveImg] = useState(0);

  const prev = () => setActiveImg(i => (i - 1 + gallery.length) % gallery.length);
  const next = () => setActiveImg(i => (i + 1) % gallery.length);

  return (
    /* h-screen + overflow-y-auto → page scrolls inside, body stays overflow-hidden for the home Swiper */
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
          HERO — left text  |  right image gallery
      ══════════════════════════════════════════════ */}
      <section className="px-5 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14 xl:py-16 border-b border-white/10">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">

          {/* ── Left: title block ── */}
          <div className="flex-1 min-w-0">
            <span className="text-accent uppercase tracking-widest text-[10px] xl:text-xs font-bold">
              Kaz Properties — Flagship Project
            </span>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-light mt-3 mb-4 leading-none tracking-tight">
              Chayabithi
            </h1>
            <div className="flex items-start gap-2 text-white/50 mb-6">
              <MapPin size={13} className="text-accent shrink-0 mt-0.5" />
              <span className="text-xs md:text-sm font-light leading-snug">
                Dhaka-Aricha Highway, Savar<br />
                Adjacent to Jahangirnagar University, Dhaka, Bangladesh
              </span>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {stats.map(s => (
                <div key={s.label} className="bg-white/[0.04] border border-white/10 rounded-sm p-4 flex flex-col items-center text-center gap-1.5">
                  <StatIcon type={s.icon} />
                  <div className="text-2xl xl:text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-accent font-semibold text-[10px] xl:text-xs uppercase tracking-wider">{s.label}</div>
                  <div className="text-white/30 text-[9px] xl:text-[10px]">{s.sub}</div>
                </div>
              ))}
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
                href="/#contact"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white transition-colors px-5 py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest"
              >
                <Mail size={13} /> Email
              </a>
            </div>
          </div>

          {/* ── Right: image gallery ── */}
          <div className="w-full lg:w-[52%] xl:w-[55%] shrink-0 flex flex-col gap-3">
            {/* Main image */}
            <div className="relative w-full overflow-hidden rounded-sm bg-white/[0.03]" style={{ aspectRatio: '16/10' }}>
              <img
                src={gallery[activeImg]}
                alt="Chayabithi"
                className="w-full h-full object-contain transition-all duration-500"
              />
              {/* Prev / Next */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <ChevronRight size={14} />
              </button>
              {/* Counter */}
              <div className="absolute bottom-3 right-3 bg-brand-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white/60 text-xs tabular-nums">
                {activeImg + 1} / {gallery.length}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`shrink-0 w-20 h-14 rounded-sm overflow-hidden border-2 transition-all ${i === activeImg ? 'border-accent opacity-100' : 'border-transparent opacity-40 hover:opacity-70'}`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAIN CONTENT — left details  |  right sidebar
      ══════════════════════════════════════════════ */}
      <div className="px-5 md:px-10 lg:px-14 xl:px-20 py-12 xl:py-16">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">

          {/* ── Left column ── */}
          <div className="flex-1 min-w-0 space-y-12 xl:space-y-14">

            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-px h-6 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-[10px] xl:text-xs font-bold">Overview</span>
              </div>
              <h2 className="text-2xl xl:text-3xl font-light mb-3 leading-snug">Our Successful Flagship Project</h2>
              <p className="text-white/55 font-light text-sm xl:text-base leading-relaxed">
                Chayabithi proved that the land-share model works — delivering premium, south-facing apartments adjacent to
                Jahangirnagar University. Every unit is designed for natural light, ventilation, and generous living space
                in one of Savar&apos;s most accessible locations.
              </p>
            </div>

            {/* How It Works */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-px h-6 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-[10px] xl:text-xs font-bold">How It Works</span>
              </div>
              <div className="space-y-3">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 bg-white/[0.03] border border-white/8 rounded-sm p-4 xl:p-5">
                    <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-xs">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                      <p className="text-white/50 text-xs font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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

            {/* Location Advantages */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-px h-6 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-[10px] xl:text-xs font-bold">Location Advantages</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {locationAdvantages.map(item => (
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

            {/* Floor Plan */}
            <div>
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-px h-6 bg-accent" />
                  <span className="text-accent uppercase tracking-widest text-[10px] xl:text-xs font-bold">Floor Plan</span>
                </div>
                <a
                  href="/assets/feature/chayabithi.pdf"
                  download="Chayabithi-Floor-Plan.pdf"
                  className="flex items-center gap-2 bg-accent hover:bg-white text-white hover:text-brand-black transition-colors px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-widest"
                >
                  <Download size={12} />
                  Download PDF
                </a>
              </div>
              {/* Floor plan as image — rotated to landscape */}
              <div className="rounded-sm overflow-hidden border border-white/10 bg-white/[0.02] flex items-center justify-center py-6">
                <img
                  src="/assets/feature/plan.jpg"
                  alt="Chayabithi Floor Plan"
                  className="w-full h-auto object-contain rotate-90"
                  style={{ maxHeight: '80vw' }}
                />
              </div>
            </div>

          </div>

          {/* ── Right sidebar ── */}
          <div className="w-full lg:w-72 xl:w-80 shrink-0 space-y-4">

            {/* Project details card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-sm p-5 xl:p-6 lg:sticky lg:top-6">
              <h3 className="text-white font-semibold text-sm xl:text-base mb-4 pb-4 border-b border-white/10">
                Project Details
              </h3>
              <div className="space-y-2.5 text-xs mb-5">
                {[
                  { label: 'Project Name',   value: 'Chayabithi' },
                  { label: 'Developer',      value: 'Kaz Properties & Developers' },
                  { label: 'Type',           value: 'Residential (Land-Share)' },
                  { label: 'Total Shares',   value: '27 Units' },
                  { label: 'Apartment Size', value: '1,800 Sq. Ft.' },
                  { label: 'Bedrooms',       value: '3 Bedrooms' },
                  { label: 'Bathrooms',      value: '4 Full Baths' },
                  { label: 'Balconies',      value: '6' },
                  { label: 'Facing',         value: 'South-Facing' },
                  { label: 'Status',         value: 'Available' },
                ].map(row => (
                  <div key={row.label} className="flex justify-between gap-2 py-2 border-b border-white/5 last:border-0">
                    <span className="text-white/40 shrink-0">{row.label}</span>
                    <span className="text-white font-medium text-right">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Contact buttons */}
              <div className="space-y-2.5">
                <a
                  href="tel:+8801774873972"
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-white text-white hover:text-brand-black transition-colors py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest"
                >
                  <Phone size={13} /> Call Us Now
                </a>
                <a
                  href="https://wa.me/8801856621076"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white transition-colors py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a
                  href="/#contact"
                  className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white transition-colors py-2.5 rounded-sm font-semibold text-xs uppercase tracking-widest"
                >
                  <Mail size={13} /> Email Us
                </a>
              </div>
            </div>

            {/* Office address */}
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

      {/* ── Footer strip ── */}
      <div className="border-t border-white/10 px-5 md:px-10 lg:px-14 xl:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
        <p>© {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.</p>
        <Link href="/" className="flex items-center gap-2 hover:text-accent transition-colors">
          <ArrowLeft size={12} /> Back to Home
        </Link>
      </div>

    </div>
  );
}
