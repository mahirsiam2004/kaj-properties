'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from './logo/Logo';
import { Search, Menu, X, LayoutGrid } from 'lucide-react';

function buildSectionIndex(hasNews: boolean) {
  return {
    '#home': 0,
    ...(hasNews ? { '#news': 1 } : {}),
    '#about':        hasNews ? 2 : 1,
    '#featured':     hasNews ? 3 : 2,
    '#property':     hasNews ? 4 : 3,
    '#showcase':     hasNews ? 5 : 4,
    '#location':     hasNews ? 6 : 5,
    '#testimonials': hasNews ? 7 : 6,
    '#contact':      hasNews ? 8 : 7,
    '#footer':       hasNews ? 9 : 8,
  } as Record<string, number>;
}

function buildMenuLinks(hasNews: boolean) {
  const links = [
    { hash: '#home',     label: 'Home' },
    { hash: '#about',    label: 'About' },
  ];
  if (hasNews) links.push({ hash: '#news', label: 'News' });
  links.push(
    { hash: '#featured',     label: 'Featured Projects' },
    { hash: '#property',     label: 'Projects' },
    { hash: '#location',     label: 'Location' },
    { hash: '#testimonials', label: 'Testimonials' },
    { hash: '#contact',      label: 'Contact' },
  );
  return links;
}

function buildSearchable(hasNews: boolean) {
  const s = [
    { label: 'Home',              hash: '#home',         index: 0 },
    { label: 'About Us',          hash: '#about',        index: 1 },
  ];
  if (hasNews) s.push({ label: 'Latest News', hash: '#news', index: 2 });
  s.push(
    { label: 'Featured Projects', hash: '#featured',     index: hasNews ? 3 : 2 },
    { label: 'Projects',          hash: '#property',     index: hasNews ? 4 : 3 },
    { label: 'Video Tour',        hash: '#showcase',     index: hasNews ? 5 : 4 },
    { label: 'Location',          hash: '#location',     index: hasNews ? 6 : 5 },
    { label: 'Testimonials',      hash: '#testimonials', index: hasNews ? 7 : 6 },
    { label: 'Contact',           hash: '#contact',      index: hasNews ? 8 : 7 },
  );
  return s;
}

function slideTo(index: number) {
  window.dispatchEvent(new CustomEvent('remoteSlideTo', { detail: { index } }));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasNews, setHasNews] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  // Detail pages have their own internal nav — hide global Navbar there
  const hideNavbar = pathname.startsWith('/projects/') || pathname.startsWith('/management-team');

  useEffect(() => {
    fetch('/api/updates')
      .then(r => r.json())
      .then(d => { if (d.success && d.data.length > 0) setHasNews(true); })
      .catch(() => {});
  }, []);

  const SECTION_INDEX = buildSectionIndex(hasNews);
  const menuLinks = buildMenuLinks(hasNews);
  const searchable = buildSearchable(hasNews);
  const lightIndices = hasNews ? [7, 8, 9] : [6, 7, 8];
  const isLight = lightIndices.includes(activeIndex);

  const filtered = searchQuery
    ? searchable.filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  // Page links (not sections) that are also searchable
  const pageLinks = [
    { label: 'Management Team', href: '/management-team' },
  ];
  const filteredPages = searchQuery
    ? pageLinks.filter(p => p.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (!isHome) {
      router.push(`/${hash}`);
    } else {
      const idx = SECTION_INDEX[hash];
      if (idx !== undefined) slideTo(idx);
    }
    setMenuOpen(false);
    setSearchOpen(false);
  };

  useEffect(() => {
    const checkScroll = () => {
      const attr = document.documentElement.getAttribute('data-scrolled') === 'true';
      setScrolled(attr || window.scrollY > 60);
    };
    const onSwiperChange = (e: Event) => {
      const ce = e as CustomEvent<{ index: number }>;
      setActiveIndex(ce.detail.index);
      setScrolled(ce.detail.index > 0);
    };
    const observer = new MutationObserver(checkScroll);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-scrolled'] });
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('swiperChange', onSwiperChange);
    window.addEventListener('hashchange', checkScroll);
    checkScroll();
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('swiperChange', onSwiperChange);
      window.removeEventListener('hashchange', checkScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  if (hideNavbar) return null;

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 bg-transparent ${scrolled ? 'py-1.5 shadow-sm border-b border-brand-black/5 bg-brand-black/95 backdrop-blur-md' : 'py-3 xl:py-4'}`}>
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 flex justify-between items-center">
          {/* Left */}
          <div className="flex-1 flex justify-start">
            <a href="#featured" onClick={(e) => handleNavClick(e, '#featured')}
              className={`flex items-center gap-2 font-medium tracking-wide transition-colors uppercase text-sm xl:text-base group ${isLight ? 'text-brand-black hover:text-accent' : 'text-white hover:text-accent sm:drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'}`}>
              <LayoutGrid size={16} className={isLight ? 'text-brand-black group-hover:text-accent' : 'text-accent group-hover:scale-110 transition-transform'} />
              <span>Projects</span>
            </a>
          </div>
          {/* Center */}
          <div className="flex-shrink-0">
            <a
              href="/"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  slideTo(0);
                }
              }}
            >
              <Logo light={!isLight} />
            </a>
          </div>
          {/* Right */}
          <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6 xl:gap-8">
            <button
              className={`transition-all p-2 rounded-full ${searchOpen ? 'bg-accent text-white scale-110' : 'hover:text-accent'} ${isLight ? 'text-brand-black' : 'text-white sm:drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'}`}
              aria-label="Search" onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(''); }}>
              {searchOpen ? <X size={22} className="xl:w-6 xl:h-6" /> : <Search size={22} className="xl:w-6 xl:h-6" />}
            </button>
            <button
              className={`flex items-center gap-2 transition-all font-semibold text-sm xl:text-base px-5 xl:px-6 py-2 xl:py-2.5 rounded-full shadow-lg hover:scale-105 active:scale-95 ${isLight ? 'bg-brand-black text-white hover:bg-accent' : 'bg-accent text-white hover:bg-white hover:text-brand-black'}`}
              onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <span className="hidden sm:block">Menu</span>
              <Menu size={20} className="xl:w-6 xl:h-6" />
            </button>
          </div>
        </div>

        {/* Search dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${searchOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="bg-brand-black/95 backdrop-blur-xl border-t border-b border-white/10 p-6">
            <div className="container mx-auto px-6 lg:px-12 relative max-w-3xl">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sections — e.g. 'Projects', 'Location', 'Contact'..."
                  className="w-full bg-brand-black/50 border border-white/20 rounded-full py-3 pl-12 pr-12 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
                  autoFocus />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
                    <X size={18} />
                  </button>
                )}
              </div>
              {(filtered.length > 0 || filteredPages.length > 0) && (
                <div className="mt-4 bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md">
                  {filtered.map((s) => (
                    <button key={s.index} onClick={() => { setSearchOpen(false); setSearchQuery(''); slideTo(s.index); }}
                      className="w-full text-left px-6 py-3 hover:bg-accent hover:text-white transition-colors text-white/80 flex items-center justify-between group border-b border-white/5 last:border-0">
                      <span>{s.label}</span>
                      <LayoutGrid size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                  {filteredPages.map((p) => (
                    <Link key={p.href} href={p.href} onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                      className="w-full text-left px-6 py-3 hover:bg-accent hover:text-white transition-colors text-white/80 flex items-center justify-between group border-b border-white/5 last:border-0">
                      <span>{p.label}</span>
                      <LayoutGrid size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
              {searchQuery && filtered.length === 0 && filteredPages.length === 0 && (
                <p className="mt-4 text-white/40 text-sm text-center py-3">No sections found for &quot;{searchQuery}&quot;</p>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div className={`fixed inset-0 z-[110] bg-brand-black/98 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 origin-top ${menuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <button className="absolute top-8 right-8 lg:right-16 text-white hover:text-accent transition-colors p-2 border border-white/10 rounded-full"
          onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <X size={28} />
        </button>
        <div className="absolute top-8 left-8 lg:left-16">
          <a href="/" onClick={(e) => { if (isHome) { e.preventDefault(); slideTo(0); } setMenuOpen(false); }}>
            <Logo />
          </a>
        </div>
        <ul className="flex flex-col items-center gap-6 lg:gap-8 xl:gap-10 text-2xl lg:text-4xl xl:text-5xl capitalize font-light tracking-wide text-white">
          {menuLinks.map(({ hash, label }) => (
            <li key={hash} className="overflow-hidden">
              <a href={hash} onClick={(e) => handleNavClick(e, hash)}
                className="hover:text-accent transition-colors duration-300 inline-block transform hover:translate-x-2">
                {label}
              </a>
            </li>
          ))}
          {/* Real page links */}
          <li className="overflow-hidden">
            <Link
              href="/management-team"
              onClick={() => setMenuOpen(false)}
              className="hover:text-accent transition-colors duration-300 inline-block transform hover:translate-x-2"
            >
              Management Team
            </Link>
          </li>
        </ul>
        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}
          className="mt-12 xl:mt-16 px-8 xl:px-10 py-3 xl:py-4 bg-accent text-white font-medium tracking-wide uppercase text-sm xl:text-base hover:bg-white hover:text-brand-black transition-colors rounded-sm">
          Get In Touch
        </a>
      </div>
    </>
  );
}
