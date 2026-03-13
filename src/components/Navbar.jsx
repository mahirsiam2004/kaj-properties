import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { Logo } from './logo/Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    isActive ? 'active' : '';

  const navLinks = [
    { to: '/', label: 'Properties' },
    { to: '/buying', label: 'Buying' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      {/* ── DESKTOP NAV ── */}
      <nav className={`kaz-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </NavLink>

          <ul className="nav-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={linkClass}>{label}</NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-cta-wrap">
            <a href="/contact" className="nav-cta">Get In Touch</a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}

        <a
          href="/contact"
          className="nav-cta"
          style={{ marginTop: '8px' }}
          onClick={() => setMenuOpen(false)}
        >
          Get In Touch
        </a>
      </div>
    </>
  );
};

export default Navbar;