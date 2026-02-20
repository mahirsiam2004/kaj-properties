import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        :root {
          --clay: #a07167;
          --clay-light: #e7d3cb;
          --clay-mid: #be9f98;
          --dark: #2c2622;
          --off-white: #faf7f5;
          --gradient-clay: linear-gradient(90deg, #a07167 0%, #e5bdb0 50%, #a07167 100%);
        }

        .kaj-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          padding: 28px 0;
          transition: all 0.4s ease;
          font-family: 'Jost', sans-serif;
        }

        .kaj-nav.scrolled {
          background: rgba(44, 38, 34, 0.97);
          backdrop-filter: blur(12px);
          padding: 16px 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.15);
        }

        .nav-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-decoration: none;
        }

        .nav-logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 3px;
          text-transform: uppercase;
          line-height: 1;
        }

        .nav-logo-sub {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          color: var(--clay-light);
          letter-spacing: 5px;
          text-transform: uppercase;
          margin-top: 3px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 50px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          text-decoration: none;
          position: relative;
          padding: 4px 0;
          transition: color 0.3s;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gradient-clay);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .nav-links a:hover {
          color: var(--clay-light);
        }

        .nav-cta {
          background: transparent;
          border: 1px solid var(--clay-mid);
          color: #fff !important;
          padding: 0 28px !important;
          height: 44px;
          line-height: 44px;
          border-radius: 30px;
          font-size: 11px !important;
          letter-spacing: 2px !important;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
        }

        .nav-cta:hover {
          background: var(--clay);
          border-color: var(--clay);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 26px;
          height: 2px;
          background: #fff;
          transition: all 0.3s;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: var(--dark);
          z-index: 9998;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 36px;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu a {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          color: #fff;
          text-decoration: none;
          letter-spacing: 4px;
          text-transform: uppercase;
          transition: color 0.3s;
        }

        .mobile-menu a:hover {
          color: var(--clay-light);
        }

        .mobile-close {
          position: absolute;
          top: 30px;
          right: 40px;
          background: none;
          border: none;
          color: #fff;
          font-size: 28px;
          cursor: pointer;
          font-family: 'Jost', sans-serif;
        }

        @media (max-width: 991px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .nav-cta-wrap { display: none; }
        }
      `}</style>

      <nav className={`kaj-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <NavLink to="/" className="nav-logo">
            <span className="nav-logo-main">KAJ</span>
            <span className="nav-logo-sub">Properties & Developers</span>
          </NavLink>

          <ul className="nav-links">
            <li><NavLink to="/">Properties</NavLink></li>
            <li><NavLink to="/buying">Buying</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>

          <div className="nav-cta-wrap">
            <a href="/contact" className="nav-cta">Get In Touch</a>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Properties</NavLink>
        <NavLink to="/buying" onClick={() => setMenuOpen(false)}>Buying</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
        <a href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Get In Touch</a>
      </div>
    </>
  );
};

export default Navbar;