import React, { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import StatsBar from './sections/StatsBar';
import AboutSection from './sections/AboutSection';
import PropertySection from './sections/PropertySection';
import FeaturesSection from './sections/FeaturesSection';
import LocationSection from './sections/LocationSection';
import CTASection from './sections/CTASection';

export const Home = () => {
  // Scroll-reveal for all .fade-up elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <PropertySection />
      <FeaturesSection />
      <LocationSection />
      <CTASection />
    </>
  );
};

export default Home;