import React from 'react';

const directions = [
    { dir: 'North', place: 'Savar Golf Club' },
    { dir: 'East', place: 'Savar Cantonment' },
    { dir: 'South', place: 'Jahangirnagar University' },
    { dir: 'Road Access', place: '20ft & 16ft Roads' },
];

const LocationSection = () => (
    <section className="location-section" id="location">
        <div className="location-inner">
            {/* Text content */}
            <div className="location-content fade-up">
                <p className="section-eyebrow">Prime Location</p>
                <h2 className="section-title">
                    Visit Our<br />Office<br /><strong>Today</strong>
                </h2>
                <p>
                    Nestled alongside the Dhaka-Aricha Highway, Chhayabithi places you at the heart
                    of everything — nature, education, and urban convenience.
                </p>
                <div className="location-directions">
                    {directions.map(({ dir, place }) => (
                        <div className="direction-item" key={dir}>
                            <p className="direction-dir">{dir}</p>
                            <p className="direction-place">{place}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Map */}
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
);

export default LocationSection;
