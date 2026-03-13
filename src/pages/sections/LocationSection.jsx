import React from 'react';

const LocationSection = () => (
    <section className="location-section" id="location">
        <div className="location-inner">
            {/* Text content */}
            <div className="location-content fade-up">
                <p className="section-eyebrow">Prime Location</p>
                <h2 className="section-title">
                    Visit Our<br />Office<br /><strong>Today</strong>
                </h2>
                <div className="location-directions" style={{ background: 'var(--surface-2)', padding: '24px', borderRadius: 'var(--radius)', marginTop: '20px' }}>
                    <p style={{ fontSize: '18px', color: 'var(--cream)', fontWeight: '500', lineHeight: 1.6, margin: 0 }}>
                        <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Company Location</strong>
                        Bachelor Gate, Ambagan Road, Jahangirnagar, Savar, Dhaka
                    </p>
                </div>
            </div>

            {/* Map */}
            <div className="location-map fade-up">
                <iframe
                    title="Kaz Properties Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5!2d90.267!3d23.874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ee2edc47e8b3%3A0x3b2d5e84614df6e5!2sJahangirnagar%20University!5e0!3m2!1sen!2sbd!4v1700000000000"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    </section>
);

export default LocationSection;
