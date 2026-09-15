'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, AlertCircle, Loader2, TrendingUp, Shield, Handshake, BarChart3 } from 'lucide-react';
import ThemeToggleButton from '@/components/ThemeToggleButton';

type Status = 'idle' | 'loading' | 'success' | 'error';

const benefits = [
  { icon: <TrendingUp size={20} />, title: 'Guaranteed Returns', desc: 'Secure, predictable returns on your land investment with transparent agreements.' },
  { icon: <Shield size={20} />, title: 'Full Transparency', desc: 'Complete visibility into project progress, financials, and timelines at every stage.' },
  { icon: <Handshake size={20} />, title: 'Fair Partnership', desc: 'Equitable partnership models that respect your contribution and maximize mutual value.' },
  { icon: <BarChart3 size={20} />, title: 'Market Expertise', desc: 'Leverage our deep market knowledge to unlock the full potential of your property.' },
];

const ROAD_TYPE_OPTIONS = ['Freehold', '10 ft', '15 ft', '20 ft', '25 ft', '30 ft', '40 ft', '50 ft', '60+ ft'];

interface LandForm {
  locality: string;
  landSize: string;
  address: string;
  roadWidth: string;
  roadType: string;
  facing: string;
  attractiveFeatures: string;
  ownerName: string;
  email: string;
  phone: string;
}

const EMPTY: LandForm = {
  locality: '',
  landSize: '',
  address: '',
  roadWidth: '',
  roadType: 'Freehold',
  facing: '',
  attractiveFeatures: '',
  ownerName: '',
  email: '',
  phone: '',
};

export default function LandownersPage() {
  const [form, setForm] = useState<LandForm>(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set =
    (field: keyof LandForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.locality.trim() || !form.address.trim()) {
      setErrorMsg('Locality and Address are required.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/landowners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm(EMPTY);
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  /* Shared input / select style */
  const inputCls =
    'w-full border border-[#ccc] dark:border-white/20 bg-white dark:bg-white/5 text-[#333] dark:text-white placeholder-[#aaa] dark:placeholder-white/30 px-3 py-2 text-[13px] focus:outline-none focus:border-[#BE9F98] transition-colors rounded-none';

  return (
    <div className="min-h-screen bg-[#FAF7F5] dark:bg-brand-black text-brand-black dark:text-white">

      {/* ── Top nav strip (light, no dark hero) ── */}
      <div className="w-full bg-white dark:bg-brand-black border-b border-black/8 dark:border-white/10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 py-4 flex items-center justify-between">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 text-black/50 dark:text-white/50 hover:text-accent transition-colors text-sm font-medium group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <img src="/logo1.png" alt="Kaz Properties" className="h-8 md:h-10 w-auto object-contain" />
        <ThemeToggleButton variant="light" />
      </div>

      {/* ── Page header ── */}
      <div className="w-full bg-white dark:bg-brand-black border-b border-black/5 dark:border-white/5 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 py-10 sm:py-14">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-px h-6 bg-accent" />
          <span className="text-accent uppercase tracking-widest text-xs font-bold">Landowner Partnership</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-brand-black dark:text-white">
          For <span className="font-bold">Landowners</span>
        </h1>
        <p className="text-black/50 dark:text-white/50 text-sm sm:text-base mt-3 max-w-lg font-light">
          Partner with Kaz Properties and unlock the full potential of your land.
        </p>
      </div>

      {/* ── Benefits ── */}
      <section className="py-10 sm:py-14 bg-white dark:bg-brand-black">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
          <h2 className="text-xl sm:text-2xl font-light mb-6 text-brand-black dark:text-white">
            Why Partner With Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="bg-[#FAF7F5] dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 rounded-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-3">
                  {b.icon}
                </div>
                <h3 className="text-sm font-semibold mb-1.5 text-brand-black dark:text-white">{b.title}</h3>
                <p className="text-black/55 dark:text-white/55 font-light text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Land Information Form ── */}
      <section className="relative py-10 sm:py-14 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/assets/bg.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
          <div className="max-w-[660px] mx-auto">

            {/* Card */}
            <div className="relative bg-white dark:bg-[#111] border border-[#ddd] dark:border-white/10 shadow-md overflow-hidden">

              {/* Subtle grid watermark */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  opacity: 0.05,
                  backgroundImage:
                    'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              <div className="relative z-10 px-7 sm:px-10 pt-8 pb-9">

                {/* Card headings */}
                <div className="text-center mb-7">
                  <div className="inline-block mb-3">
                    <p
                      className="text-[12px] font-bold tracking-[0.25em] uppercase text-[#1a2a3a] dark:text-white pb-1"
                      style={{ borderBottom: '2px solid currentColor' }}
                    >
                      Meet the Professionals
                    </p>
                  </div>
                  <h2 className="text-[16px] font-bold tracking-[0.22em] uppercase text-[#1a2a3a] dark:text-white">
                    Land Information
                  </h2>
                </div>

                {/* ── Success state ── */}
                {status === 'success' ? (
                  <div className="flex flex-col items-center gap-4 text-center py-10">
                    <CheckCircle size={48} className="text-accent" strokeWidth={1.5} />
                    <h4 className="text-lg font-semibold text-[#1a2a3a] dark:text-white">Thank You!</h4>
                    <p className="text-black/55 dark:text-white/55 text-sm max-w-xs">
                      We&apos;ve received your land details. Our team will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-3 border border-[#333] dark:border-white/30 text-[#333] dark:text-white hover:bg-[#1a2a3a] dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors px-8 py-2 text-xs uppercase tracking-widest font-semibold"
                    >
                      Submit Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[6px]">

                    {/* Row 1: Locality* | Size of the Land in Kathas* */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                      <input type="text" value={form.locality} onChange={set('locality')}
                        placeholder="Locality*" required className={inputCls} />
                      <input type="text" value={form.landSize} onChange={set('landSize')}
                        placeholder="Size of the Land in Kathas*" className={inputCls} />
                    </div>

                    {/* Row 2: Address* */}
                    <input type="text" value={form.address} onChange={set('address')}
                      placeholder="Address*" required className={inputCls} />

                    {/* Row 3: Road Width | Road Type dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                      <input type="text" value={form.roadWidth} onChange={set('roadWidth')}
                        placeholder="Width of the Road in Front (In Feet)*" className={inputCls} />
                      <div className="relative">
                        <select
                          value={form.roadType}
                          onChange={set('roadType')}
                          className={`${inputCls} cursor-pointer appearance-none pr-8`}
                        >
                          {ROAD_TYPE_OPTIONS.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        {/* dropdown arrow */}
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#666]">
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
                            <path d="M0 0l5 6 5-6z" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Row 4: Facing | Attractive Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                      <input type="text" value={form.facing} onChange={set('facing')}
                        placeholder="Facing" className={inputCls} />
                      <input type="text" value={form.attractiveFeatures} onChange={set('attractiveFeatures')}
                        placeholder="Attractive Features (If Any)" className={inputCls} />
                    </div>

                    {/* Row 5: Land Owner Name */}
                    <input type="text" value={form.ownerName} onChange={set('ownerName')}
                      placeholder="Land Owner Name" className={inputCls} />

                    {/* Row 6: Email | Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                      <input type="email" value={form.email} onChange={set('email')}
                        placeholder="Email ID" className={inputCls} />
                      <input type="tel" value={form.phone} onChange={set('phone')}
                        placeholder="Phone Number" className={inputCls} />
                    </div>

                    {/* Error */}
                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 px-3 py-2 text-xs mt-1">
                        <AlertCircle size={13} className="shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="flex justify-center mt-5">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="border border-[#333] dark:border-white/30 text-[#333] dark:text-white hover:bg-[#1a2a3a] dark:hover:bg-white hover:text-white dark:hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-12 py-2 text-[13px] font-semibold tracking-wide flex items-center gap-2"
                      >
                        {status === 'loading' ? (
                          <><Loader2 size={13} className="animate-spin" /> Sending…</>
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>
            {/* end card */}

          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <div className="border-t border-black/8 dark:border-white/10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-black/35 dark:text-white/35 bg-white dark:bg-brand-black">
        <p>© {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.</p>
        <Link href="/#contact" className="flex items-center gap-1.5 hover:text-accent transition-colors">
          <ArrowLeft size={11} /> Back
        </Link>
      </div>

    </div>
  );
}
