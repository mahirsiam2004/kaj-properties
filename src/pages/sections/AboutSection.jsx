import React from 'react';
import { DollarSign, Award, MapPin, Users } from 'lucide-react';

const milestones = [
    { year: '2023', event: 'Kaz Properties founded with vision to democratize luxury homeownership.' },
    { year: '2024', event: 'Developed innovative land-share model to make properties affordable.' },
    { year: '2025', event: 'Successfully launched Chayabithi - proof of concept with 27 families.' },
    { year: '2026+', event: 'Expanding portfolio with new premium projects in prime locations.' },
];

const values = [
    {
        icon: <DollarSign size={22} strokeWidth={1.5} />,
        title: 'Affordable Luxury',
        desc: 'Land-share model cuts costs by up to 40% vs. market rate.',
    },
    {
        icon: <Award size={22} strokeWidth={1.5} />,
        title: 'Quality Built',
        desc: 'Premium construction standards. Every detail inspected.',
    },
    {
        icon: <MapPin size={22} strokeWidth={1.5} />,
        title: 'Prime Location',
        desc: 'Bachelor Gate, Ambagan Road, Jahangirnagar, Savar, Dhaka.',
    },
    {
        icon: <Users size={22} strokeWidth={1.5} />,
        title: 'Trusted',
        desc: 'Transparent process. No hidden fees. Community first.',
    },
];

const AboutSection = () => (
    <section className="about-section" id="about">
        <div className="container">
            <div className="about-inner">
                <div className="about-left fade-up">
                    <p className="section-eyebrow">About Us</p>
                    <h2 className="section-title">
                        Guiding<br />Your<br />
                        <em>Journey</em><br />
                        <strong>Home</strong>
                    </h2>
                    <div className="about-accent-line" />
                </div>

                <div className="about-right">
                    <p className="fade-up">
                        <strong>Kaz Properties &amp; Developers</strong> is revolutionizing the real estate landscape 
                        by making luxury living accessible to everyone. We believe that premium homes in prime locations 
                        should not be exclusive privileges reserved for the wealthy few.
                    </p>
                    <p className="fade-up" style={{ transitionDelay: '0.1s' }}>
                        Our innovative <strong>land-share model</strong> allows multiple families to pool resources and co-own premium properties, 
                        resulting in up to <strong>40% savings</strong> compared to traditional ownership—without compromising on quality, 
                        location, or amenities.
                    </p>

                    <div className="about-timeline fade-up" style={{ transitionDelay: '0.2s' }}>
                        {milestones.map(({ year, event }) => (
                            <div className="timeline-item" key={year}>
                                <div className="timeline-year">{year}</div>
                                <div className="timeline-dot" />
                                <div className="timeline-event">{event}</div>
                            </div>
                        ))}
                    </div>

                    <a
                        href="#property"
                        className="btn-primary fade-up"
                        style={{ transitionDelay: '0.3s', marginTop: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                        View Our Projects
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="about-values fade-up" style={{ transitionDelay: '0.4s' }}>
                {values.map(({ icon, title, desc }) => (
                    <div className="value-card" key={title}>
                        <span className="value-icon">{icon}</span>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default AboutSection;