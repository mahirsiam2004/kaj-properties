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
    return (
        <div className={`flex flex-col items-center justify-center p-4 md:p-6 pb-6 md:pb-6 border-b lg:border-b-0 border-white/10 ${index % 2 === 0 ? 'border-r' : 'lg:border-r'} last:border-r-0 last:border-b-0`}>
            <div className="text-2xl lg:text-4xl font-bold text-accent mb-2">
                {val}<span className="text-white">{suffix}</span>
            </div>
            <div className="text-[10px] md:text-sm uppercase tracking-wider text-white/70 text-center">{label}</div>
        </div>
    );
}

export default function AboutSection() {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-brand-black text-white relative overflow-hidden min-h-screen flex items-center py-20 md:py-32" id="about">
            <div className="container mx-auto px-6 lg:px-12 pt-32 md:pt-24 lg:pt-20 min-h-full flex flex-col justify-center">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 grid grid-cols-3 gap-1">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-accent' : 'bg-white/50'}`}></div>
                            ))}
                        </div>
                        <h2 className="text-2xl md:text-4xl font-light tracking-wide uppercase">About Us</h2>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24 items-center mb-16 md:mb-24">
                    {/* Left — text */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
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

                    {/* Right — video slider */}
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
                        <div className="relative aspect-video w-full overflow-hidden rounded-sm group bg-brand-black border border-white/10">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/nQD1CNlsArE?si=-54bb1Cdn4NIOdZl" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                className="absolute inset-0"
                            ></iframe>
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
