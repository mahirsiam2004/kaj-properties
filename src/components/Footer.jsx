import React from 'react';
import { NavLink } from 'react-router';
import { Logo } from './logo/Logo';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="kaj-footer">
    <div className="footer-inner">
      {/* Brand */}
      <div className="footer-brand">
        <Logo />
        <p>Building dreams into reality, one home at a time. Affordable luxury near Jahangirnagar University.</p>
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><Facebook size={15} strokeWidth={1.5} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={15} strokeWidth={1.5} /></a>
          <a href="#" aria-label="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
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
          <span>+880 1X-XXXXXXXX</span>
        </div>
        <div className="footer-contact-item">
          <Mail size={15} strokeWidth={1.5} style={{ flexShrink: 0 }} />
          <span>info@kajproperties.com</span>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Kaj Properties &amp; Developers. All rights reserved.</p>
      <div className="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </footer>
);

export default Footer;