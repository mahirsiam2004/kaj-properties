import React, { useState, useEffect, useRef } from 'react';

export default function PropertyShowcase() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="bg-brand-black py-24 relative overflow-hidden h-screen flex flex-col justify-center" 
            id="showcase"
        >
            <div className="container mx-auto px-6 lg:px-12 relative z-10 fade-up">
                {/* Header */}
                <div className="relative mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-light relative z-10">
                        Property Showcase
                    </h2>
                    {/* Ghost Text */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 text-[60px] md:text-[80px] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none z-0 tracking-widest uppercase">
                        SHOWCASE
                    </div>
                </div>

                {/* Video Container */}
                <div className="relative w-full aspect-video md:max-w-5xl mx-auto rounded-sm overflow-hidden shadow-2xl border border-white/10 group bg-black/40">
                    {isVisible ? (
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/Ou75T-40wuw?si=TspKboh_eldynj8D&autoplay=1&loop=1&playlist=Ou75T-40wuw&controls=1&showinfo=0&rel=0" 
                            title="Property Showcase Video" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="scale-105 group-hover:scale-100 transition-transform duration-1000"
                        ></iframe>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/20">
                            <span className="text-xs tracking-[0.3em] uppercase">Loading Preview...</span>
                        </div>
                    )}
                    
                    {/* Overlay for premium look */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-brand-black/40 via-transparent to-transparent"></div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 -right-20 w-64 h-64 bg-accent/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-accent/5 blur-[120px] rounded-full"></div>
        </section>
    );
}
