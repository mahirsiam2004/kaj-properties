import React from 'react';
import {
    BedDouble,
    BedSingle,
    UtensilsCrossed,
    ShowerHead,
    Wind,
    Car,
    Zap,
    Camera,
} from 'lucide-react';

const features = [
    { icon: <BedDouble size={22} strokeWidth={1.5} />, label: '3 Bedrooms', desc: 'Spacious master & twin bedrooms with natural light.' },
    { icon: <BedSingle size={22} strokeWidth={1.5} />, label: '1 Guest Room', desc: 'Private guest suite for visiting family.' },
    { icon: <UtensilsCrossed size={22} strokeWidth={1.5} />, label: 'Dining & Drawing', desc: 'Open-plan living for modern lifestyles.' },
    { icon: <ShowerHead size={22} strokeWidth={1.5} />, label: '4 Bathrooms', desc: 'Tiled, modern bathrooms with quality fixtures.' },
    { icon: <Wind size={22} strokeWidth={1.5} />, label: '6 Balconies', desc: 'Generous outdoor space with green views.' },
    { icon: <Car size={22} strokeWidth={1.5} />, label: 'Parking Facility', desc: 'Dedicated covered parking for residents.' },
    { icon: <Zap size={22} strokeWidth={1.5} />, label: '24hr Generator & Lift', desc: 'Uninterrupted power and lift access always.' },
    { icon: <Camera size={22} strokeWidth={1.5} />, label: 'CCTV Surveillance', desc: 'Round-the-clock security for peace of mind.' },
];

const FeaturesSection = () => (
    <section className="features-section" id="features">
        <div className="container">
            <div className="features-header fade-up">
                <p className="section-eyebrow">Apartment Features</p>
                <h2 className="section-title">
                    Everything<br /><strong>Included</strong>
                </h2>
                <p className="features-subtitle">
                    Every Chayabithi apartment comes equipped with premium amenities
                    designed for modern, comfortable living.
                </p>
            </div>

            <div className="features-grid">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="feature-card fade-up"
                        style={{ transitionDelay: `${i * 0.07}s` }}
                    >
                        <div className="feature-icon-wrap">
                            <span className="feature-icon">{f.icon}</span>
                        </div>
                        <h4 className="feature-label">{f.label}</h4>
                        <p className="feature-desc">{f.desc}</p>
                    </div>
                ))}
            </div>

            {/* Floor plan teaser */}
            <div className="floorplan-teaser fade-up">
                <div className="floorplan-text">
                    <p className="section-eyebrow">Floor Plan</p>
                    <h3>1,700 Sq. Ft. of Thoughtful Space</h3>
                    <p>Every square foot is optimized for maximum comfort and natural ventilation. South-facing units ensure light all day long.</p>
                    <a href="#contact" className="btn-primary" style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        Request Floor Plan
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
                <div className="floorplan-visual">
                    <div className="floorplan-box">
                        <div className="fp-room fp-room--main">Master<br />Bedroom</div>
                        <div className="fp-room fp-room--bed2">Bedroom 2</div>
                        <div className="fp-room fp-room--bed3">Bedroom 3</div>
                        <div className="fp-room fp-room--guest">Guest</div>
                        <div className="fp-room fp-room--living">Living &amp; Dining</div>
                        <div className="fp-room fp-room--kitchen">Kitchen</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FeaturesSection;