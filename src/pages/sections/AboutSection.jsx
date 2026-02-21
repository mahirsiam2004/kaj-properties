import React from 'react';

const AboutSection = () => (
    <section className="about-section">
        <div className="about-inner">
            {/* Left – title */}
            <div className="about-left fade-up">
                <p className="section-eyebrow">About Us</p>
                <h2 className="section-title">
                    Guiding<br />Your<br />
                    <em style={{ fontStyle: 'italic' }}>Journey</em><br />
                    <strong>Home</strong>
                </h2>
            </div>

            {/* Right – content */}
            <div className="about-right fade-up">
                <p>
                    <strong>Kaj Properties &amp; Developers</strong> was founded with one mission: to
                    make homeownership a reality for everyone. We believe that a beautiful, comfortable
                    home in a prime location should not be a luxury reserved for the few.
                </p>
                <div className="divider-clay" />
                <p>
                    By pooling resources through our land-share model, buyers save up to 40% compared
                    to conventional purchases — without compromising on quality, location, or amenities.
                    Our flagship project <strong>Chhayabithi</strong> is ideally located adjacent to the
                    Dhaka-Aricha Highway, minutes from Jahangirnagar University.
                </p>
                <a href="#property" className="btn-primary" style={{ marginTop: '16px' }}>
                    View Our Project
                </a>
            </div>
        </div>
    </section>
);

export default AboutSection;
