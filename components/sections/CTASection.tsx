'use client';

import { useState } from 'react';
import { Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useGsapFadeUp, useGsapSlideLeft, useGsapSlideRight } from '@/lib/useGsap';

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.984-1.407A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.274-1.243l-.306-.182-3.18.898.893-3.096-.2-.318A7.946 7.946 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
  </svg>
);

const team = [
  { img: '/assets/management-team/Abu_bakar.jpeg', name: 'Abu Bakar Siddique', role: 'Director – Operations', phone: 'tel:+8801774873972', phoneLabel: '+880 1774-873972' },
  { img: '/assets/management-team/Sharmin Akter.jpeg', name: 'Sharmin Akter', role: 'Deputy Managing Director', phone: 'tel:01913715734', phoneLabel: '01913-715734' },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function CTASection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in your name and message.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', message: '' });
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const headerRef = useGsapFadeUp();
  const clientsRef = useGsapSlideLeft({ delay: 0.1 });
  const landownersRef = useGsapSlideRight({ delay: 0.2 });

  return (
    <section className="bg-white dark:bg-brand-black py-16 sm:py-20 lg:py-24 xl:py-32 relative" id="contact">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BE9F98] to-transparent" />

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-36">
        {/* Section header */}
        <div ref={headerRef} className="mb-8 sm:mb-10 xl:mb-12">
          <span className="text-[#BE9F98] uppercase tracking-widest text-sm sm:text-base font-bold">Contact Us</span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-[#000000] dark:text-white mt-2 leading-tight">
            How Can We Help You?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 xl:gap-10 items-stretch">
          {/* For Clients */}
          <div ref={clientsRef} className="bg-[#FAF7F5] dark:bg-[#1a1a1a] border border-black/5 dark:border-white/10 shadow-xl rounded-sm flex flex-col p-5 sm:p-6 lg:p-8 xl:p-10">
            <div className="mb-5 xl:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-[#000000] dark:text-white mb-2">
                For Clients
              </h3>
              <p className="text-black/60 dark:text-white/60 font-light text-sm leading-relaxed">
                Explore premium living and smart investment opportunities with Kaz Properties.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 xl:mb-6">
              {team.map(p => (
                <div key={p.name} className="flex items-center gap-3 border-l-4 border-[#BE9F98] pl-4 bg-white dark:bg-[#222] py-3 pr-3 rounded-r-sm">
                  <img src={p.img} alt={p.name} className="w-11 h-11 sm:w-12 sm:h-12 object-cover rounded-full shadow-md shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-[#000000] dark:text-white leading-tight">{p.name}</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#BE9F98] font-medium mt-0.5">{p.role}</div>
                    <a href={p.phone} className="text-xs text-black/50 dark:text-white/70 hover:text-[#BE9F98] dark:hover:text-[#BE9F98] transition-colors mt-0.5 block">{p.phoneLabel}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2.5 mt-auto">
              {[
                { href: 'tel:+8801774873972', icon: <Phone size={14} />, label: '+880 1774-873972', sub: 'Director' },
                { href: 'tel:01913715734', icon: <Phone size={14} />, label: '01913-715734', sub: 'DMD' },
                { href: 'https://wa.me/8801774873972', target: '_blank', icon: <WhatsAppIcon />, label: 'WhatsApp', sub: 'Chat with us' },
                { href: 'mailto:siddiqueab13@gmail.com', icon: <Mail size={14} />, label: 'Email Us', sub: 'Get in touch' },
              ].map(item => (
                <a key={item.label} href={item.href} target={(item as { target?: string }).target}
                  rel={(item as { target?: string }).target ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-[#000000] dark:text-white hover:text-[#BE9F98] dark:hover:text-[#BE9F98] transition-colors border border-black/8 dark:border-white/10 hover:border-[#BE9F98]/40 p-2.5 rounded-sm group">
                  <span className="text-[#BE9F98] shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <div className="min-w-0">
                    <div className="font-semibold text-xs truncate text-[#000000] dark:text-white">{item.label}</div>
                    <div className="text-[9px] uppercase tracking-wide text-black/40 dark:text-white/40 mt-0.5">{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div ref={landownersRef} className="bg-[#000000] text-white rounded-sm shadow-2xl relative overflow-hidden flex flex-col p-5 sm:p-6 lg:p-8 xl:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#BE9F98]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#BE9F98]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 mb-5 xl:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-2">
                Contact Us
              </h3>
            </div>

            {status === 'success' ? (
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-4 text-center py-8">
                <CheckCircle size={48} className="text-[#BE9F98]" strokeWidth={1.5} />
                <h4 className="text-white text-xl font-light">Message Sent!</h4>
                <p className="text-white/60 text-sm font-light max-w-xs">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button onClick={() => setStatus('idle')}
                  className="mt-4 border border-white/20 hover:border-[#BE9F98] text-white/70 hover:text-[#BE9F98] transition-colors px-6 py-2 rounded-sm text-xs uppercase tracking-widest">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 relative z-10 flex-1" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium tracking-wide uppercase text-white/40">Full Name <span className="text-[#BE9F98]">*</span></label>
                    <input type="text" value={form.name} onChange={set('name')} placeholder="Your name" required
                      className="bg-white/5 border border-white/15 focus:border-[#BE9F98] outline-none text-white placeholder-white/30 px-3 py-2.5 rounded-sm transition-colors text-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium tracking-wide uppercase text-white/40">Phone</label>
                    <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+880..."
                      className="bg-white/5 border border-white/15 focus:border-[#BE9F98] outline-none text-white placeholder-white/30 px-3 py-2.5 rounded-sm transition-colors text-sm" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium tracking-wide uppercase text-white/40">Email</label>
                  <input type="email" value={form.email} onChange={set('email')} placeholder="your@email.com"
                    className="bg-white/5 border border-white/15 focus:border-[#BE9F98] outline-none text-white placeholder-white/30 px-3 py-2.5 rounded-sm transition-colors text-sm" />
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-xs font-medium tracking-wide uppercase text-white/40">Message <span className="text-[#BE9F98]">*</span></label>
                  <textarea rows={4} value={form.message} onChange={set('message')} placeholder="Text us..." required
                    className="bg-white/5 border border-white/15 focus:border-[#BE9F98] outline-none text-white placeholder-white/30 px-3 py-2.5 rounded-sm transition-colors resize-none text-sm flex-1" />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-sm px-3 py-2 text-xs">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="bg-[#BE9F98] hover:bg-white text-white hover:text-[#000000] disabled:opacity-60 disabled:cursor-not-allowed transition-colors py-3 uppercase tracking-widest text-xs font-bold w-full rounded-sm mt-1 flex items-center justify-center gap-2">
                  {status === 'loading' ? (<><Loader2 size={14} className="animate-spin" /> Sending…</>) : ('Send Message')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
