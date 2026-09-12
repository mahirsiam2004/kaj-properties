'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft, MapPin, BedDouble, Bath, Maximize2,
  Phone, Mail, CheckCircle2, Download, ChevronLeft, ChevronRight, ChevronDown,
} from 'lucide-react';
import ThemeToggleButton from '@/components/ThemeToggleButton';

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
  { icon: 'sqft',    value: '1800', label: 'Sq. Ft.',   sub: 'Area' },
  { icon: 'bed',     value: '4',    label: 'Beds',      sub: 'Bedrooms' },
  { icon: 'bath',    value: '4',    label: 'Baths',     sub: 'Bathrooms' },
  { icon: 'balcony', value: '4',    label: 'Balconies', sub: 'Open Air' },
];

const features = [
  '4 Bedrooms',
  'Dining & Drawing Room',
  'Standard Modular Kitchen',
  '4 Full Bathrooms',
  '4 Spacious Balconies',
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
  { title: 'Construction Phase',  desc: 'Building costs are paid collectively in easy installments during construction.' },
  { title: 'Handover',            desc: 'Receive your fully finished apartment with all agreed amenities upon completion.' },
];

function StatIcon({ type }: { type: string }) {
  if (type === 'sqft') return <Maximize2 size={16} className="text-accent" />;
  if (type === 'bed')  return <BedDouble size={16} className="text-accent" />;
  if (type === 'bath') return <Bath size={16} className="text-accent" />;
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <rect x="3" y="3" width="18" height="4" rx="1" /><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" />
      <line x1="9" y1="11" x2="9" y2="19" /><line x1="15" y1="11" x2="15" y2="19" />
    </svg>
  );
}

export default function ChayabithiClient() {
  const router = useRouter();
  const [activeImg, setActiveImg] = useState(0);
  const prev = () => setActiveImg(i => (i - 1 + gallery.length) % gallery.length);
  const next = () => setActiveImg(i => (i + 1) % gallery.length);

  return (
    <div className="h-screen overflow-y-auto bg-white dark:bg-brand-black text-brand-black dark:text-white">

      {/* Top nav */}
      <div className="sticky top-0 z-30 bg-white/95 dark:bg-brand-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 px-5 md:px-10 lg:px-14 xl:px-20 py-3 flex items-center justify-between">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-accent transition-colors text-sm font-medium group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <img src="/logo1.png" alt="Kaz Properties" className="h-7 md:h-8 w-auto object-contain" />
        <ThemeToggleButton variant="light" />
      </div>

      {/* ── Hero: left text | right gallery ── */}
      <div className="px-5 md:px-10 lg:px-14 xl:px-20 pt-5 pb-4 border-b border-black/10 dark:border-white/10" style={{ maxHeight: '82vh' }}>
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Left */}
          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <span className="text-accent uppercase tracking-widest text-[10px] font-bold">Kaz Properties — Flagship Project</span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-light mt-2 mb-2 leading-tight tracking-tight text-brand-black dark:text-white">Chayabithi</h1>
              <div className="flex items-start gap-2 text-black/50 dark:text-white/50 mb-4">
                <MapPin size={12} className="text-accent shrink-0 mt-0.5" />
                <span className="text-xs font-light leading-snug">
                  Dhaka-Aricha Highway, Savar · Adjacent to Jahangirnagar University, Dhaka
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {stats.map(s => (
                  <div key={s.label} className="bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-sm p-3 flex flex-col items-center text-center gap-1">
                    <StatIcon type={s.icon} />
                    <div className="text-xl font-bold text-brand-black dark:text-white">{s.value}</div>
                    <div className="text-accent font-semibold text-[9px] uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-2">
                <a href="tel:+8801774873972" className="flex items-center gap-1.5 bg-accent hover:bg-brand-black dark:hover:bg-white text-white hover:text-white dark:hover:text-brand-black transition-colors px-4 py-2 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <Phone size={12} /> Call Us
                </a>
                <a href="https://wa.me/8801856621076" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-brand-black dark:text-white transition-colors px-4 py-2 rounded-sm font-semibold text-xs uppercase tracking-widest">
                  <WhatsAppIcon /> WhatsApp
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

          {/* Right: gallery — capped so content peeks below */}
          <div className="w-full lg:w-[54%] shrink-0">
            <div className="relative w-full rounded-sm overflow-hidden bg-black/[0.03] dark:bg-white/[0.03]" style={{ maxHeight: '55vh', aspectRatio: '4/3' }}>
              <img src={gallery[activeImg]} alt="Chayabithi" className="w-full h-full object-contain transition-all duration-500" />
              <button onClick={prev} aria-label="Prev" className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 dark:bg-brand-black/60 border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-accent transition-all text-white">
                <ChevronLeft size={13} />
              </button>
              <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 dark:bg-brand-black/60 border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-accent transition-all text-white">
                <ChevronRight size={13} />
              </button>
              <div className="absolute bottom-2 right-2 bg-black/60 rounded-full px-2.5 py-0.5 text-white/50 text-[10px] tabular-nums">{activeImg + 1}/{gallery.length}</div>
            </div>
            <div className="flex gap-2 mt-2 overflow-x-auto">
              {gallery.map((src, i) => (
                <button key={i} onClick={() => setActiveImg(i)} className={`shrink-0 w-16 h-11 rounded-sm overflow-hidden border-2 transition-all ${i === activeImg ? 'border-accent' : 'border-transparent opacity-40 hover:opacity-70'}`}>
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll invite strip ── */}
      <div className="px-5 md:px-10 lg:px-14 xl:px-20 py-3 flex items-center gap-3 border-b border-black/8 dark:border-white/8 bg-black/[0.02] dark:bg-white/[0.02]">
        <ChevronDown size={14} className="text-accent animate-bounce shrink-0" />
        <span className="text-black/40 dark:text-white/40 text-xs font-light">Overview · How It Works · Features · Location · Floor Plan · Project Details</span>
      </div>

      {/* ── Main content ── */}
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
                Chayabithi proved the land-share model works — delivering premium, south-facing apartments adjacent to Jahangirnagar University. Every unit is designed for natural light, ventilation, and generous living space in one of Savar&apos;s most accessible locations.
              </p>
            </div>

            {/* How It Works */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-px h-5 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-[10px] font-bold">How It Works</span>
              </div>
              <div className="space-y-2">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-3 bg-black/[0.03] dark:bg-white/[0.03] border border-black/8 dark:border-white/8 rounded-sm p-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-[10px]">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-brand-black dark:text-white font-semibold text-xs mb-0.5">{step.title}</h4>
                      <p className="text-black/45 dark:text-white/45 text-xs font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features + Location side by side on md+ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-px h-5 bg-accent" />
                  <span className="text-accent uppercase tracking-widest text-[10px] font-bold">Features</span>
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
                  {locationAdvantages.map(item => (
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
                <a href="/assets/feature/chayabithi.pdf" download="Chayabithi-Floor-Plan.pdf"
                  className="flex items-center gap-1.5 bg-accent hover:bg-brand-black dark:hover:bg-white text-white dark:hover:text-brand-black transition-colors px-3 py-1.5 rounded-sm text-[10px] font-semibold uppercase tracking-widest">
                  <Download size={11} /> Download PDF
                </a>
              </div>
              <div className="border border-black/10 dark:border-white/10 rounded-sm bg-black/[0.02] dark:bg-white/[0.02] overflow-hidden">
                <div className="w-full" style={{ paddingBottom: '75%', position: 'relative' }}>
                  <img
                    src="/assets/feature/plan.jpg"
                    alt="Chayabithi Floor Plan"
                    style={{
                      position: 'absolute', top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%) rotate(90deg)',
                      width: '133%', height: '133%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right sidebar */}
          <div className="w-full lg:w-64 xl:w-72 shrink-0">
            <div className="bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-sm p-4 lg:sticky lg:top-4 space-y-4">

              {/* Project details */}
              <div>
                <h3 className="text-brand-black dark:text-white font-semibold text-sm mb-3 pb-3 border-b border-black/10 dark:border-white/10">Project Details</h3>
                <div className="space-y-0 text-xs">
                  {[
                    { label: 'Project',    value: 'Chayabithi' },
                    { label: 'Developer',  value: 'Kaz Properties' },
                    { label: 'Type',       value: 'Residential (Land-Share)' },
                    { label: 'Units',      value: '27 Units' },
                    { label: 'Size',       value: '1,800 Sq. Ft.' },
                    { label: 'Bedrooms',   value: '3 Bedrooms' },
                    { label: 'Bathrooms',  value: '4 Full Baths' },
                    { label: 'Balconies',  value: '6' },
                    { label: 'Facing',     value: 'South-Facing' },
                    { label: 'Status',     value: 'Available' },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between gap-2 py-1.5 border-b border-black/5 dark:border-white/5 last:border-0">
                      <span className="text-black/35 dark:text-white/35 shrink-0">{row.label}</span>
                      <span className="text-brand-black dark:text-white font-medium text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
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

              {/* Address */}
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
