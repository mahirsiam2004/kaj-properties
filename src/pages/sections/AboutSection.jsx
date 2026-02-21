import React from 'react';
import { DollarSign, Award, MapPin, Users } from 'lucide-react';

const milestones = [
    { year: '2020', event: 'Kaj Properties founded with a vision to democratize homeownership.' },
    { year: '2022', event: 'Launched Chhayabithi — our flagship land-share apartment project.' },
    { year: '2023', event: 'All 27 shares sold out within months of launch.' },
    { year: '2024+', event: 'New projects in pipeline — join our waitlist to be first in line.' },
];

const values = [
    {
        icon: <DollarSign size={22} strokeWidth={1.5} />,
        title: 'Affordable',
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
        desc: 'Adjacent to Jahangirnagar University on the Dhaka-Aricha Highway.',
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
                        <strong>Kaj Properties &amp; Developers</strong> was founded with one mission: to
                        make homeownership a reality for everyone. We believe that a beautiful, comfortable
                        home in a prime location should not be a luxury reserved for the few.
                    </p>
                    <p className="fade-up" style={{ transitionDelay: '0.1s' }}>
                        By pooling resources through our innovative <strong>land-share model</strong>, buyers save up to 40%
                        compared to conventional purchases — without compromising on quality, location, or amenities.
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
                        View Our Project
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