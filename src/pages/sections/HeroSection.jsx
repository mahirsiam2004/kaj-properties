import React from 'react';

const HeroSection = () => (
    <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-content">
            <p className="hero-eyebrow">Kaj Properties &amp; Developers</p>
            <h1 className="hero-title">
                Your Dream<br /><em>Home Awaits</em>
            </h1>
            <p className="hero-desc">
                Experience livable luxury near Jahangirnagar University. South-facing apartments
                with modern amenities at unbeatable value.
            </p>
            <div className="hero-ctas">
                <a href="#property" className="btn-primary">View Property</a>
                <a href="#contact" className="btn-outline">Contact Us</a>
            </div>
        </div>
        <div className="hero-badge">
            <p className="hero-badge-label">Save up to</p>
            <p className="hero-badge-value">40%</p>
            <p className="hero-badge-sub">vs. market price</p>
        </div>
    </section>
);

export default HeroSection;
