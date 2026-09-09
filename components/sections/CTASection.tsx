'use client';

import { useState } from 'react';
import { Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.984-1.407A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.274-1.243l-.306-.182-3.18.898.893-3.096-.2-.318A7.946 7.946 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
  </svg>
);

const team = [
  { img: '/assets/team/Abu Bakar Siddique.jpg', name: 'Abu Bakar Siddique', role: 'Director Operations', phone: 'tel:+8801774873972', phoneLabel: '+880 1774-873972' },
  { img: '/assets/team/Sharmin Akter.jpeg',      name: 'Sharmin Akter',       role: 'Director Sales',       phone: 'tel:01913715734',    phoneLabel: '01913-715734' },
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

  return (
    <section className="bg-brand-light min-h-[100dvh] flex items-center" id="contact">
      <div className="w-full px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 py-10 md:py-14 lg:py-16 xl:py-20 fade-up">

        {/* Section header */}
        <div className="mb-8 md:mb-10 xl:mb-12 2xl:mb-14">
          <span className="text-accent uppercase tracking-widest text-xs xl:text-sm 2xl:text-base font-bold">Let&rsquo;s Connect</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-brand-black mt-2 leading-tight">
            How Can We Help You?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 xl:gap-10 2xl:gap-14 items-stretch">

          {/* ── For Clients ── */}
          <div className="bg-white border border-brand-black/5 shadow-xl rounded-sm flex flex-col p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
            <div className="mb-6 xl:mb-8 2xl:mb-10">
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light text-brand-black mb-2 xl:mb-3">
                For Clients
              </h3>
              <p className="text-brand-black/60 font-light text-xs md:text-sm xl:text-base 2xl:text-lg leading-relaxed">
                Explore premium living and smart investment opportunities with Kaz Properties.
              </p>
            </div>

            {/* Team cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4 2xl:gap-5 mb-6 xl:mb-8 2xl:mb-10">
              {team.map(p => (
                <div key={p.name} className="flex items-center gap-3 xl:gap-4 2xl:gap-5 border-l-4 border-accent pl-4 xl:pl-5 bg-brand-light py-3 xl:py-4 2xl:py-5 pr-3 xl:pr-4 rounded-r-sm">
                  <img src={p.img} alt={p.name} className="w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 object-cover rounded-full shadow-md shrink-0" />
                  <div>
                    <div className="text-sm md:text-sm xl:text-base 2xl:text-lg font-bold text-brand-black leading-tight">{p.name}</div>
                    <div className="text-xs xl:text-sm 2xl:text-base uppercase tracking-wider text-accent font-medium mt-0.5">{p.role}</div>
                    <a href={p.phone} className="text-xs xl:text-sm 2xl:text-base text-brand-black/50 hover:text-accent transition-colors mt-1 block">{p.phoneLabel}</a>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact buttons */}
            <div className="grid grid-cols-2 gap-3 xl:gap-4 mt-auto">
              {[
                { href: 'tel:+8801774873972',                            icon: <Phone size={15} />,  label: '+880 1774-873972', sub: 'Director Operations' },
                { href: 'tel:01913715734',                               icon: <Phone size={15} />,  label: '01913-715734',     sub: 'Director Sales' },
                { href: 'https://wa.me/8801774873972', target: '_blank', icon: <WhatsAppIcon />,     label: 'WhatsApp',         sub: 'Chat with us' },
                { href: 'mailto:hellokazpnd@gmail.com',            icon: <Mail size={15} />,   label: 'Email Us',         sub: 'Get in touch' },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={(item as { target?: string }).target}
                  rel={(item as { target?: string }).target ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 xl:gap-3 text-brand-black hover:text-accent transition-colors border border-brand-black/8 hover:border-accent/40 p-3 xl:p-4 2xl:p-5 rounded-sm group"
                >
                  <span className="text-accent shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <div className="min-w-0">
                    <div className="font-semibold text-xs xl:text-sm 2xl:text-base truncate">{item.label}</div>
                    <div className="text-[10px] xl:text-xs 2xl:text-sm uppercase tracking-wide text-brand-black/40 mt-0.5">{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── For Landowners (working form) ── */}
          <div className="bg-brand-black text-white rounded-sm shadow-2xl relative overflow-hidden flex flex-col p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-80 h-80 2xl:w-96 2xl:h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 2xl:w-72 2xl:h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 mb-6 xl:mb-8 2xl:mb-10">
              <p className="text-accent uppercase tracking-widest text-xs xl:text-sm 2xl:text-base font-bold mb-2">Partner With Us</p>
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light text-white mb-2 xl:mb-3">
                For Landowners
              </h3>
              <p className="text-white/60 font-light text-xs md:text-sm xl:text-base 2xl:text-lg leading-relaxed">
                Maximize the potential of your land with Kaz Properties. We offer transparent partnership agreements and guaranteed returns.
              </p>
            </div>

            {/* Success state */}
            {status === 'success' ? (
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-4 text-center py-8">
                <CheckCircle size={52} className="text-accent" strokeWidth={1.5} />
                <h4 className="text-white text-xl xl:text-2xl font-light">Message Sent!</h4>
                <p className="text-white/60 text-sm xl:text-base font-light max-w-xs">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 border border-white/20 hover:border-accent text-white/70 hover:text-accent transition-colors px-6 py-2 rounded-sm text-xs uppercase tracking-widest"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 xl:gap-4 2xl:gap-5 relative z-10 flex-1" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs xl:text-sm font-medium tracking-wide uppercase text-white/40">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Your name"
                      required
                      className="bg-white/5 border border-white/15 focus:border-accent outline-none text-white placeholder-white/30 px-3 xl:px-4 py-2 xl:py-3 2xl:py-3.5 rounded-sm transition-colors text-xs xl:text-sm 2xl:text-base"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs xl:text-sm font-medium tracking-wide uppercase text-white/40">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      placeholder="+880..."
                      className="bg-white/5 border border-white/15 focus:border-accent outline-none text-white placeholder-white/30 px-3 xl:px-4 py-2 xl:py-3 2xl:py-3.5 rounded-sm transition-colors text-xs xl:text-sm 2xl:text-base"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs xl:text-sm font-medium tracking-wide uppercase text-white/40">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="your@email.com"
                    className="bg-white/5 border border-white/15 focus:border-accent outline-none text-white placeholder-white/30 px-3 xl:px-4 py-2 xl:py-3 2xl:py-3.5 rounded-sm transition-colors text-xs xl:text-sm 2xl:text-base"
                  />
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                  <label className="text-xs xl:text-sm font-medium tracking-wide uppercase text-white/40">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Tell us about your land..."
                    required
                    className="bg-white/5 border border-white/15 focus:border-accent outline-none text-white placeholder-white/30 px-3 xl:px-4 py-2 xl:py-3 rounded-sm transition-colors resize-none text-xs xl:text-sm 2xl:text-base flex-1"
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-sm px-3 py-2 text-xs xl:text-sm">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-accent hover:bg-white text-white hover:text-brand-black disabled:opacity-60 disabled:cursor-not-allowed transition-colors py-3 xl:py-4 2xl:py-5 uppercase tracking-widest text-xs xl:text-sm 2xl:text-base font-bold w-full rounded-sm mt-1 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
