// Social icons as inline SVGs (lucide-react v0.575+ removed brand icons)
const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterXIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
);
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-brand-light text-brand-black h-full min-h-[100dvh] flex flex-col overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="container mx-auto px-4 lg:px-12 relative z-10 w-full py-6 md:py-12 lg:py-16 flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center text-center mb-6 md:mb-10">
          <p className="text-[10px] md:text-xs lg:text-sm font-light max-w-2xl text-brand-black/70">
            Our vision is to create the ideal living environment for all people, where they can thrive and flourish
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:gap-12 lg:gap-20 gap-6 md:gap-8 mb-6 md:mb-10 text-center md:text-left">
          <div>
            <h6 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Contact Info</h6>
            <div className="space-y-2 md:space-y-3 text-[10px] md:text-xs text-brand-black/70">
              <div>
                <p className="font-medium text-brand-black mb-1">Corporate Office:</p>
                <p>Bachelor Gate, Ambagan Road,</p>
                <p>Jahangirnagar University,</p>
                <p>Savar, Dhaka, Bangladesh</p>
              </div>
              <div className="pt-2 md:pt-3">
                <p className="font-semibold">+880 1774-873972</p>
                <p className="font-semibold">kazdevelopersteam@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Support</h6>
            <div className="flex flex-col space-y-1.5 md:space-y-2 text-[10px] md:text-xs text-gray-700">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms &amp; Condition</a>
              <a href="#" className="hover:text-accent transition-colors">Support Center</a>
              <a href="#" className="hover:text-accent transition-colors">FAQ</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4">
          <span className="font-semibold text-xs md:text-sm">Social Media</span>
          <div className="flex gap-2 md:gap-3">
            {[
              { Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61561571349588', label: 'Facebook' },
              { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
              { Icon: TwitterXIcon, href: '#', label: 'Twitter / X' },
              { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
              { Icon: InstagramIcon, href: '#', label: 'Instagram' },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                 className="bg-brand-black text-white p-1.5 md:p-2 rounded-full hover:bg-accent transition-colors" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-brand-black py-3 md:py-4 w-full mt-auto relative z-10">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col items-center gap-1 md:gap-1.5">
            <p className="text-center text-white/80 text-[10px] md:text-xs font-light">
              © {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.
            </p>
            <p className="text-center text-white/50 text-[9px] md:text-[10px] font-light">
              Developed by{' '}
              <a href="https://gentrixit.net/" target="_blank" rel="noopener noreferrer"
                 className="hover:text-accent font-medium transition-colors underline decoration-white/30 hover:decoration-accent underline-offset-2">
                Gentrix IT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
