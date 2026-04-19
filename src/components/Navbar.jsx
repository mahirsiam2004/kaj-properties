import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { Logo } from './logo/Logo';
import { Search, Menu, X, LayoutGrid } from 'lucide-react';

const menuLinks = [
    { to: '/', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#property', label: 'Projects' },
    { to: '#features', label: 'Features' },
    { to: '#location', label: 'Location' },
    { to: '#businesses', label: 'Businesses' },
    { to: '#contact', label: 'Contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    const isLightSection = [4, 5, 6, 7].includes(activeIndex);

    const searchableSections = [
        { label: 'Home', link: '#home', index: 0 },
        { label: 'About Us', link: '#about', index: 1 },
        { label: 'Projects', link: '#property', index: 2 },
        { label: 'Membership', link: '#membership', index: 3 },
        { label: 'Features', link: '#features', index: 4 },
        { label: 'Location', link: '#location', index: 5 },
        { label: 'Testimonials', link: '#testimonials', index: 6 },
        { label: 'Contact', link: '#contact', index: 7 },
    ];

    const filteredSections = searchQuery 
        ? searchableSections.filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    const handleSearchSelect = (link) => {
        setSearchOpen(false);
        setSearchQuery('');
        window.location.hash = link;
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

        // Watch for attribute changes for super robust detection
        const observer = new MutationObserver(checkScroll);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-scrolled'] });

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('swiperChange', onSwiperChange);
        window.addEventListener('hashchange', checkScroll);

        checkScroll(); // Initial check

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
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent ${scrolled ? 'py-1.5 shadow-sm border-b border-brand-black/5' : 'py-3'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    {/* Left: Projects link */}
                    <div className="flex-1 flex justify-start">
                        <a href="#property" className={`flex items-center gap-2 font-medium tracking-wide transition-colors uppercase text-sm group ${isLightSection ? 'text-brand-black hover:text-accent' : 'text-white hover:text-accent sm:drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'}`}>
                            <LayoutGrid size={16} className={isLightSection ? 'text-brand-black group-hover:text-accent' : 'text-accent group-hover:scale-110 transition-transform'} />
                            <span>Projects</span>
                        </a>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex-shrink-0">
                        <a 
                            href="#home" 
                            className="flex items-center"
                            onClick={(e) => {
                                // Force top section immediately
                                window.dispatchEvent(new CustomEvent('remoteSlideTo', { detail: { index: 0 } }));
                            }}
                        >
                            <Logo light={!isLightSection} />
                        </a>
                    </div>

                    {/* Right: Search + Menu */}
                    <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6">
                        <button 
                            className={`transition-all p-2 rounded-full ${searchOpen ? 'bg-accent text-white scale-110' : 'hover:text-accent transition-colors'} ${isLightSection ? 'text-brand-black' : 'text-white sm:drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]'}`}
                            aria-label="Search"
                            onClick={() => setSearchOpen(!searchOpen)}
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
                                    placeholder="Search by project name, location or type..." 
                                    className="w-full bg-brand-black/50 border border-white/20 rounded-full py-3 pl-12 pr-12 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
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
                                            onClick={() => handleSearchSelect(section.link)}
                                            className="w-full text-left px-6 py-3 hover:bg-accent hover:text-white transition-colors text-white/80 flex items-center justify-between group"
                                        >
                                            <span>{section.label}</span>
                                            <LayoutGrid size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Full-screen mobile/overlay menu */}
            <div className={`fixed inset-0 z-[100] bg-brand-black/98 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 origin-top ${menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}>
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
                    {menuLinks.map(({ to, label }) => (
                        <li key={to} className="overflow-hidden">
                            {to.startsWith('#') ? (
                                <a 
                                    href={to} 
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-accent transition-colors duration-300 inline-block transform hover:translate-x-2"
                                >
                                    {label}
                                </a>
                            ) : (
                                <NavLink 
                                    to={to} 
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-accent transition-colors duration-300 inline-block transform hover:translate-x-2"
                                >
                                    {label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                <a 
                    href="#contact" 
                    className="mt-12 px-8 py-3 bg-accent text-white font-medium tracking-wide uppercase text-sm hover:bg-white hover:text-brand-black transition-colors rounded-sm" 
                    onClick={() => setMenuOpen(false)}
                >
                    Get In Touch
                </a>
            </div>
        </>
    );
};

export default Navbar;
