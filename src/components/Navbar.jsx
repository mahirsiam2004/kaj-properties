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

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-brand-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    {/* Left: Projects link */}
                    <div className="flex-1 flex justify-start">
                        <a href="#property" className="flex items-center gap-2 text-white hover:text-accent font-medium tracking-wide transition-colors uppercase text-sm">
                            <LayoutGrid size={16} className="text-accent" />
                            Projects
                        </a>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="flex items-center">
                            <Logo light={true} />
                        </NavLink>
                    </div>

                    {/* Right: Search + Menu */}
                    <div className="flex-1 flex justify-end items-center gap-6">
                        <button className="text-white hover:text-accent transition-colors" aria-label="Search">
                            <Search size={22} />
                        </button>
                        <button
                            className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium text-sm border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <span className="hidden sm:block">Menu</span>
                            <Menu size={20} />
                        </button>
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
