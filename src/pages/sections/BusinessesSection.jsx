import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const businesses = [
    {
        name: 'REAL ESTATE & HOUSING ASSOCIATION',
        shortName: 'REHAB',
        tagline: 'Kaz is member of REHAB',
        desc: 'Real Estate & Housing Association of Bangladesh',
        initial: 'R',
        color: '#1a2332',
    },
    {
        name: 'NATIONAL HOUSING AUTHORITY',
        shortName: 'NHA',
        tagline: 'Kaz is member of NHA',
        desc: 'National Housing Authority of Bangladesh',
        initial: 'N',
        color: '#243044',
    },
    {
        name: 'RAJDHANI UNNAYAN KARTRIPAKKHA',
        shortName: 'RAJUK',
        tagline: 'Kaz is member of Rajuk',
        desc: 'Capital Development Authority',
        initial: 'R',
        color: '#2e3d52',
    },
    {
        name: 'KAZ DESIGN STUDIO',
        shortName: 'KDS',
        tagline: 'Transforming Spaces Into Life',
        desc: 'Interior design and space planning for modern living.',
        initial: 'K',
        color: '#a07167',
    },
];

const dots = [0, 1, 2, 3, 4, 5, 6];

export default function BusinessesSection() {
    const [activeDot, setActiveDot] = useState(4);

    return (
        <section className="zub-businesses" id="businesses">
            <div className="zub-container">
                <div className="zub-section-header fade-up">
                    <div>
                        <p className="zub-eyebrow">Membership & Partners</p>
                        <h2 className="zub-section-title">Kaz Membership</h2>
                    </div>
                </div>

                <div className="zub-businesses-grid fade-up">
                    {businesses.map((b, i) => (
                        <div className="zub-business-card" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className="zub-business-icon" style={{ background: b.color }}>
                                <span>{b.initial}</span>
                            </div>
                            <div className="zub-business-body">
                                <h4 className="zub-business-name">{b.name}</h4>
                                <p className="zub-business-tagline">{b.tagline}</p>
                                <p className="zub-business-desc">{b.desc}</p>
                            </div>
                            <a href="#contact" className="zub-business-link">
                                Visit <ArrowUpRight size={14} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right side dots like Zubion */}
            <div className="zub-businesses-dots">
                {dots.map((_, i) => (
                    <button
                        key={i}
                        className={`zub-businesses-dot ${i === activeDot ? 'active' : ''}`}
                        onClick={() => setActiveDot(i)}
                        aria-label={`Page ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
