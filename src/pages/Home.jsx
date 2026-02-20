import React, { useEffect, useRef } from 'react';

export const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: '🛏', label: '3 Bedrooms' },
    { icon: '🛎', label: '1 Guest Room' },
    { icon: '🍽', label: 'Dining & Drawing Room' },
    { icon: '🚿', label: '4 Bathrooms' },
    { icon: '🌿', label: '6 Balconies' },
    { icon: '🚗', label: 'Parking Facility' },
    { icon: '⚡', label: '24hr Generator & Lift' },
    { icon: '📷', label: 'CCTV Surveillance' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        :root {
          --clay: #a07167;
          --clay-light: #e7d3cb;
          --clay-mid: #be9f98;
          --dark: #2c2622;
          --text: #454545;
          --off-white: #faf7f5;
          --gradient-clay: linear-gradient(90deg, #a07167 0%, #e5bdb0 50%, #a07167 100%);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Jost', sans-serif;
          color: var(--text);
          background: var(--off-white);
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--dark);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(160,113,103,0.35) 0%, rgba(44,38,34,0.9) 60%),
            url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80') center/cover no-repeat;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 60px;
          padding-top: 100px;
        }

        .hero-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: var(--clay-light);
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease 0.2s forwards;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 8vw, 110px);
          font-weight: 300;
          color: #fff;
          line-height: 0.9;
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.9s ease 0.4s forwards;
        }

        .hero-title em {
          font-style: italic;
          color: var(--clay-light);
        }

        .hero-desc {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.75);
          max-width: 480px;
          line-height: 1.8;
          margin-bottom: 50px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.9s ease 0.6s forwards;
        }

        .hero-ctas {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.9s ease 0.8s forwards;
        }

        .btn-primary {
          background: var(--gradient-clay);
          color: #fff;
          padding: 0 40px;
          height: 54px;
          line-height: 54px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.3s, transform 0.3s;
        }

        .btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: #fff;
          padding: 0 40px;
          height: 54px;
          line-height: 52px;
          border-radius: 40px;
          border: 1px solid rgba(255,255,255,0.4);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.3s, background 0.3s;
        }

        .btn-outline:hover {
          border-color: var(--clay-light);
          background: rgba(160,113,103,0.15);
        }

        .hero-badge {
          position: absolute;
          bottom: 60px;
          right: 60px;
          background: rgba(44,38,34,0.85);
          border: 1px solid var(--clay-mid);
          border-radius: 16px;
          padding: 24px 32px;
          color: #fff;
          backdrop-filter: blur(10px);
          animation: fadeUp 1s ease 1.2s both;
          opacity: 0;
        }

        .hero-badge-label {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--clay-light);
          margin-bottom: 6px;
        }

        .hero-badge-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 600;
          line-height: 1;
        }

        .hero-badge-sub {
          font-size: 11px;
          color: rgba(255,255,255,0.55);
          margin-top: 4px;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── FADE-UP UTILITY ── */
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── STATS BAR ── */
        .stats-bar {
          background: var(--dark);
          padding: 32px 0;
        }

        .stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-around;
          gap: 20px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
          color: #fff;
        }

        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 600;
          color: var(--clay-light);
          line-height: 1;
        }

        .stat-label {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-top: 6px;
        }

        /* ── ABOUT ── */
        .about-section {
          padding: 130px 0;
          background: var(--off-white);
        }

        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
          display: flex;
          gap: 80px;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .about-left {
          flex: 0 0 380px;
        }

        .section-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--clay);
          margin-bottom: 16px;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 400;
          line-height: 0.9;
          color: var(--clay);
        }

        .section-title strong {
          display: block;
          font-weight: 300;
          color: var(--dark);
        }

        .about-right {
          flex: 1;
          min-width: 280px;
        }

        .about-right p {
          font-size: 16px;
          line-height: 1.9;
          color: #666;
          margin-bottom: 24px;
        }

        .about-right p strong {
          color: var(--dark);
          font-weight: 600;
        }

        .divider-clay {
          width: 60px;
          height: 2px;
          background: var(--gradient-clay);
          margin: 30px 0;
        }

        /* ── PROPERTY CARD ── */
        .property-section {
          padding: 100px 0;
          background: #fff;
        }

        .section-header {
          max-width: 1200px;
          margin: 0 auto 60px;
          padding: 0 60px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .properties-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        .property-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }

        .property-card-img {
          position: relative;
          overflow: hidden;
          background: var(--clay-light);
        }

        .property-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .property-card:hover .property-card-img img {
          transform: scale(1.05);
        }

        .property-sold-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          background: var(--clay);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 30px;
        }

        .property-card-body {
          background: var(--dark);
          padding: 60px 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
        }

        .property-project-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 300;
          line-height: 1;
          color: var(--clay-light);
          margin-bottom: 8px;
        }

        .property-company {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--clay-mid);
          margin-bottom: 32px;
        }

        .property-location {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 30px;
        }

        .property-location-icon {
          color: var(--clay-light);
          font-size: 14px;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .property-location-text {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }

        .property-specs {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          padding: 24px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 32px;
        }

        .property-spec {
          text-align: center;
        }

        .property-spec-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          color: var(--clay-light);
          line-height: 1;
        }

        .property-spec-label {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-top: 4px;
        }

        .property-cta {
          display: inline-block;
          background: transparent;
          border: 1px solid var(--clay-mid);
          color: #fff;
          padding: 0 32px;
          height: 48px;
          line-height: 46px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s;
          align-self: flex-start;
        }

        .property-cta:hover {
          background: var(--clay);
          border-color: var(--clay);
        }

        /* ── FEATURES ── */
        .features-section {
          padding: 100px 0;
          background: var(--off-white);
        }

        .features-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2px;
          margin-top: 60px;
          border-radius: 20px;
          overflow: hidden;
        }

        .feature-item {
          background: #fff;
          padding: 36px 30px;
          transition: background 0.3s, transform 0.3s;
          position: relative;
        }

        .feature-item::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--gradient-clay);
          transform: scaleX(0);
          transition: transform 0.3s;
          transform-origin: left;
        }

        .feature-item:hover {
          background: var(--dark);
        }

        .feature-item:hover::before {
          transform: scaleX(1);
        }

        .feature-icon {
          font-size: 28px;
          margin-bottom: 16px;
          display: block;
        }

        .feature-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--text);
          letter-spacing: 0.5px;
          transition: color 0.3s;
        }

        .feature-item:hover .feature-label {
          color: var(--clay-light);
        }

        /* ── LOCATION ── */
        .location-section {
          padding: 100px 0;
          background: var(--dark);
          position: relative;
          overflow: hidden;
        }

        .location-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(160,113,103,0.15) 0%, transparent 70%);
        }

        .location-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .location-content .section-eyebrow {
          color: var(--clay-light);
        }

        .location-content .section-title {
          color: var(--clay-light);
        }

        .location-content .section-title strong {
          color: #fff;
        }

        .location-content p {
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          line-height: 1.9;
          margin-top: 24px;
          margin-bottom: 40px;
        }

        .location-directions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 36px;
        }

        .direction-item {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 20px;
          transition: border-color 0.3s, background 0.3s;
        }

        .direction-item:hover {
          border-color: var(--clay-mid);
          background: rgba(160,113,103,0.1);
        }

        .direction-dir {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--clay-light);
          margin-bottom: 6px;
        }

        .direction-place {
          font-size: 14px;
          font-weight: 500;
          color: #fff;
        }

        .location-map {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.3);
          height: 420px;
          background: var(--clay-light);
        }

        .location-map iframe {
          width: 100%;
          height: 100%;
          border: none;
          filter: grayscale(20%) contrast(1.1);
        }

        /* ── CTA BANNER ── */
        .cta-section {
          padding: 100px 60px;
          background: linear-gradient(135deg, var(--clay) 0%, #8b5e55 100%);
          text-align: center;
        }

        .cta-section .section-eyebrow {
          color: rgba(255,255,255,0.7);
        }

        .cta-section h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 300;
          color: #fff;
          margin: 16px 0 24px;
          line-height: 1;
        }

        .cta-section p {
          font-size: 16px;
          color: rgba(255,255,255,0.75);
          max-width: 500px;
          margin: 0 auto 50px;
          line-height: 1.8;
        }

        .cta-section .btn-white {
          background: #fff;
          color: var(--clay);
          padding: 0 50px;
          height: 56px;
          line-height: 56px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-section .btn-white:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .about-inner { flex-direction: column; gap: 40px; padding: 0 30px; }
          .about-left { flex: none; }
          .property-card { grid-template-columns: 1fr; }
          .property-card-body { padding: 40px 30px; }
          .location-inner { grid-template-columns: 1fr; gap: 50px; padding: 0 30px; }
          .location-map { height: 300px; }
          .section-header { flex-direction: column; align-items: flex-start; gap: 20px; padding: 0 30px; }
          .properties-grid { padding: 0 30px; }
          .features-inner { padding: 0 30px; }
          .hero-content { padding: 0 30px; padding-top: 120px; }
          .hero-badge { display: none; }
          .location-directions { grid-template-columns: 1fr; }
          .cta-section { padding: 80px 30px; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="hero-eyebrow">Kaj Properties & Developers</p>
          <h1 className="hero-title">
            Your Dream<br /><em>Home Awaits</em>
          </h1>
          <p className="hero-desc">
            Experience livable luxury near Jahangirnagar University. South-facing apartments with modern amenities at unbeatable value.
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

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item fade-up">
            <div className="stat-num">18</div>
            <div className="stat-label">Decimals of Land</div>
          </div>
          <div className="stat-item fade-up">
            <div className="stat-num">1700</div>
            <div className="stat-label">Sq. Ft. Per Flat</div>
          </div>
          <div className="stat-item fade-up">
            <div className="stat-num">27</div>
            <div className="stat-label">Total Shares</div>
          </div>
          <div className="stat-item fade-up">
            <div className="stat-num">40%</div>
            <div className="stat-label">Cost Savings</div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-inner">
          <div className="about-left fade-up">
            <p className="section-eyebrow">About Us</p>
            <h2 className="section-title">
              Guiding<br />Your<br /><em style={{ fontStyle: 'italic' }}>Journey</em><br /><strong>Home</strong>
            </h2>
          </div>
          <div className="about-right fade-up">
            <p>
              <strong>Kaj Properties & Developers</strong> was founded with one mission: to make homeownership a reality for everyone. We believe that a beautiful, comfortable home in a prime location should not be a luxury reserved for the few.
            </p>
            <div className="divider-clay" />
            <p>
              By pooling resources through our land-share model, buyers save up to 40% compared to conventional purchases — without compromising on quality, location, or amenities. Our flagship project <strong>Chhayabithi</strong> is ideally located adjacent to the Dhaka-Aricha Highway, minutes from Jahangirnagar University.
            </p>
            <a href="#property" className="btn-primary" style={{ marginTop: '16px' }}>View Our Project</a>
          </div>
        </div>
      </section>

      {/* PROPERTY */}
      <section className="property-section" id="property">
        <div className="section-header fade-up">
          <div>
            <p className="section-eyebrow">Featured Project</p>
            <h2 className="section-title" style={{ fontSize: '52px' }}>
              Chhayabithi<br /><strong style={{ fontSize: '24px', letterSpacing: '3px' }}>ALREADY SOLD OUT</strong>
            </h2>
          </div>
        </div>
        <div className="properties-grid">
          <div className="property-card fade-up">
            <div className="property-card-img">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80"
                alt="Chhayabithi Project"
              />
              <span className="property-sold-badge">Sold Out</span>
            </div>
            <div className="property-card-body">
              <p className="property-company">Kaj Properties & Developers</p>
              <h3 className="property-project-name">Chhayabithi</h3>
              <div className="property-location">
                <span className="property-location-icon">📍</span>
                <p className="property-location-text">
                  Dhaka-Aricha Highway, Savar<br />
                  Adjacent to Jahangirnagar University<br />
                  Dhaka, Bangladesh
                </p>
              </div>
              <div className="property-specs">
                <div className="property-spec">
                  <div className="property-spec-val">1700</div>
                  <div className="property-spec-label">Sq. Ft.</div>
                </div>
                <div className="property-spec">
                  <div className="property-spec-val">3+1</div>
                  <div className="property-spec-label">Beds</div>
                </div>
                <div className="property-spec">
                  <div className="property-spec-val">4</div>
                  <div className="property-spec-label">Baths</div>
                </div>
                <div className="property-spec">
                  <div className="property-spec-val">6</div>
                  <div className="property-spec-label">Balconies</div>
                </div>
              </div>
              <a href="#contact" className="property-cta">Inquire Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section" id="features">
        <div className="features-inner">
          <div className="fade-up">
            <p className="section-eyebrow">Apartment Features</p>
            <h2 className="section-title">
              Everything<br /><strong>Included</strong>
            </h2>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-item fade-up" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="feature-icon">{f.icon}</span>
                <p className="feature-label">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="location-section" id="location">
        <div className="location-inner">
          <div className="location-content fade-up">
            <p className="section-eyebrow">Prime Location</p>
            <h2 className="section-title">
              Where<br />You<br /><strong>Belong</strong>
            </h2>
            <p>
              Nestled alongside the Dhaka-Aricha Highway, Chhayabithi places you at the heart of everything — nature, education, and urban convenience.
            </p>
            <div className="location-directions">
              <div className="direction-item">
                <p className="direction-dir">North</p>
                <p className="direction-place">Savar Golf Club</p>
              </div>
              <div className="direction-item">
                <p className="direction-dir">East</p>
                <p className="direction-place">Savar Cantonment</p>
              </div>
              <div className="direction-item">
                <p className="direction-dir">South</p>
                <p className="direction-place">Jahangirnagar University</p>
              </div>
              <div className="direction-item">
                <p className="direction-dir">Road Access</p>
                <p className="direction-place">20ft & 16ft Roads</p>
              </div>
            </div>
          </div>
          <div className="location-map fade-up">
            <iframe
              title="Chhayabithi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5!2d90.267!3d23.874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ee2edc47e8b3%3A0x3b2d5e84614df6e5!2sJahangirnagar%20University!5e0!3m2!1sen!2sbd!4v1700000000000"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <p className="section-eyebrow fade-up">Get In Touch</p>
        <h2 className="fade-up">Ready to Own<br />Your Dream Home?</h2>
        <p className="fade-up">
          Contact us today to learn about upcoming projects and secure your share. Bachelor Gate, Ambagan Road, Jahangirnagar University.
        </p>
        <a href="tel:+8801XXXXXXXXX" className="btn-white fade-up">Call Us Now</a>
      </section>
    </>
  );
};

export default Home;