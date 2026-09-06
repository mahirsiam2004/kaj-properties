import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectCreative, Parallax } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import LatestNewsSection from './sections/LatestNewsSection';
import PropertySection from './sections/PropertySection';
import FeaturesSection from './sections/FeaturesSection';
import LocationSection from './sections/LocationSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PropertyShowcase from './sections/PropertyShowcase';
import CTASection from './sections/CTASection';
import SocialSidebar from '../components/SocialSidebar';
import Footer from '../components/Footer';

const API_BASE = import.meta.env.VITE_API_URL || '';

const SWIPE_CLASS = "overflow-y-auto h-full scroll-smooth scrollbar-hide overflow-x-hidden flex flex-col";

export const Home = () => {
    const swiperRef = useRef(null);
    const [hasNews, setHasNews] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/updates`);
                const data = await res.json();
                if (data.success && data.data.length > 0) {
                    setHasNews(true);
                }
            } catch (error) {
                // silently fail - section stays hidden
            }
        };
        fetchNews();
    }, []);

    const sectionMap = {
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
        
        const onRemoteSlide = (e) => {
            if (swiperRef.current) {
                swiperRef.current.slideTo(e.detail.index);
            }
        };
        window.addEventListener('remoteSlideTo', onRemoteSlide);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('remoteSlideTo', onRemoteSlide);
            observer.disconnect();
        };
    }, [hasNews]);

    const handleScroll = (e) => {
        if (!swiperRef.current) return;
        
        const container = e.currentTarget;
        const isScrollingDown = e.deltaY ? e.deltaY > 0 : false;
        const isScrollingUp = e.deltaY ? e.deltaY < 0 : false;

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
        <div className="bg-brand-light min-h-screen">
            <SocialSidebar />
            <Swiper
                direction={'vertical'}
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
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
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
                <SwiperSlide onWheel={handleScroll} className={`${SWIPE_CLASS}`} id="footer">
                    <Footer />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;
