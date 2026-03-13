import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => (
    <section className="cta-section" id="contact">
        <div className="cta-bg-orb cta-orb--1" />
        <div className="cta-bg-orb cta-orb--2" />
        <div className="container">
            <div className="cta-inner">
                <div className="cta-text">
                    <p className="section-eyebrow fade-up">Get In Touch</p>
                    <h2 className="fade-up">Ready to Own<br />Your Dream Home?</h2>
                    <p className="fade-up">
                        Join our waitlist for upcoming projects and be the first to secure your share.
                        Our team is ready to guide you every step of the way.
                    </p>
                    <div className="cta-contacts fade-up">
                        <a href="tel:+8801774873972" className="cta-contact-item">
                            <span className="cta-contact-icon"><Phone size={18} strokeWidth={1.5} /></span>
                            <div>
                                <p className="cta-contact-label">Call Us</p>
                                <p className="cta-contact-val">+880 1774-873972</p>
                            </div>
                        </a>
                        <a href="mailto:kazdevelopersteam@gmail.com" className="cta-contact-item">
                            <span className="cta-contact-icon"><Mail size={18} strokeWidth={1.5} /></span>
                            <div>
                                <p className="cta-contact-label">Email Us</p>
                                <p className="cta-contact-val">kazdevelopersteam@gmail.com</p>
                            </div>
                        </a>
                        <div className="cta-contact-item">
                            <span className="cta-contact-icon"><MapPin size={18} strokeWidth={1.5} /></span>
                            <div>
                                <p className="cta-contact-label">Visit Us</p>
                                <p className="cta-contact-val">Bachelor Gate, Ambagan Road, JU</p>
                            </div>
                        </div>
                    </div>
                    <a href="tel:+8801774873972" className="btn-white fade-up">Call Us Now</a>
                </div>

                <div className="cta-form-card fade-up">
                    <h3>Send Us a Message</h3>
                    <p>We'll get back to you within 24 hours.</p>
                    <div className="cta-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" placeholder="+880..." />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="your@email.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="3" placeholder="I'm interested in..." />
                        </div>
                        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default CTASection;