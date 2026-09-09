// Social icons as inline SVGs (lucide-react v0.575+ removed brand icons)
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterXIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const socials = [
  { Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61561571349588', label: 'Facebook' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: TwitterXIcon, href: '#', label: 'Twitter / X' },
  { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-light text-brand-black min-h-[100dvh] flex flex-col overflow-hidden border-t border-gray-200">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      {/* Accent line top */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-36 py-10 md:py-14 lg:py-20">

        {/* Top row: Logo left | tagline right */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-10 md:mb-14 lg:mb-16 pb-10 md:pb-14 border-b border-brand-black/10">

          {/* Logo + brand block */}
          <div className="flex flex-col items-start gap-4 lg:max-w-xs xl:max-w-sm 2xl:max-w-md">
            <img
              src="/logo1.png"
              alt="Kaz Properties"
              className="h-14 md:h-16 lg:h-20 xl:h-24 2xl:h-28 w-auto object-contain"
            />
            <p className="text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-light leading-relaxed text-brand-black/60">
              Creating ideal living environments where people can thrive and flourish — built on trust, quality, and vision.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 xl:gap-3 mt-1">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 bg-brand-black text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 flex-1 lg:justify-end">
            {/* Contact Info */}
            <div>
              <h6 className="text-xs xl:text-sm 2xl:text-base font-semibold uppercase tracking-widest text-brand-black mb-4 xl:mb-5">
                Contact
              </h6>
              <div className="space-y-2 xl:space-y-3 text-xs xl:text-sm 2xl:text-base font-light text-brand-black/60 leading-relaxed">
                <p className="font-medium text-brand-black/80">Corporate Office:</p>
                <p>Bachelor Gate, Ambagan Road,<br />Jahangirnagar University,<br />Savar, Dhaka, Bangladesh</p>
                <div className="pt-2 space-y-1">
                  <p className="font-semibold text-brand-black">+880 1774-873972</p>
                  <p className="text-brand-black/70">kazdevelopersteam@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div>
              <h6 className="text-xs xl:text-sm 2xl:text-base font-semibold uppercase tracking-widest text-brand-black mb-4 xl:mb-5">
                Support
              </h6>
              <div className="flex flex-col space-y-2 xl:space-y-3 text-xs xl:text-sm 2xl:text-base font-light text-brand-black/60">
                {['Privacy Policy', 'Terms & Condition', 'Support Center', 'FAQ'].map(link => (
                  <a key={link} href="#" className="hover:text-accent transition-colors w-fit">{link}</a>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="col-span-2 md:col-span-1">
              <h6 className="text-xs xl:text-sm 2xl:text-base font-semibold uppercase tracking-widest text-brand-black mb-4 xl:mb-5">
                Projects
              </h6>
              <div className="flex flex-col space-y-2 xl:space-y-3 text-xs xl:text-sm 2xl:text-base font-light text-brand-black/60">
                {['Chayabithi', 'Upcoming Projects', 'Land Development', 'Commercial'].map(p => (
                  <a key={p} href="#property" className="hover:text-accent transition-colors w-fit">{p}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-xs xl:text-sm font-light text-brand-black/50">
          <p>© {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://gentrixit.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-black/70 hover:text-accent transition-colors underline underline-offset-2 decoration-brand-black/20 hover:decoration-accent"
            >
              Gentrix IT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
