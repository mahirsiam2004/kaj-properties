'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from './logo/Logo';
import { Search, Menu, X, LayoutGrid, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

function scrollToSection(hash: string) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

type MenuLink = { hash: string; label: string; href?: never } | { href: string; label: string; hash?: never };

function buildMenuLinks(): MenuLink[] {
  return [
    { hash: '#home', label: 'Home' },
    { hash: '#about', label: 'About' },
    { hash: '#featured', label: 'Projects' },
    { hash: '#showcase', label: 'Virtual Tour' },
    { hash: '#location', label: 'Location' },
    { hash: '#news', label: 'Latest News' },
    { hash: '#testimonials', label: 'Testimonials' },
    { href: '/management-team', label: 'Management Team' },
    { href: '/mission-vision', label: 'Mission & Vision' },
    { href: '/landowners', label: 'Landowners' },
    { hash: '#contact', label: 'Contact' },
  ];
}

function buildSearchable() {
  return [
    { label: 'Home', hash: '#home' },
    { label: 'About Us', hash: '#about' },
    { label: 'Featured Projects', hash: '#featured' },
    { label: 'Virtual Tour', hash: '#showcase' },
    { label: 'Location', hash: '#location' },
    { label: 'Latest News', hash: '#news' },
    { label: 'Testimonials', hash: '#testimonials' },
    { label: 'Contact', hash: '#contact' },
  ];
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const { theme, toggleTheme } = useTheme();

  const hideNavbar = pathname.startsWith('/projects/') || pathname.startsWith('/management-team') || pathname.startsWith('/mission-vision') || pathname.startsWith('/landowners') || pathname.startsWith('/admin');

  const menuLinks = buildMenuLinks();
  const searchable = buildSearchable();

  const filtered = searchQuery
    ? searchable.filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const pageLinks = [
    { label: 'Management Team', href: '/management-team' },
    { label: 'Mission & Vision', href: '/mission-vision' },
    { label: 'Landowners', href: '/landowners' },
  ];
  const filteredPages = searchQuery
    ? pageLinks.filter(p => p.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (!isHome) {
      router.push(`/${hash}`);
    } else {
      scrollToSection(hash);
    }
    setMenuOpen(false);
    setSearchOpen(false);
  };

  useEffect(() => {
    const checkScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  if (hideNavbar) return null;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
        scrolled
          ? 'py-2 shadow-md bg-white/95 dark:bg-brand-black/95 backdrop-blur-lg border-b border-black/5 dark:border-white/5'
          : 'py-3 bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 flex justify-between items-center">
          {/* Left - Projects */}
          <div className="flex-1 flex justify-start">
            <a
              href="#featured"
              onClick={(e) => handleNavClick(e, '#featured')}
              className={`flex items-center gap-2 font-medium tracking-wide transition-colors uppercase text-xs sm:text-sm group ${
                scrolled
                  ? 'text-brand-black dark:text-white hover:text-accent'
                  : 'text-white hover:text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'
              }`}
            >
              <LayoutGrid size={14} className="text-accent group-hover:scale-110 transition-transform" />
              <span>Projects</span>
            </a>
          </div>

          {/* Center - Logo */}
          <div className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 xl:mx-16">
            <a
              href="/"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <Logo />
            </a>
          </div>

          {/* Right - Theme Toggle + Search + Menu */}
          <div className="flex-1 flex justify-end items-center gap-2 sm:gap-3 lg:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`transition-all p-2 rounded-full hover:scale-110 ${
                scrolled
                  ? 'text-brand-black dark:text-white hover:text-accent'
                  : 'text-white hover:text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Search */}
            <button
              className={`transition-all p-2 rounded-full ${
                searchOpen
                  ? 'bg-accent text-white scale-110'
                  : scrolled
                    ? 'text-brand-black dark:text-white hover:text-accent'
                    : 'text-white hover:text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'
              }`}
              aria-label="Search"
              onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(''); }}
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>

            {/* Menu Button */}
            <button
              className={`flex items-center gap-1.5 transition-all font-semibold text-xs sm:text-sm px-3 sm:px-4 lg:px-5 py-1.5 lg:py-2 rounded-full shadow-lg hover:scale-105 active:scale-95 ${
                scrolled
                  ? 'bg-brand-black dark:bg-accent text-white hover:bg-accent dark:hover:bg-white dark:hover:text-brand-black'
                  : 'bg-accent text-white hover:bg-white hover:text-brand-black'
              }`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="hidden sm:block">Menu</span>
              <Menu size={16} />
            </button>
          </div>
        </div>

        {/* Search dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${searchOpen ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="bg-white/95 dark:bg-brand-black/95 backdrop-blur-xl border-t border-b border-black/5 dark:border-white/10 p-4 sm:p-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative max-w-3xl">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 dark:text-white/50" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sections..."
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/20 rounded-full py-2.5 pl-11 pr-10 text-brand-black dark:text-white placeholder-black/40 dark:text-white/40 focus:outline-none focus:border-accent transition-colors text-sm"
                  autoFocus
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/50 hover:text-brand-black dark:hover:text-white">
                    <X size={16} />
                  </button>
                )}
              </div>
              {(filtered.length > 0 || filteredPages.length > 0) && (
                <div className="mt-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl overflow-hidden backdrop-blur-md">
                  {filtered.map((s) => (
                    <button
                      key={s.hash}
                      onClick={() => { setSearchOpen(false); setSearchQuery(''); scrollToSection(s.hash); }}
                      className="w-full text-left px-5 py-2.5 hover:bg-accent hover:text-white transition-colors text-brand-black dark:text-white/80 flex items-center justify-between group border-b border-black/5 dark:border-white/5 last:border-0 text-sm"
                    >
                      <span>{s.label}</span>
                      <LayoutGrid size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                  {filteredPages.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                      className="w-full text-left px-5 py-2.5 hover:bg-accent hover:text-white transition-colors text-brand-black dark:text-white/80 flex items-center justify-between group border-b border-black/5 dark:border-white/5 last:border-0 text-sm"
                    >
                      <span>{p.label}</span>
                      <LayoutGrid size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
              {searchQuery && filtered.length === 0 && filteredPages.length === 0 && (
                <p className="mt-3 text-black/40 dark:text-white/40 text-sm text-center py-3">No results found</p>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div className={`fixed inset-0 z-[110] bg-brand-black/98 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 origin-top ${menuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <button
          className="absolute top-6 right-6 lg:right-12 text-white hover:text-accent transition-colors p-2 border border-white/10 rounded-full"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <div className="absolute top-6 left-6 lg:left-12">
          <a href="/" onClick={() => { if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}>
            <Logo />
          </a>
        </div>
        <ul className="flex flex-col items-center gap-4 lg:gap-5 text-xl lg:text-2xl xl:text-3xl capitalize font-light tracking-wide text-white">
          {menuLinks.map((link) => (
            <li key={link.label}>
              {'href' in link && link.href ? (
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-accent transition-colors duration-300 inline-block transform hover:translate-x-2 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={('hash' in link ? link.hash : '#') || '#'}
                  onClick={(e) => { if ('hash' in link && link.hash) handleNavClick(e, link.hash); }}
                  className="hover:text-accent transition-colors duration-300 inline-block transform hover:translate-x-2 whitespace-nowrap"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="mt-10 xl:mt-14 px-8 xl:px-10 py-2.5 xl:py-3 bg-accent text-white font-medium tracking-wide uppercase text-sm hover:bg-white hover:text-brand-black transition-colors rounded-sm"
        >
          Get In Touch
        </a>
      </div>
    </>
  );
}
