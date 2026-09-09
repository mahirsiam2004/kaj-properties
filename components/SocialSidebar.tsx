'use client';

import { Mail } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.984-1.407A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.274-1.243l-.306-.182-3.18.898.893-3.096-.2-.318A7.946 7.946 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

function slideToContact(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent('remoteSlideTo', { detail: { index: 7 } }));
}

const socials = [
  { label: 'WhatsApp', href: 'https://wa.me/8801856621076',                              icon: <WhatsAppIcon />,                          onClick: undefined as ((e: React.MouseEvent<HTMLAnchorElement>) => void) | undefined },
  { label: 'Email',    href: '#contact',                                                  icon: <Mail size={18} strokeWidth={1.5} />,       onClick: slideToContact },
  { label: 'Facebook', href: 'https://www.facebook.com/share/19RCkfoS3k/',               icon: <FacebookIcon />,                          onClick: undefined },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/kaz-properties-and-developers/', icon: <LinkedInIcon />,                   onClick: undefined },
];

export default function SocialSidebar() {
  return (
    <>
      {/* ── Desktop vertical sidebar (right edge) ── */}
      <div className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-[50] flex-col items-center bg-brand-black/90 backdrop-blur-sm border-l border-white/10 rounded-l-xl px-3 py-7 gap-5 shadow-xl">
        {socials.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.onClick ? undefined : '_blank'}
            rel={item.onClick ? undefined : 'noopener noreferrer'}
            onClick={item.onClick}
            aria-label={item.label}
            className="w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-accent transition-all duration-300"
          >
            {item.icon}
          </a>
        ))}
        {/* Follow label */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="w-px h-10 bg-accent/40" />
          <span
            className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Follow
          </span>
        </div>
      </div>

      {/* ── Mobile bottom bar ── */}
      <div className="xl:hidden fixed bottom-0 left-0 w-full z-[50] bg-brand-black/95 backdrop-blur-md border-t border-white/10 flex items-center justify-around px-4 py-3 safe-area-pb">
        {socials.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.onClick ? undefined : '_blank'}
            rel={item.onClick ? undefined : 'noopener noreferrer'}
            onClick={item.onClick}
            aria-label={item.label}
            className="flex flex-col items-center gap-1 text-white/50 hover:text-accent active:text-accent transition-colors"
          >
            {item.icon}
            <span className="text-[9px] uppercase tracking-wider">{item.label}</span>
          </a>
        ))}
      </div>
    </>
  );
}
