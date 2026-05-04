import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { Logo } from './logo/Logo';
import { Search, Menu, X, LayoutGrid } from 'lucide-react';

// Section-to-Swiper-index map (must match Home.jsx sectionMap)
const SECTION_INDEX = {
    '#home': 0,
    '#about': 1,
    '#property': 2,
    '#showcase': 3,
    '#features': 4,
    '#location': 5,
    '#testimonials': 6,
    '#contact': 7,
    '#footer': 8,
};

const menuLinks = [
    { hash: '#home',         label: 'Home' },
    { hash: '#about',        label: 'About' },
    { hash: '#property',     label: 'Projects' },
    { hash: '#features',     label: 'Features' },
    { hash: '#location',     label: 'Location' },
    { hash: '#testimonials', label: 'Testimonials' },
    { hash: '#contact',      label: 'Contact' },
];

const searchableSections = [
    { label: 'Home',         hash: '#home',         index: 0 },
    { label: 'About Us',     hash: '#about',        index: 1 },
    { label: 'Projects',     hash: '#property',     index: 2 },
    { label: 'Video Tour',   hash: '#showcase',     index: 3 },
    { label: 'Features',     hash: '#features',     index: 4 },
    { label: 'Location',     hash: '#location',     index: 5 },
    { label: 'Testimonials', hash: '#testimonials', index: 6 },
    { label: 'Contact',      hash: '#contact',      index: 7 },
];

function slideTo(index) {
    window.dispatchEvent(new CustomEvent('remoteSlideTo', { detail: { index } }));
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    // Light bg sections: Location(5), Testimonials(6), CTA(7), Footer(8)
    // Dark bg sections: Hero(0), About(1), Property(2), Showcase(3), Features(4)
    const isLightSection = [5, 6, 7, 8].includes(activeIndex);

    const filteredSections = searchQuery
        ? searchableSections.filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    const handleNavClick = (e, hash) => {
        e.preventDefault();
        const idx = SECTION_INDEX[hash];
        if (idx !== undefined) slideTo(idx);
        setMenuOpen(false);
        setSearchOpen(false);
    };

    const handleSearchSelect = (hash, index) => {
        setSearchOpen(false);
        setSearchQuery('');
        slideTo(index);
    };

    useEffect(() => {
        const checkScroll = () => {
            const isScrolledAttr = document.documentElement.getAttribute('data-scrolled') === 'true';
            const isWindowScrolled = window.scrollY > 60;
            const isHashNotHome = window.location.hash !== '' && window.location.hash !== '#home';
            setScrolled(isScrolledAttr || isWindowScrolled || isHashNotHome);
        };

        const onSwiperChange = (e) => {
            setActiveIndex(e.detail.index);
            setScrolled(e.detail.index > 0);
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

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 bg-transparent ${scrolled ? 'py-1.5 shadow-sm border-b border-brand-black/5 bg-brand-black/95 backdrop-blur-md' : 'py-3'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

                    {/* Left: Projects link */}
                    <div className="flex-1 flex justify-start">
                        <a
                            href="#property"
                            onClick={(e) => handleNavClick(e, '#property')}
                            className={`flex items-center gap-2 font-medium tracking-wide transition-colors uppercase text-sm group ${isLightSection ? 'text-brand-black hover:text-accent' : 'text-white hover:text-accent sm:drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'}`}
                        >
                            <LayoutGrid size={16} className={isLightSection ? 'text-brand-black group-hover:text-accent' : 'text-accent group-hover:scale-110 transition-transform'} />
                            <span>Projects</span>
                        </a>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            className="flex items-center"
                            onClick={(e) => { e.preventDefault(); slideTo(0); }}
                        >
                            <Logo light={!isLightSection} />
                        </a>
                    </div>

                    {/* Right: Search + Menu */}
                    <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6">
                        <button
                            className={`transition-all p-2 rounded-full ${searchOpen ? 'bg-accent text-white scale-110' : 'hover:text-accent transition-colors'} ${isLightSection ? 'text-brand-black' : 'text-white sm:drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'}`}
                            aria-label="Search"
                            onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(''); }}
                        >
                            {searchOpen ? <X size={22} /> : <Search size={22} />}
                        </button>
                        <button
                            className={`flex items-center gap-2 transition-all font-semibold text-sm px-5 py-2 rounded-full shadow-lg hover:scale-105 active:scale-95 ${isLightSection ? 'bg-brand-black text-white hover:bg-accent' : 'bg-accent text-white hover:bg-white hover:text-brand-black'}`}
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <span className="hidden sm:block">Menu</span>
                            <Menu size={20} />
                        </button>
                    </div>
                </div>

                {/* Search Bar Dropdown */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${searchOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                    <div className="bg-brand-black/95 backdrop-blur-xl border-t border-b border-white/10 p-6">
                        <div className="container mx-auto px-6 lg:px-12 relative max-w-3xl">
                            <div className="relative">
                                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search sections — e.g. 'Projects', 'Location', 'Contact'..."
                                    className="w-full bg-brand-black/50 border border-white/20 rounded-full py-3 pl-12 pr-12 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
                                    autoFocus
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                                    >
                                        <X size={18} />
                                    </button>
                                )}
                            </div>

                            {/* Search Results */}
                            {filteredSections.length > 0 && (
                                <div className="mt-4 bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md">
                                    {filteredSections.map((section) => (
                                        <button
                                            key={section.index}
                                            onClick={() => handleSearchSelect(section.hash, section.index)}
                                            className="w-full text-left px-6 py-3 hover:bg-accent hover:text-white transition-colors text-white/80 flex items-center justify-between group border-b border-white/5 last:border-0"
                                        >
                                            <span>{section.label}</span>
                                            <LayoutGrid size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {searchQuery && filteredSections.length === 0 && (
                                <p className="mt-4 text-white/40 text-sm text-center py-3">No sections found for "{searchQuery}"</p>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Full-screen overlay menu */}
            <div className={`fixed inset-0 z-[110] bg-brand-black/98 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 origin-top ${menuOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                <button
                    className="absolute top-8 right-8 lg:right-16 text-white hover:text-accent transition-colors p-2 border border-white/10 rounded-full"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <X size={28} />
                </button>

                <div className="absolute top-8 left-8 lg:left-16">
                    <Logo />
                </div>

                <ul className="flex flex-col items-center gap-6 lg:gap-8 text-2xl lg:text-4xl capitalize font-light tracking-wide text-white">
                    {menuLinks.map(({ hash, label }) => (
                        <li key={hash} className="overflow-hidden">
                            <a
                                href={hash}
                                onClick={(e) => handleNavClick(e, hash)}
                                className="hover:text-accent transition-colors duration-300 inline-block transform hover:translate-x-2"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="#contact"
                    className="mt-12 px-8 py-3 bg-accent text-white font-medium tracking-wide uppercase text-sm hover:bg-white hover:text-brand-black transition-colors rounded-sm"
                    onClick={(e) => handleNavClick(e, '#contact')}
                >
                    Get In Touch
                </a>
            </div>
        </>
    );
};

export default Navbar;
