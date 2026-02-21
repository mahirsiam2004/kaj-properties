import React from 'react';

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

const FeaturesSection = () => (
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
                    <div
                        key={i}
                        className="feature-item fade-up"
                        style={{ transitionDelay: `${i * 0.07}s` }}
                    >
                        <span className="feature-icon">{f.icon}</span>
                        <p className="feature-label">{f.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default FeaturesSection;
