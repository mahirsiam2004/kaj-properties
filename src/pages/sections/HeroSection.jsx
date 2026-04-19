import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import banner1 from '../../assets/banner/1 copy.jpg.jpeg';
import banner2 from '../../assets/banner/3 copy.jpg.jpeg';
import banner3 from '../../assets/banner/4 copy.jpg.jpeg';
import banner4 from '../../assets/banner/5 copy.jpg.jpeg';

const slides = [
    {
        url: banner1,
        label: 'Chayabithi — Savar, Dhaka',
    },
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
        <section className="relative h-screen w-full overflow-hidden bg-brand-black text-white" id="home">
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
            <div className="relative z-20 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center fade-up">
                <div className="max-w-2xl mt-12 md:mt-20">
                    <p className="text-accent uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-3 ml-1">
                        Welcome to
                    </p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 capitalize text-white">
                        <span className="block font-light">Your Abode of</span>
                        <span className="block">Peace</span>
                    </h1>
                    <p className="text-sm md:text-base text-white/80 font-light max-w-md mb-6 md:mb-8 leading-relaxed">
                        Explore the Future of Urban Spaces with Kaz Properties
                    </p>
                    <div>
                        <a 
                            href="#property" 
                            className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-white hover:text-brand-black transition-colors rounded-sm"
                        >
                            Explore Projects <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Side Pagination Dots */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${i === current ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'}`}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Bottom Bar: Slide Info & Filters */}
            <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-brand-black to-transparent pt-20 pb-8">
                <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-end gap-6 md:gap-0">
                    {/* Active Slide Info */}
                    <div className="w-full md:w-1/2 animate-fade-in-up flex items-end">
                       <div className="bg-brand-black/50 backdrop-blur-md border-l-4 border-accent p-4 md:p-6 max-w-[280px] md:max-w-sm rounded-r-lg">
                           <p className="text-[10px] md:text-xs text-accent mb-1 uppercase tracking-widest font-bold">Featured Project</p>
                           <h3 className="text-base md:text-xl font-medium text-white">{slides[current].label}</h3>
                           <a href="#property" className="inline-block mt-3 text-xs underline text-white hover:text-accent transition-colors">
                               View Details
                           </a>
                       </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="w-full md:w-1/2 flex justify-start md:justify-end gap-4 md:gap-6">
                        {filters.map(filter => (
                            <a 
                                href={`#property?filter=${filter.toLowerCase()}`}
                                key={filter}
                                className="text-white hover:text-accent transition-colors font-medium text-sm md:text-lg lg:text-xl uppercase tracking-wider relative group"
                            >
                                {filter}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
