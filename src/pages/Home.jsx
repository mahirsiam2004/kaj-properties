import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectCreative, Parallax } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

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
    const swiperRef = useRef(null);

    const sectionMap = {
        '#home': 0,
        '#about': 1,
        '#property': 2,
        '#membership': 3,
        '#features': 4,
        '#location': 5,
        '#testimonials': 6,
        '#contact': 7,
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
    }, []);

    // Smart Scroll Priority: Prevent swiper from moving if inner content is still scrollable
    const handleScroll = (e) => {
        if (!swiperRef.current) return;
        
        const container = e.currentTarget;
        const isScrollingDown = e.deltaY ? e.deltaY > 0 : false;
        const isScrollingUp = e.deltaY ? e.deltaY < 0 : false;

        // Tolerance for rounding issues
        const isAtBottom = Math.ceil(container.scrollTop + container.clientHeight) >= container.scrollHeight - 10;
        const isAtTop = container.scrollTop <= 10;

        if (isScrollingDown && !isAtBottom) {
            swiperRef.current.mousewheel.disable();
        } else if (isScrollingUp && !isAtTop) {
            swiperRef.current.mousewheel.disable();
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
                    sensitivity: 1.2, // Slightly increased for "easy" feel
                    thresholdDelta: 0,
                    thresholdTime: 0,
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
                <SwiperSlide onWheel={handleScroll} className="overflow-y-auto h-full scroll-smooth scrollbar-hide"><HeroSection /></SwiperSlide>
                <SwiperSlide onWheel={handleScroll} className="overflow-y-auto h-full scroll-smooth scrollbar-hide overflow-x-hidden"><div data-swiper-parallax="-300"><AboutSection /></div></SwiperSlide>
                <SwiperSlide onWheel={handleScroll} className="overflow-y-auto h-full scroll-smooth scrollbar-hide overflow-x-hidden"><div data-swiper-parallax="-300"><PropertySection /></div></SwiperSlide>
                <SwiperSlide onWheel={handleScroll} className="overflow-y-auto h-full scroll-smooth scrollbar-hide overflow-x-hidden"><div data-swiper-parallax="-300"><MembershipSection /></div></SwiperSlide>
                <SwiperSlide onWheel={handleScroll} className="overflow-y-auto h-full scroll-smooth scrollbar-hide overflow-x-hidden"><div data-swiper-parallax="-300"><FeaturesSection /></div></SwiperSlide>
                <SwiperSlide onWheel={handleScroll} className="overflow-y-auto h-full scroll-smooth scrollbar-hide overflow-x-hidden"><div data-swiper-parallax="-300"><LocationSection /></div></SwiperSlide>
                <SwiperSlide onWheel={handleScroll} className="overflow-y-auto h-full scroll-smooth scrollbar-hide overflow-x-hidden"><div data-swiper-parallax="-300"><TestimonialsSection /></div></SwiperSlide>
                <SwiperSlide onWheel={handleScroll} className="overflow-y-auto h-full scroll-smooth scrollbar-hide overflow-x-hidden"><div data-swiper-parallax="-300"><CTASection /></div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;
