import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
// import banner1 from '../../assets/banner/1 copy.jpg.jpeg';
import banner2 from '../../assets/banner/3 copy.jpg.jpeg';
import banner3 from '../../assets/banner/4 copy.jpg.jpeg';
import banner4 from '../../assets/banner/5 copy.jpg.jpeg';

const slides = [
    /*
    {
        url: banner1,
        label: 'Chayabithi — Savar, Dhaka',
    },
    */
    {
        url: banner2,
        label: 'Premium Living Spaces',
    },
    {
        url: banner3,
        label: 'Modern Architecture',
    },
    {
        url: banner4,
        label: 'Luxury Interiors',
    },
];

const filters = ['Ongoing', 'Upcoming', 'Completed'];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (idx) => {
        if (idx === current) return;
        setCurrent(idx);
    };

    return (
        <section className="relative h-screen min-h-[100svh] w-full overflow-hidden bg-brand-black text-white" id="home">
            {/* Background Slides */}
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    {/* Scale effect on active slide */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-[10000ms] ease-out"
                        style={{ 
                            backgroundImage: `url(${slide.url})`,
                            transform: i === current ? 'scale(1.05)' : 'scale(1)'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent"></div>
                </div>
            ))}

            {/* Content Container */}
            <div className="container mx-auto px-6 lg:px-12 relative z-20 pt-32 md:pt-24 lg:pt-20 min-h-full flex flex-col justify-center">
                <div className="max-w-4xl py-12">
                    <div className="overflow-hidden mb-3">
                        <span className="inline-block text-accent uppercase tracking-[0.2em] font-semibold text-[10px] md:text-sm animate-slide-up">
                            Welcome to Your Abode of Peace ........
                        </span>
                    </div>
                    
                    <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
                        Crafting Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent/50">
                            Abode of Peace
                        </span>
                    </h1>
                    <p className="text-sm md:text-base text-white/80 font-light max-w-md mb-8 md:mb-10 leading-relaxed">
                        Explore the Future of Urban Spaces with Kaz Properties
                    </p>
                    



                </div>
            </div>

            {/* Right Side Pagination Dots - Hidden on Mobile */}
            <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-4">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${i === current ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'}`}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-brand-black/90 to-transparent pt-12 pb-8">
                <div className="container mx-auto px-6 lg:px-12 flex justify-center items-end">
                </div>
            </div>
        </section>
    );
}
