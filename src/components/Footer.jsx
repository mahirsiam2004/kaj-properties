import React from 'react';
import { NavLink } from 'react-router';
import { Logo } from './logo/Logo';

const Footer = () => (
  <footer className="kaj-footer">
    <div className="footer-inner">
      {/* Brand */}
      <div className="footer-brand">
        <Logo />
        <p>Building dreams into reality, one home at a time. Affordable luxury near Jahangirnagar University.</p>
        <div className="footer-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">in</a>
          <a href="#" aria-label="WhatsApp">w</a>
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
          <span>📍</span>
          <span>Bachelor Gate, Ambagan Road, Jahangirnagar University, Savar, Dhaka</span>
        </div>
        <div className="footer-contact-item">
          <span>📞</span>
          <span>+880 1X-XXXXXXXX</span>
        </div>
        <div className="footer-contact-item">
          <span>✉</span>
          <span>info@kajproperties.com</span>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
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