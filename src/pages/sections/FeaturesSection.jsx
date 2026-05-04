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
        <section className="bg-brand-black text-white min-h-[100dvh] flex items-center border-t-4 border-brand-black" id="features">
            <div className="container mx-auto px-4 lg:px-12 fade-up py-4 md:py-8 lg:py-12 w-full">
                {/* Floor plan teaser */}
                <div className="flex flex-col lg:flex-row bg-brand-black text-white overflow-hidden rounded-sm border border-white/10">
                    <div className="w-full lg:w-1/2 p-4 md:p-5 lg:p-8 flex flex-col justify-center">
                        <p className="text-accent uppercase font-bold tracking-widest text-[8px] md:text-[9px] lg:text-xs mb-1.5 md:mb-2">Floor Plan</p>
                        <h3 className="text-base md:text-xl lg:text-2xl font-light mb-2 md:mb-3 text-white">1,800 Sq. Ft. of Thoughtful Space</h3>
                        <p className="text-white/80 font-light leading-relaxed mb-3 md:mb-5 lg:mb-6 text-[10px] md:text-xs lg:text-sm text-justify">Every square foot is optimized for maximum comfort and natural ventilation. South-facing units ensure light all day long.</p>
                        <a href="#contact" className="inline-flex items-center gap-1.5 md:gap-2 bg-accent text-white px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 uppercase tracking-widest text-[9px] md:text-[10px] lg:text-xs font-semibold hover:bg-white hover:text-brand-black transition-colors w-max rounded-sm">
                            Request Floor Plan
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="md:w-4 md:h-4">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 bg-white/5 relative flex items-center justify-center p-4 md:p-5 lg:p-8 min-h-0 md:min-h-[280px] lg:min-h-[320px]">
                        <div className="grid grid-cols-2 gap-1.5 md:gap-2 lg:gap-3 w-full h-full text-center">
                            {['Master Bedroom', 'Guest Room', '3 Bathroom', 'Living & Dining', 'Kitchen', 'Special Balcony'].map(room => (
                                <div className="border border-white/20 flex items-center justify-center p-2 md:p-3 lg:p-4 text-[10px] md:text-xs lg:text-base font-semibold tracking-wide hover:bg-accent hover:border-accent transition-colors" key={room}>
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
