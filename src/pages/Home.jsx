import React, { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import PropertySection from './sections/PropertySection';
import FeaturesSection from './sections/FeaturesSection';
import LocationSection from './sections/LocationSection';
import TestimonialsSection from './sections/TestimonialsSection';
import MembershipSection from './sections/MembershipSection';
import CTASection from './sections/CTASection';
import SocialSidebar from '../components/SocialSidebar';

export const Home = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-brand-light min-h-screen">
            <SocialSidebar />
            <HeroSection />
            <AboutSection />
            <PropertySection />
            <MembershipSection />
            <FeaturesSection />
            <LocationSection />
            <TestimonialsSection />
            <CTASection />
        </div>
    );
};

export default Home;
