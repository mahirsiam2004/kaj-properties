import React from 'react';
import { MapPin, Home, Building } from 'lucide-react';
import cayabith from '../../assets/c.jpeg';
import ImageSlideshow from '../../components/ImageSlideshow';

const PropertySection = () => {
    const chhayabithiImages = [
        '/src/assets/Chhayabithi/CHAYABITHI 7.jpg',
        '/src/assets/Chhayabithi/KAJ POST 5.jpg',
        '/src/assets/Chhayabithi/vhayabithi_01.png'
    ];

    const projects = [
        {
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
            name: 'Kaz Heights',
            status: 'Coming Soon',
            statusType: 'upcoming',
            specs: [
                { val: '2100', label: 'Sq. Ft.' },
                { val: '4+1', label: 'Beds' },
                { val: '5', label: 'Baths' },
                { val: '8', label: 'Balconies' },
            ],
            location: 'Prime location near JU Campus<br />Enhanced amenities & modern design<br />Dhaka, Bangladesh',
            image: null,
            description: 'Premium luxury living with next-generation features.'
        },
        {
            name: 'Green Valley',
            status: 'Coming Soon',
            statusType: 'upcoming',
            specs: [
                { val: '1850', label: 'Sq. Ft.' },
                { val: '3+1', label: 'Beds' },
                { val: '4', label: 'Baths' },
                { val: '7', label: 'Balconies' },
            ],
            location: 'Eco-friendly location<br />Sustainable living focus<br />Near Savar',
            image: null,
            description: 'Sustainable living with green building practices.'
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
                    <div className="property-card fade-up" key={project.name} style={{ transitionDelay: `${index * 0.1}s` }}>
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

                        <div className="property-card-body">
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
                                {project.statusType === 'sold' ? 'Inquire About Similar' : 'Get Updates'}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PropertySection;