import React, { useState, useEffect } from 'react';
import { MapPin, BedDouble, Bath, Maximize2, ArrowRight, ArrowLeft } from 'lucide-react';
import chayabithi1 from '../../assets/Chayabithi/CHAYABITHI 7.jpg';
import chayabithi2 from '../../assets/Chayabithi/KAJ POST 5.jpg';
import chayabithi3 from '../../assets/Chayabithi/vhayabithi_01.png';

const projects = [
    {
        id: 1,
        name: 'Chhayabithi | Jahangirnagar University',
        status: 'Flat Share for Sale',
        location: 'Bachelor Gate, Ambagan Road, Jahangirnagar University. Adjacent to Dhaka-Aricha Highway.',
        beds: '3+1',
        baths: '4',
        sqft: '1800',
        images: [
            chayabithi2,
            chayabithi1,
            chayabithi3
        ],
        mainBg: chayabithi3,
        details: '18 Decimals Land. 27 Shares. 3 Beds, 1 Guest Room, 4 Baths, 6 Balconies, CCTV, South-facing.'
    },
    {
        id: 2,
        name: 'Zubion Unison | Bashundhara R/A',
        status: 'Ongoing',
        location: 'Plot: 5732, 5781, Road: 46 (Butterfly), Block: N, Bashundhara R/A',
        beds: '3-4',
        baths: '3-6',
        sqft: '1400-2800',
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80'
        ],
        mainBg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=80'
    }
];

export default function PropertySection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featured = projects[currentIndex];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [currentIndex]);

    return (
        <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center" id="property">
            {/* Background Map/Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${featured.mainBg})` }}
            >
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-brand-black/40"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full fade-up">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Column: Details */}
                    <div className="w-full lg:w-1/2 text-white">
                        <h2 className="text-4xl md:text-5xl font-light mb-4">Featured Projects</h2>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                                <div className="bg-accent w-full h-full rounded-sm"></div>
                                <div className="bg-accent/50 w-full h-full rounded-sm"></div>
                                <div className="bg-accent/50 w-full h-full rounded-sm"></div>
                                <div className="bg-accent w-full h-full rounded-sm"></div>
                            </div>
                            <span className="text-accent uppercase font-semibold text-sm tracking-widest">{featured.status}</span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold mb-3">{featured.name}</h3>
                        <p className="text-white/80 font-light mb-8">{featured.location}</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                            <div className="flex flex-col border-l-2 border-white/20 pl-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <BedDouble size={18} className="text-accent" />
                                    <span className="font-bold text-xl">{featured.beds}</span>
                                </div>
                                <span className="text-sm font-light text-white/70">Bedroom</span>
                            </div>
                            <div className="flex flex-col border-l-2 border-white/20 pl-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <Bath size={18} className="text-accent" />
                                    <span className="font-bold text-xl">{featured.baths}</span>
                                </div>
                                <span className="text-sm font-light text-white/70">Bathroom</span>
                            </div>
                            <div className="flex flex-col border-l-2 border-white/20 pl-4 col-span-2 md:col-span-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <Maximize2 size={18} className="text-accent" />
                                    <span className="font-bold text-xl">{featured.sqft} <span className="text-xs bg-white text-brand-black px-1 rounded-sm">SQFT</span></span>
                                </div>
                                <span className="text-sm font-light text-white/70">Flat size up to</span>
                            </div>
                        </div>

                        <a href="#contact" className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-brand-black transition-colors px-6 py-3 text-sm tracking-wide rounded-sm mb-12">
                            Project Details <ArrowRight size={16} />
                        </a>

                        <div className="flex items-end justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-5xl font-bold">30</span>
                                <span className="leading-tight text-xs uppercase tracking-widest font-semibold text-white/80">
                                    Number<br/>of projects
                                </span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm p-1">
                                <a href="#projects" className="px-4 py-2 hover:text-accent transition-colors text-sm uppercase tracking-wider font-medium">
                                    View All Projects <ArrowRight size={14} className="inline ml-1" />
                                </a>
                                <div className="flex">
                                    <button 
                                        className="p-3 hover:bg-white/10 transition-colors border-l border-white/10"
                                        onClick={() => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                                    >
                                        <ArrowLeft size={16} />
                                    </button>
                                    <button 
                                        className="p-3 hover:bg-white/10 transition-colors border-l border-white/10"
                                        onClick={() => setCurrentIndex((prev) => (prev + 1) % projects.length)}
                                    >
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Slider */}
                    <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]">
                        <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl">
                            {featured.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt={`Featured Project Slide ${i}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                />
                            ))}
                            {/* Parking Space tag just for mock */}
                            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 text-white bg-brand-black/50 backdrop-blur-sm px-3 py-1 rounded-sm">
                                <Maximize2 size={14} />
                                <span className="text-xs font-semibold tracking-wider">PARKING SPACE</span>
                            </div>

                            {/* Sound off mock */}
                            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white bg-brand-black/50 backdrop-blur-sm px-3 py-1 rounded-sm">
                                <span className="text-xs font-semibold tracking-wider flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                    Sound off
                                </span>
                            </div>

                            {/* Right side dots */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
                                {featured.images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImageIndex(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-white ${i === currentImageIndex ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'}`}
                                        aria-label={`Featured image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom yellow accented pagination (mocking screenshot) */}
                <div className="absolute bottom-6 right-12 z-20 flex gap-2">
                    {[1,2,3,4,5,6,7].map((num) => (
                        <div key={num} className={`h-1 transition-all duration-300 ${num === 4 ? 'w-8 bg-accent' : 'w-4 bg-white/30'}`}></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
