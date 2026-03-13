import React from 'react';
import { MapPin, Home, Building } from 'lucide-react';
import cayabith from '../../assets/c.jpeg';
import ImageSlideshow from '../../components/ImageSlideshow';
import comingSoon1 from '../../assets/coming/P1 (1).jpg';
import comingSoon2 from '../../assets/coming/CHAYABITHI 7.jpg';

const PropertySection = () => {
    const chhayabithiImages = [
        '/src/assets/Chhayabithi/CHAYABITHI 7.jpg',
        '/src/assets/Chhayabithi/KAJ POST 5.jpg',
        '/src/assets/Chhayabithi/vhayabithi_01.png'
    ];

    const projects = [
        {
            id: 1,
            name: 'Chhayabithi',
            status: 'Sold Out',
            statusType: 'sold',
            specs: [
                { val: '1700', label: 'Sq. Ft.' },
                { val: '3+1', label: 'Beds' },
                { val: '4', label: 'Baths' },
                { val: '6', label: 'Balconies' },
            ],
            location: 'Dhaka-Aricha Highway, Savar<br />Adjacent to Jahangirnagar University<br />Dhaka, Bangladesh',
            image: cayabith,
            description: 'Our successful flagship project that proved the land-share model works.'
        },
        {
            id: 2,
            name: 'COMING SOON',
            status: 'Coming Soon',
            statusType: 'upcoming',
            specs: [],
            location: '',
            image: comingSoon1,
            description: ''
        },
        {
            id: 3,
            name: 'COMING SOON',
            status: 'Coming Soon',
            statusType: 'upcoming',
            specs: [],
            location: '',
            image: comingSoon2,
            description: ''
        }
    ];

    return (
        <section className="property-section" id="property">
            <div className="section-header fade-up">
                <div>
                    <p className="section-eyebrow">Our Projects</p>
                    <h2 className="section-title" style={{ fontSize: 'clamp(40px, 5vw, 52px)' }}>
                        Premium Properties
                        <strong style={{ fontSize: '22px', letterSpacing: '3px', display: 'block' }}>BY KAZ PROPERTIES</strong>
                    </h2>
                </div>
            </div>

            <div className="properties-grid">
                {projects.map((project, index) => (
                    <div className="property-card fade-up" key={project.id || index} style={{ transitionDelay: `${index * 0.1}s` }}>
                        <div className="property-card-img">
                            {project.name === 'Chhayabithi' ? (
                                <>
                                    <ImageSlideshow images={chhayabithiImages} alt="Chhayabithi Project" interval={4000} />
                                    <span className="property-sold-badge">Sold Out</span>
                                </>
                            ) : project.image ? (
                                <>
                                    <img src={project.image} alt={`${project.name} Project`} />
                                    {project.statusType === 'sold' && (
                                        <span className="property-sold-badge">Sold Out</span>
                                    )}
                                </>
                            ) : (
                                <div className="property-placeholder">
                                    <div className="placeholder-icon">
                                        {project.statusType === 'upcoming' ? <Building size={48} /> : <Home size={48} />}
                                    </div>
                                    <span className={`property-status-badge ${project.statusType}`}>
                                        {project.status}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="property-card-body" style={{ textAlign: 'center', padding: '40px 30px' }}>
                            {project.statusType === 'upcoming' ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <h3 style={{ fontSize: '32px', color: 'var(--cream)', letterSpacing: '4px', fontWeight: '600', textTransform: 'uppercase', margin: 0 }}>Coming Soon</h3>
                                    <p style={{ color: 'var(--gold)', fontSize: '14px', fontWeight: '500', letterSpacing: '1px' }}>Something Extraordinary is Arriving</p>
                                    <div style={{ padding: '10px 20px', background: 'var(--surface-2)', borderRadius: '6px', marginTop: '10px' }}>
                                        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                            Join the waitlist for exclusive priority access. Special pre-launch invitations arriving soon.
                                        </p>
                                    </div>
                                    <a href="#contact" className="property-cta" style={{ width: '100%', marginTop: '10px' }}>
                                        Inquire & Wait
                                    </a>
                                </div>
                            ) : (
                                <>
                                    <p className="property-company">Kaz Properties &amp; Developers</p>
                                    <h3 className="property-project-name">{project.name}</h3>
                                    
                                    <p className="property-description">{project.description}</p>

                                    <div className="property-location">
                                        <MapPin size={16} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '3px', color: 'var(--gold)' }} />
                                        <p className="property-location-text" dangerouslySetInnerHTML={{ __html: project.location }} />
                                    </div>

                                    <div className="property-specs">
                                        {project.specs.map(({ val, label }) => (
                                            <div className="property-spec" key={label}>
                                                <div className="property-spec-val">{val}</div>
                                                <div className="property-spec-label">{label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <a href="#contact" className="property-cta">
                                        Inquire About Similar
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PropertySection;