'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import LatestNewsSection from '@/components/sections/LatestNewsSection';
import PropertyShowcase from '@/components/sections/PropertyShowcase';
import LocationSection from '@/components/sections/LocationSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import SocialSidebar from '@/components/SocialSidebar';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function HomeClient() {
  const [loading, setLoading] = useState(true);

  // Restore hash scroll after loading
  useEffect(() => {
    if (loading) return;
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // IntersectionObserver for fade-up animations
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all fade-up elements
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <SocialSidebar />
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturedProjectsSection />
          <PropertyShowcase />
          <LocationSection />
          <TestimonialsSection />
          <LatestNewsSection />
          <CTASection />
          <Footer />
        </main>
      </div>
    </>
  );
}
