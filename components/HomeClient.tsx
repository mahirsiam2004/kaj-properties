'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectCreative, Parallax } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import LatestNewsSection from '@/components/sections/LatestNewsSection';
import PropertySection from '@/components/sections/PropertySection';
import PropertyShowcase from '@/components/sections/PropertyShowcase';
import FeaturesSection from '@/components/sections/FeaturesSection';
import LocationSection from '@/components/sections/LocationSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import SocialSidebar from '@/components/SocialSidebar';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

const SWIPE_CLASS = "overflow-y-auto h-full scroll-smooth scrollbar-hide overflow-x-hidden flex flex-col";

export default function HomeClient() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [hasNews, setHasNews] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/updates');
        const data = await res.json();
        if (data.success && data.data.length > 0) setHasNews(true);
      } catch (_) { /* silently fail */ }
    };
    fetchNews();
  }, []);

  const sectionMap: Record<string, number> = {
    '#home': 0,
    '#about': 1,
    ...(hasNews ? { '#news': 2 } : {}),
    '#property': hasNews ? 3 : 2,
    '#showcase': hasNews ? 4 : 3,
    '#features': hasNews ? 5 : 4,
    '#location': hasNews ? 6 : 5,
    '#testimonials': hasNews ? 7 : 6,
    '#contact': hasNews ? 8 : 7,
    '#footer': hasNews ? 9 : 8,
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && sectionMap[hash] !== undefined && swiperRef.current) {
        swiperRef.current.slideTo(sectionMap[hash]);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    const onRemoteSlide = (e: Event) => {
      const ce = e as CustomEvent<{ index: number }>;
      if (swiperRef.current) swiperRef.current.slideTo(ce.detail.index);
    };
    window.addEventListener('remoteSlideTo', onRemoteSlide);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('remoteSlideTo', onRemoteSlide);
      observer.disconnect();
    };
  }, [hasNews]);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!swiperRef.current) return;
    const container = e.currentTarget;
    const isScrollingDown = e.deltaY > 0;
    const isScrollingUp = e.deltaY < 0;
    const isAtBottom = Math.ceil(container.scrollTop + container.clientHeight) >= container.scrollHeight - 5;
    const isAtTop = container.scrollTop <= 5;

    if (isScrollingDown && !isAtBottom) {
      e.stopPropagation();
      swiperRef.current.mousewheel.disable();
      setTimeout(() => swiperRef.current?.mousewheel.enable(), 50);
    } else if (isScrollingUp && !isAtTop) {
      e.stopPropagation();
      swiperRef.current.mousewheel.disable();
      setTimeout(() => swiperRef.current?.mousewheel.enable(), 50);
    } else {
      swiperRef.current.mousewheel.enable();
    }
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className={`bg-brand-light h-[100dvh] overflow-hidden transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
      <SocialSidebar />
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
          sensitivity: 1,
          thresholdDelta: 10,
          thresholdTime: 300,
          eventsTarget: 'container',
        }}
        speed={1000}
        parallax={true}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => {
          document.documentElement.setAttribute('data-scrolled', swiper.activeIndex > 0 ? 'true' : 'false');
          window.dispatchEvent(new CustomEvent('swiperChange', { detail: { index: swiper.activeIndex } }));
        }}
        modules={[Mousewheel, Pagination, EffectCreative, Parallax]}
        className="h-[100dvh] w-full"
      >
        <SwiperSlide onWheel={handleScroll} className="overflow-y-auto h-full scroll-smooth scrollbar-hide flex flex-col">
          <HeroSection />
        </SwiperSlide>
        <SwiperSlide onWheel={handleScroll} className={SWIPE_CLASS}>
          <AboutSection />
        </SwiperSlide>
        {hasNews && (
          <SwiperSlide onWheel={handleScroll} className={SWIPE_CLASS}>
            <LatestNewsSection />
          </SwiperSlide>
        )}
        <SwiperSlide onWheel={handleScroll} className={SWIPE_CLASS}>
          <PropertySection />
        </SwiperSlide>
        <SwiperSlide onWheel={handleScroll} className={SWIPE_CLASS}>
          <PropertyShowcase />
        </SwiperSlide>
        <SwiperSlide onWheel={handleScroll} className={SWIPE_CLASS}>
          <FeaturesSection />
        </SwiperSlide>
        <SwiperSlide onWheel={handleScroll} className={SWIPE_CLASS}>
          <LocationSection />
        </SwiperSlide>
        <SwiperSlide onWheel={handleScroll} className={SWIPE_CLASS}>
          <TestimonialsSection />
        </SwiperSlide>
        <SwiperSlide onWheel={handleScroll} className={SWIPE_CLASS}>
          <CTASection />
        </SwiperSlide>
        <SwiperSlide onWheel={handleScroll} className={SWIPE_CLASS}>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
