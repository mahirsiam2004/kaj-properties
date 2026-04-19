import React, { useEffect, useRef, useState } from 'react';
import { Volume2 } from 'lucide-react';

const counters = [
    { end: 18, suffix: '+', label: 'Total SQFT Built (K)' },
    { end: 27, suffix: '+', label: 'Number Of Units' },
    { end: 100, suffix: '%', label: 'Happy Clients' },
    { end: 2, suffix: '+', label: 'Number of Projects' },
];

function useCountUp(end, duration = 2000, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [end, duration, start]);
    return count;
}

function Counter({ end, suffix, label, start, index }) {
    const val = useCountUp(end, 2000, start);
    // Remove border-r on even items on mobile (index 1 and 3 are right side)
    const borderClass = index % 2 === 1 ? 'md:border-r border-white/10' : 'border-r border-white/10';
    return (
        <div className={`flex flex-col items-center justify-center p-4 md:p-6 pb-6 md:pb-6 ${borderClass} last:border-r-0`}>
            <div className="text-2xl lg:text-4xl font-bold text-accent mb-2">
                {val}<span className="text-white">{suffix}</span>
            </div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-white/70 text-center">{label}</div>
        </div>
    );
}

export default function AboutSection() {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
        'https://images.unsplash.com/photo-1574360743954-c2a6c2d3a373?w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-brand-black text-white py-12 md:py-24 relative overflow-hidden" id="about">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 fade-up">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 grid grid-cols-3 gap-1">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-accent' : 'bg-white/50'}`}></div>
                            ))}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-light tracking-wide">About Us</h2>
                    </div>
                    <div className="w-full h-px bg-white/10 mt-6"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-24">
                    {/* Left — text */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-sm md:text-base leading-relaxed font-light text-white/90 text-justify mb-6">
                            Kaz Properties started its journey in the real estate development sector partnering with renowned projects. Backing with current good reputation and sector experience, Kaz Properties has expanded its footprint to the building construction sector; promising to provide a complete solution of the people's cherished residence focusing on quality, art, commitment, and value for money.
                        </p>
                        <p className="text-sm md:text-base leading-relaxed font-light text-white/90 text-justify mb-8">
                            We have a skilled, experienced, and committed management team. To achieve the ultimate mission and vision of the company, we gather widely experienced professionals, trained both at home and abroad, including civil engineers, structural engineers, and architects. We cordially invite you to be a proud member of our family to make your living as an art.
                        </p>
                        
                        <a href="#property" className="inline-block border border-accent text-accent hover:bg-accent hover:text-brand-black transition-colors px-6 py-2 uppercase tracking-wide text-sm rounded-sm">
                            Learn More
                        </a>
                    </div>

                    {/* Right — image/video slider */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-video w-full overflow-hidden rounded-sm group">
                            {slides.map((url, i) => (
                                <img
                                    key={i}
                                    src={url}
                                    alt={`About Us Slide ${i + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                />
                            ))}
                            
                            {/* Sound button overlay (like video) */}
                            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-brand-black/70 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                                <Volume2 size={16} className="text-white" />
                                <span className="text-xs font-medium uppercase tracking-wider">Sound on</span>
                            </div>

                            {/* Right side dots pagination inside the image container */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-white ${i === currentSlide ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/70'}`}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Counters */}
                <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-sm bg-white/5 backdrop-blur-sm" ref={ref}>
                    {counters.map((c, i) => (
                        <Counter key={c.label} {...c} start={started} index={i} />
                    ))}
                </div>
            </div>
            
            {/* Bottom line decorator */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/10"></div>
        </section>
    );
}
