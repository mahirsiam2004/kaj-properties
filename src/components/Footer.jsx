import React from 'react';
import { NavLink } from 'react-router';
import { Logo } from './logo/Logo';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="kaz-footer">
    <div className="footer-inner">
      {/* Brand */}
      <div className="footer-brand">
        <Logo />
        <p>Building dreams into reality, one home at a time. Affordable luxury in Savar, Uttara.</p>
        <div className="footer-social">
          <a href="https://www.facebook.com/profile.php?id=61561571349588" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={15} strokeWidth={1.5} /></a>
        </div>
      </div>

      {/* Navigation */}
      <div className="footer-col">
        <h6>Navigation</h6>
        <NavLink to="/">Properties</NavLink>
        <NavLink to="/buying">Buying</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>

      {/* Company */}
      <div className="footer-col">
        <h6>Company</h6>
        <a href="#">About Us</a>
        <a href="#">Our Projects</a>
        <a href="#">Testimonials</a>
        <a href="#">Join Our Team</a>
      </div>

      {/* Contact */}
      <div className="footer-col">
        <h6>Contact</h6>
        <div className="footer-contact-item">
          <MapPin size={15} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>Bachelor Gate, Ambagan Road, Jahangirnagar University, Savar, Dhaka</span>
        </div>
        <div className="footer-contact-item">
          <Phone size={15} strokeWidth={1.5} style={{ flexShrink: 0 }} />
          <span>+880 1774-873972</span>
        </div>
        <div className="footer-contact-item">
          <Mail size={15} strokeWidth={1.5} style={{ flexShrink: 0 }} />
          <span>info@kazdevelopersteam@gmail.com</span>
        </div>
      </div>
    </div>

    <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
      <div className="footer-bottom-links" style={{ justifyContent: 'center' }}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Sitemap</a>
      </div>
      <p style={{ margin: 0, opacity: 0.9 }}>© {new Date().getFullYear()} Kaz Properties &amp; Developers. All rights reserved.</p>
      <div style={{ 
        padding: '8px 20px', 
        background: 'rgba(202, 149, 57, 0.1)', 
        border: '1px solid rgba(202, 149, 57, 0.2)', 
        borderRadius: '30px',
        marginTop: '10px'
      }}>
        <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
          Made by <a href="https://gentrixit.net/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none', marginLeft: '5px' }}>Gentrix It</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;