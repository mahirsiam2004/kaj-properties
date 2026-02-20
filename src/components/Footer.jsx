import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@300;400;500;600&display=swap');

        .kaj-footer {
          background: #1e1814;
          color: rgba(255,255,255,0.65);
          font-family: 'Jost', sans-serif;
          padding: 80px 0 0;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
        }

        .footer-brand .brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 4px;
          text-transform: uppercase;
          line-height: 1;
        }

        .footer-brand .brand-sub {
          font-size: 9px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #a07167;
          margin-top: 5px;
          display: block;
        }

        .footer-brand p {
          font-size: 13px;
          line-height: 1.8;
          margin-top: 24px;
          color: rgba(255,255,255,0.45);
          max-width: 240px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
          margin-top: 28px;
        }

        .footer-social a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 13px;
          transition: all 0.3s;
        }

        .footer-social a:hover {
          border-color: #a07167;
          color: #e7d3cb;
          background: rgba(160,113,103,0.15);
        }

        .footer-col h6 {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #a07167;
          margin-bottom: 24px;
        }

        .footer-col a {
          display: block;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-size: 13px;
          margin-bottom: 12px;
          transition: color 0.3s;
          letter-spacing: 0.3px;
        }

        .footer-col a:hover {
          color: #e7d3cb;
        }

        .footer-contact-item {
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
        }

        .footer-contact-item span:first-child {
          color: #a07167;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 24px 60px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-bottom p {
          font-size: 12px;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.5px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color 0.3s;
        }

        .footer-bottom-links a:hover {
          color: #a07167;
        }

        @media (max-width: 900px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            padding: 0 30px 50px;
            gap: 40px;
          }
          .footer-bottom {
            padding: 24px 30px;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }

        @media (max-width: 560px) {
          .footer-inner { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="kaj-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="brand-name">KAJ</div>
            <span className="brand-sub">Properties & Developers</span>
            <p>Building dreams into reality, one home at a time. Affordable luxury near Jahangirnagar University.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">in</a>
              <a href="#" aria-label="WhatsApp">w</a>
            </div>
          </div>

          <div className="footer-col">
            <h6>Navigation</h6>
            <NavLink to="/">Properties</NavLink>
            <NavLink to="/buying">Buying</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>

          <div className="footer-col">
            <h6>Company</h6>
            <a href="#">About Us</a>
            <a href="#">Our Projects</a>
            <a href="#">Testimonials</a>
            <a href="#">Join Our Team</a>
          </div>

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

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Kaj Properties & Developers. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;