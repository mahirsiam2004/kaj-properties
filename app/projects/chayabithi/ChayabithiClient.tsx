'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, MapPin, BedDouble, Bath, Maximize2,
  Phone, Mail, ChevronLeft, ChevronRight, CheckCircle2,
} from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
  { icon: 'sqft',    value: '1800',  label: 'Sq. Ft.',   sub: 'Apartment Area' },
  { icon: 'bed',     value: '3+1',   label: 'Beds',      sub: 'Spacious Rooms' },
  { icon: 'bath',    value: '4',     label: 'Baths',     sub: 'Full Bathrooms' },
  { icon: 'balcony', value: '6',     label: 'Balconies', sub: 'Open Air Views' },
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
  { direction: 'Highway',  place: 'Dhaka-Aricha Highway — Direct Access' },
  { direction: 'North',    place: 'Savar Golf Club' },
  { direction: 'East',     place: 'Savar Cantonment' },
  { direction: 'South',    place: 'Jahangirnagar University' },
  { direction: 'Nearby',   place: 'Renowned Schools & Hospitals' },
];

const steps = [
  { title: 'Land Share Purchase', desc: 'Purchase your share of the land — a transparent, legally documented co-ownership model.' },
  { title: 'Construction Phase',  desc: 'Building costs are paid collectively in easy installments during the construction period.' },
  { title: 'Handover',            desc: 'Receive your fully finished apartment with all agreed amenities upon project completion.' },
];

function StatIcon({ type }: { type: string }) {
  if (type === 'sqft') return <Maximize2 size={20} className="text-accent" />;
  if (type === 'bed')  return <BedDouble size={20} className="text-accent" />;
  if (type === 'bath') return <Bath size={20} className="text-accent" />;
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <rect x="3" y="3" width="18" height="4" rx="1"/><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
      <line x1="9" y1="11" x2="9" y2="19"/><line x1="15" y1="11" x2="15" y2="19"/>
    </svg>
  );
}

export default function ChayabithiClient() {
  const [activeImg, setActiveImg] = useState(0);

  const prev = () => setActiveImg(i => (i - 1 + gallery.length) % gallery.length);
  const next = () => setActiveImg(i => (i + 1) % gallery.length);

  return (
    <div className="min-h-screen bg-brand-black text-white">

      {/* ── Hero ── */}
      <section className="relative h-[55vh] md:h-[65vh] xl:h-[70vh] overflow-hidden">
        <img
          src={gallery[activeImg]}
          alt="Chayabithi"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 to-transparent" />

        {/* Nav bar */}
        <div className="absolute top-0 left-0 w-full px-5 md:px-10 lg:px-16 xl:px-24 py-5 md:py-7 flex items-center justify-between z-20">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm font-medium group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <img src="/logo1.png" alt="Kaz Properties" className="h-8 md:h-10 xl:h-12 w-auto object-contain" />
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 w-full px-5 md:px-10 lg:px-16 xl:px-24 pb-10 md:pb-14 z-20">
          <span className="text-accent uppercase tracking-widest text-xs xl:text-sm font-bold">Kaz Properties — Flagship Project</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light mt-2 mb-3 leading-none tracking-tight">Chayabithi</h1>
          <div className="flex items-center gap-2 text-white/60">
            <MapPin size={14} className="text-accent shrink-0" />
            <span className="text-xs md:text-sm font-light">Dhaka-Aricha Highway, Savar — Adjacent to Jahangirnagar University, Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Gallery controls */}
        <div className="absolute bottom-10 md:bottom-14 right-5 md:right-10 lg:right-16 xl:right-24 z-20 flex items-center gap-3">
          <button onClick={prev} aria-label="Previous image"
            className="w-9 h-9 rounded-full border border-white/20 bg-brand-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
            <ChevronLeft size={14} />
          </button>
          <span className="text-white/40 text-xs tabular-nums">{activeImg + 1} / {gallery.length}</span>
          <button onClick={next} aria-label="Next image"
            className="w-9 h-9 rounded-full border border-white/20 bg-brand-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
            <ChevronRight size={14} />
          </button>
        </div>
      </section>

      {/* ── Thumbnail strip ── */}
      <div className="bg-brand-black border-b border-white/10 px-5 md:px-10 lg:px-16 xl:px-24 py-4 flex gap-3 overflow-x-auto scrollbar-hide">
        {gallery.map((src, i) => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`shrink-0 w-20 h-14 md:w-24 md:h-16 xl:w-28 xl:h-18 rounded-sm overflow-hidden border-2 transition-all ${i === activeImg ? 'border-accent opacity-100' : 'border-transparent opacity-40 hover:opacity-70'}`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 py-14 md:py-18 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 2xl:gap-20">

          {/* Left 2/3 */}
          <div className="lg:col-span-2 space-y-14 xl:space-y-18">

            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-px h-7 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-xs font-bold">Overview</span>
              </div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-light mb-4 leading-tight">
                Our Successful Flagship Project
              </h2>
              <p className="text-white/60 font-light text-sm xl:text-base leading-relaxed max-w-2xl">
                Chayabithi proved that the land-share model works — delivering premium, south-facing apartments adjacent to Jahangirnagar University. Every unit is designed for natural light, ventilation, and generous living space in one of Savar&apos;s most accessible locations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-5">
              {stats.map(s => (
                <div key={s.label} className="bg-white/[0.04] border border-white/10 rounded-sm p-5 xl:p-6 flex flex-col items-center text-center gap-2">
                  <StatIcon type={s.icon} />
                  <div className="text-3xl xl:text-4xl font-bold text-white">{s.value}</div>
                  <div className="text-accent font-semibold text-xs xl:text-sm uppercase tracking-wider">{s.label}</div>
                  <div className="text-white/30 text-[10px] xl:text-xs">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* How It Works */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-px h-7 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-xs font-bold">How It Works</span>
              </div>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 xl:gap-5 bg-white/[0.03] border border-white/8 rounded-sm p-5 xl:p-6">
                    <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-xs xl:text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm xl:text-base mb-1">{step.title}</h4>
                      <p className="text-white/50 text-xs xl:text-sm font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-px h-7 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-xs font-bold">Apartment Features</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4">
                {features.map(f => (
                  <div key={f} className="flex items-center gap-3 py-2 border-b border-white/5">
                    <CheckCircle2 size={14} className="text-accent shrink-0" strokeWidth={2} />
                    <span className="text-white/70 text-xs xl:text-sm font-light">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-px h-7 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-xs font-bold">Location Advantages</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4">
                {locationAdvantages.map(item => (
                  <div key={item.direction} className="flex items-start gap-3 bg-white/[0.03] border border-white/8 rounded-sm p-4 xl:p-5">
                    <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">{item.direction}</div>
                      <div className="text-white text-xs xl:text-sm font-medium">{item.place}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right sidebar */}
          <div className="lg:col-span-1 space-y-5 xl:space-y-6">

            {/* Project quick info */}
            <div className="bg-white/[0.04] border border-white/10 rounded-sm p-6 xl:p-7 sticky top-6">
              <h3 className="text-white font-semibold text-base xl:text-lg mb-5 pb-4 border-b border-white/10">Project Details</h3>
              <div className="space-y-3 xl:space-y-4 text-sm mb-6">
                {[
                  { label: 'Project Name',  value: 'Chayabithi' },
                  { label: 'Developer',     value: 'Kaz Properties & Developers' },
                  { label: 'Type',          value: 'Residential (Land-Share Model)' },
                  { label: 'Land Area',     value: '18 Decimals' },
                  { label: 'Total Shares',  value: '27 Units' },
                  { label: 'Apartment Size',value: '1,800 Sq. Ft.' },
                  { label: 'Bedrooms',      value: '3 + 1 Study' },
                  { label: 'Bathrooms',     value: '4 Full Baths' },
                  { label: 'Balconies',     value: '6' },
                  { label: 'Facing',        value: 'South-Facing' },
                  { label: 'Status',        value: 'Available' },
                ].map(row => (
                  <div key={row.label} className="flex justify-between gap-3 py-2 border-b border-white/5 last:border-0">
                    <span className="text-white/40 text-xs xl:text-sm shrink-0">{row.label}</span>
                    <span className="text-white text-xs xl:text-sm font-medium text-right">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="space-y-3">
                <a
                  href="tel:+8801774873972"
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-white text-white hover:text-brand-black transition-colors py-3 xl:py-3.5 rounded-sm font-semibold text-xs xl:text-sm uppercase tracking-widest"
                >
                  <Phone size={14} />
                  Call Us Now
                </a>
                <a
                  href="https://wa.me/8801856621076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white transition-colors py-3 xl:py-3.5 rounded-sm font-semibold text-xs xl:text-sm uppercase tracking-widest"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
                <a
                  href="mailto:hellokazpnd@gmail.com"
                  className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-white transition-colors py-3 xl:py-3.5 rounded-sm font-semibold text-xs xl:text-sm uppercase tracking-widest"
                >
                  <Mail size={14} />
                  Email Us
                </a>
              </div>
            </div>

            {/* Address card */}
            <div className="bg-white/[0.03] border border-white/8 rounded-sm p-5 xl:p-6">
              <h4 className="text-white/50 text-xs uppercase tracking-widest mb-3">Office Address</h4>
              <p className="text-white/70 text-xs xl:text-sm font-light leading-relaxed">
                Bachelor Gate, Ambagan Road,<br />
                Jahangirnagar University,<br />
                Savar, Dhaka, Bangladesh
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="border-t border-white/10 px-5 md:px-10 lg:px-16 xl:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
        <p>© {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.</p>
        <Link href="/" className="flex items-center gap-2 hover:text-accent transition-colors">
          <ArrowLeft size={12} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
