'use client';

import Link from 'next/link';
import { ArrowLeft, Target, Eye, Heart, Shield } from 'lucide-react';
import ThemeToggleButton from '@/components/ThemeToggleButton';

const values = [
  { icon: <Target size={24} />, title: 'Our Mission', desc: 'To create exceptional living spaces that combine modern design with sustainable practices, delivering quality homes that exceed expectations and enrich the lives of our residents.' },
  { icon: <Eye size={24} />, title: 'Our Vision', desc: 'To become the most trusted and innovative real estate developer in Bangladesh, setting new standards for quality, transparency, and customer satisfaction in the industry.' },
  { icon: <Heart size={24} />, title: 'Our Values', desc: 'Integrity, innovation, and customer-first approach guide everything we do. We believe in building relationships, not just structures.' },
  { icon: <Shield size={24} />, title: 'Our Promise', desc: 'Every project we undertake is backed by unwavering commitment to quality materials, skilled craftsmanship, and timely delivery.' },
];

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-black text-brand-black dark:text-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
          <div className="flex items-center justify-between mb-6">
            <Link href="/#about" className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm">
              <ArrowLeft size={16} /> Back to About
            </Link>
            <ThemeToggleButton variant="dark" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Mission & <span className="font-bold">Vision</span>
          </h1>
          <p className="text-white/60 text-sm sm:text-base mt-3 max-w-lg font-light">
            Guiding principles that define who we are and where we&apos;re headed.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 xl:gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="bg-brand-light dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 sm:p-8 rounded-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                  {v.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{v.title}</h3>
                <p className="text-brand-black/60 dark:text-white/60 font-light text-sm sm:text-base leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-brand-light dark:bg-white/5 border-t border-black/5 dark:border-white/5">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-brand-black/60 dark:text-white/60 mb-6 text-sm max-w-md mx-auto">Discover our premium projects designed for modern living.</p>
          <Link href="/#featured" className="inline-flex items-center gap-2 bg-accent text-white hover:bg-brand-black dark:hover:bg-white dark:hover:text-brand-black transition-colors px-6 py-3 rounded-sm font-semibold text-sm uppercase tracking-widest">
            View Projects
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
