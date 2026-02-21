import React from 'react';
import cayabith from '../../assets/c.jpeg';

const PropertySection = () => {
    const specs = [
        { val: '1700', label: 'Sq. Ft.' },
        { val: '3+1', label: 'Beds' },
        { val: '4', label: 'Baths' },
        { val: '6', label: 'Balconies' },
    ];

    return (
        <section className="property-section" id="property">
            {/* Header */}
            <div className="section-header fade-up">
                <div>
                    <p className="section-eyebrow">Featured Project</p>
                    <h2 className="section-title" style={{ fontSize: 'clamp(40px, 5vw, 52px)' }}>
                        Chhayabithi
                        <strong style={{ fontSize: '22px', letterSpacing: '3px' }}>ALREADY SOLD OUT</strong>
                    </h2>
                </div>
            </div>

            {/* Card */}
            <div className="properties-grid">
                <div className="property-card fade-up">
                    {/* Image */}
                    <div className="property-card-img">
                        <img src={cayabith} alt="Chhayabithi Project" />
                        <span className="property-sold-badge">Sold Out</span>
                    </div>

                    {/* Body */}
                    <div className="property-card-body">
                        <p className="property-company">Kaj Properties &amp; Developers</p>
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
                            {specs.map(({ val, label }) => (
                                <div className="property-spec" key={label}>
                                    <div className="property-spec-val">{val}</div>
                                    <div className="property-spec-label">{label}</div>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="property-cta">Inquire Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertySection;
