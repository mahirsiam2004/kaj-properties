import React from 'react';
import {
    BedDouble, Bath, Wind, Car, Zap, Camera, UtensilsCrossed, BedSingle
} from 'lucide-react';

const features = [
    { icon: <BedDouble size={24} strokeWidth={1.5} />, label: '3 Bedrooms', desc: 'Spacious master & twin bedrooms with natural light.' },
    { icon: <BedSingle size={24} strokeWidth={1.5} />, label: '1 Guest Room', desc: 'Private guest suite for visiting family.' },
    { icon: <UtensilsCrossed size={24} strokeWidth={1.5} />, label: 'Dining & Drawing', desc: 'Open-plan living for modern lifestyles.' },
    { icon: <Bath size={24} strokeWidth={1.5} />, label: '4 Bathrooms', desc: 'Tiled, modern bathrooms with quality fixtures.' },
    { icon: <Wind size={24} strokeWidth={1.5} />, label: '6 Balconies', desc: 'Generous outdoor space with green views.' },
    { icon: <Car size={24} strokeWidth={1.5} />, label: 'Parking', desc: 'Dedicated covered parking for residents.' },
    { icon: <Zap size={24} strokeWidth={1.5} />, label: 'Generator & Lift', desc: 'Uninterrupted power and lift access always.' },
    { icon: <Camera size={24} strokeWidth={1.5} />, label: 'CCTV Security', desc: 'Round-the-clock security for peace of mind.' },
];

export default function FeaturesSection() {
    return (
        <section className="bg-brand-light py-12 md:py-24 border-t-4 border-brand-black" id="features">
            <div className="container mx-auto px-6 lg:px-12 fade-up">
                <div className="text-center md:text-left mb-12">
                    <p className="text-accent uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-2">Apartment Features</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-brand-black tracking-tight font-light">Everything Included</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-20">
                    {features.map((f, i) => (
                        <div className="bg-white border text-center md:text-left border-brand-black/5 p-4 md:p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-center" key={i}>
                            <div className="text-accent mb-3 md:mb-4 flex justify-center md:justify-start">
                                {React.cloneElement(f.icon, { size: "1.25rem" })}
                            </div>
                            <h4 className="text-xs md:text-lg font-semibold text-brand-black mb-1 md:mb-2">{f.label}</h4>
                            <p className="text-[10px] md:text-sm text-brand-black/70 font-light leading-relaxed hidden sm:block">{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Floor plan teaser */}
                <div className="flex flex-col lg:flex-row bg-brand-black text-white overflow-hidden rounded-sm">
                    <div className="w-full lg:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                        <p className="text-accent uppercase font-bold tracking-widest text-[10px] md:text-xs mb-3">Floor Plan</p>
                        <h3 className="text-2xl md:text-3xl font-light mb-4 text-white">1,800 Sq. Ft. of Thoughtful Space</h3>
                        <p className="text-white/80 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base text-justify">Every square foot is optimized for maximum comfort and natural ventilation. South-facing units ensure light all day long.</p>
                        <a href="#contact" className="inline-flex items-center gap-3 bg-accent text-white px-6 py-3 md:px-8 md:py-4 uppercase tracking-widest text-xs md:text-sm font-semibold hover:bg-white hover:text-brand-black transition-colors w-max rounded-sm">
                            Request Floor Plan
                            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 bg-white/5 relative flex items-center justify-center p-6 md:p-12 min-h-0 md:min-h-[400px]">
                        <div className="grid grid-cols-2 gap-2 md:gap-4 w-full h-full text-center">
                            {['Master Bedroom', 'Bedroom 2', 'Bedroom 3', 'Guest Room', 'Living & Dining', 'Kitchen'].map(room => (
                                <div className="border border-white/20 flex items-center justify-center p-4 md:p-6 text-sm md:text-xl font-semibold tracking-wide hover:bg-accent hover:border-accent transition-colors" key={room}>
                                    {room}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
