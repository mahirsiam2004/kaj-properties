const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

/* Proper YouTube play-button logo */
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
);

const socials = [
  { Icon: FacebookIcon, href: 'https://www.facebook.com/share/19RCkfoS3k/',                         label: 'Facebook' },
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/company/kaz-properties-and-developers/',    label: 'LinkedIn' },
  { Icon: YoutubeIcon,  href: 'https://youtube.com/@abimperio1?si=UdZtXcD4qGanNTkN',               label: 'YouTube'  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#FAF7F5] dark:bg-[#0d0d0d] text-[#000000] dark:text-white overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      {/* Accent line top */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#BE9F98] to-transparent" />

      {/* Main content — generous top/bottom padding */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36 pt-12 md:pt-16 pb-8 md:pb-10">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 pb-10 md:pb-12 border-b border-black/10 dark:border-white/10">

          {/* Logo + brand */}
          <div className="flex flex-col items-start gap-3 lg:max-w-xs xl:max-w-sm">
            <img src="/logo1.png" alt="Kaz Properties" className="h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain" />
            <p className="text-[11px] md:text-xs font-light leading-relaxed text-black/50 dark:text-white/50">
              Creating ideal living environments where people can thrive and flourish — built on trust, quality, and vision.
            </p>
            <div className="flex gap-2 mt-1">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-7 h-7 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:bg-[#BE9F98] dark:hover:bg-[#BE9F98] hover:text-white transition-colors duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 xl:gap-14 flex-1 lg:justify-end">
            <div>
              <h6 className="text-[11px] font-semibold uppercase tracking-widest text-black dark:text-white mb-3">Contact</h6>
              <div className="space-y-1.5 text-[11px] font-light text-black/50 dark:text-white/50 leading-relaxed">
                <p className="font-medium text-black/70 dark:text-white/70">Corporate Office:</p>
                <p>Bachelor Gate, Ambagan Road,<br />Jahangirnagar University,<br />Savar, Dhaka, Bangladesh</p>
                <div className="pt-1 space-y-0.5">
                  <p className="font-semibold text-black dark:text-white">+880 1774-873972</p>
                  <p className="text-black/60 dark:text-white/60">siddiqueab13@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <h6 className="text-[11px] font-semibold uppercase tracking-widest text-black dark:text-white mb-3">Support</h6>
              <div className="flex flex-col space-y-1.5 text-[11px] font-light text-black/50 dark:text-white/50">
                {['Privacy Policy', 'Terms & Condition', 'Support Center', 'FAQ'].map(link => (
                  <a key={link} href="#" className="hover:text-[#BE9F98] transition-colors w-fit">{link}</a>
                ))}
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h6 className="text-[11px] font-semibold uppercase tracking-widest text-black dark:text-white mb-3">Projects</h6>
              <div className="flex flex-col space-y-1.5 text-[11px] font-light text-black/50 dark:text-white/50">
                {['Chayabithi', 'Upcoming Projects', 'Land Development', 'Commercial'].map(p => (
                  <a key={p} href="#featured" className="hover:text-[#BE9F98] transition-colors w-fit">{p}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row — good breathing room above copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 pt-6 md:pt-8 text-[10px] md:text-[11px] font-light text-black/40 dark:text-white/40">
          <p>&copy; {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.</p>
          <p>
            Developed by{' '}
            <a href="https://gentrixit.net/" target="_blank" rel="noopener noreferrer"
              className="font-medium text-black/60 dark:text-white/60 hover:text-[#BE9F98] transition-colors underline underline-offset-2 decoration-black/15 dark:decoration-white/15 hover:decoration-[#BE9F98]">
              Gentrix IT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
