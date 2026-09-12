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

  /* Input/select shared class — matches screenshot exactly */
  const inputCls =
    'w-full border border-[#ccc] bg-white text-[#333] placeholder-[#999] px-3 py-[7px] text-[13px] focus:outline-none focus:border-[#8a7a6e] transition-colors rounded-none';

  return (
    <div className="min-h-screen bg-white dark:bg-brand-black text-brand-black dark:text-white">

      {/* ── Hero ── */}
      <section className="relative h-[48vh] min-h-[360px] flex items-center bg-brand-black text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm"
            >
              <ArrowLeft size={16} /> Back to Contact
            </Link>
            <ThemeToggleButton variant="dark" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            For <span className="font-bold">Landowners</span>
          </h1>
          <p className="text-white/60 text-sm sm:text-base mt-3 max-w-lg font-light">
            Partner with Kaz Properties and unlock the full potential of your land.
          </p>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white dark:bg-brand-black">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
          <h2 className="text-2xl sm:text-3xl font-light mb-7 text-brand-black dark:text-white">
            Why Partner With Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="bg-[#FAF7F5] dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 rounded-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-3">
                  {b.icon}
                </div>
                <h3 className="text-sm font-semibold mb-1.5 text-brand-black dark:text-white">{b.title}</h3>
                <p className="text-brand-black/60 dark:text-white/60 font-light text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LAND INFORMATION FORM
          Matches screenshot exactly:
          - Outer green/colored bg → we use neutral page bg
          - White card with grid watermark
          - "MEET THE PROFESSIONALS" subtitle
          - "LAND INFORMATION" main heading with underline
          - Exact field layout
      ══════════════════════════════════════ */}
      <section className="py-14 sm:py-18 bg-[#e8ede8] dark:bg-[#0f1a0f]">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
          <div className="max-w-[680px] mx-auto">

            {/* White card */}
            <div className="relative bg-white overflow-hidden shadow-lg" style={{ border: '1px solid #d4d4d4' }}>

              {/* Grid / blueprint watermark (matches screenshot background texture) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  opacity: 0.06,
                  backgroundImage:
                    'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />

              <div className="relative z-10 px-8 sm:px-10 pt-8 pb-9">

                {/* ── Header ── */}
                <div className="text-center mb-6">
                  {/* "MEET THE PROFESSIONALS" with underline bar */}
                  <div className="inline-block mb-4">
                    <p
                      className="text-[13px] font-bold tracking-[0.22em] uppercase text-[#1a2a3a] pb-1"
                      style={{ borderBottom: '2px solid #1a2a3a' }}
                    >
                      Meet the Professionals
                    </p>
                  </div>

                  {/* "LAND INFORMATION" */}
                  <h2 className="text-[17px] font-bold tracking-[0.2em] uppercase text-[#1a2a3a]">
                    Land Information
                  </h2>
                </div>

                {status === 'success' ? (
                  <div className="flex flex-col items-center gap-4 text-center py-10">
                    <CheckCircle size={48} className="text-accent" strokeWidth={1.5} />
                    <h4 className="text-lg font-semibold text-[#1a2a3a]">Thank You!</h4>
                    <p className="text-[#555] text-sm max-w-xs">
                      We&apos;ve received your land details. Our team will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-3 border border-[#333] text-[#333] hover:bg-[#333] hover:text-white transition-colors px-8 py-2 text-xs uppercase tracking-widest font-semibold"
                    >
                      Submit Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[6px]">

                    {/* Row 1: Locality* | Size of the Land in Kathas* */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                      <input
                        type="text"
                        value={form.locality}
                        onChange={set('locality')}
                        placeholder="Locality*"
                        required
                        className={inputCls}
                      />
                      <input
                        type="text"
                        value={form.landSize}
                        onChange={set('landSize')}
                        placeholder="Size of the Land in Kathas*"
                        className={inputCls}
                      />
                    </div>

                    {/* Row 2: Address* (full width) */}
                    <input
                      type="text"
                      value={form.address}
                      onChange={set('address')}
                      placeholder="Address*"
                      required
                      className={inputCls}
                    />

                    {/* Row 3: Width of Road (In Feet)* | Freehold dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                      <input
                        type="text"
                        value={form.roadWidth}
                        onChange={set('roadWidth')}
                        placeholder="Width of the Road in Front (In Feet)*"
                        className={inputCls}
                      />
                      <select
                        value={form.roadType}
                        onChange={set('roadType')}
                        className={`${inputCls} cursor-pointer appearance-none`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23666'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 10px center',
                          paddingRight: '28px',
                        }}
                      >
                        {ROAD_TYPE_OPTIONS.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Row 4: Facing | Attractive Features (If Any) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                      <input
                        type="text"
                        value={form.facing}
                        onChange={set('facing')}
                        placeholder="Facing"
                        className={inputCls}
                      />
                      <input
                        type="text"
                        value={form.attractiveFeatures}
                        onChange={set('attractiveFeatures')}
                        placeholder="Attractive Features (If Any)"
                        className={inputCls}
                      />
                    </div>

                    {/* Row 5: Land Owner Name (full width) */}
                    <input
                      type="text"
                      value={form.ownerName}
                      onChange={set('ownerName')}
                      placeholder="Land Owner Name"
                      className={inputCls}
                    />

                    {/* Row 6: Email ID | Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px]">
                      <input
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="Email ID"
                        className={inputCls}
                      />
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="Phone Number"
                        className={inputCls}
                      />
                    </div>

                    {/* Error */}
                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 px-3 py-2 text-xs mt-1">
                        <AlertCircle size={13} className="shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Submit — centered, outline style matching screenshot */}
                    <div className="flex justify-center mt-4">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="border border-[#333] text-[#333] hover:bg-[#1a2a3a] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-12 py-2 text-[13px] font-semibold tracking-wide flex items-center gap-2"
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
            {/* End white card */}

          </div>
        </div>
      </section>

    </div>
  );
}
