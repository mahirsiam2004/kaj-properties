import React from 'react';
import { ArrowRight } from 'lucide-react';

const members = [
    {
        title: 'REAL ESTATE & HOUSING ASSOCIATION OF BANGLADESH',
        subtitle: 'Kaz Properties is member of REHAB',
        img: 'https://via.placeholder.com/400x150/ffffff/000000?text=REHAB+Logo',
    },
    {
        title: 'NATIONAL HOUSING AUTHORITY',
        subtitle: 'Kaz Properties is member of NHA',
        img: 'https://via.placeholder.com/400x150/ffffff/000000?text=NHA+Logo',
    },
    {
        title: 'RAJDHANI UNNAYAN KARTRIPAKKHA',
        subtitle: 'Kaz Properties is member of Rajuk',
        img: 'https://via.placeholder.com/400x150/ffffff/000000?text=RAJUK+Logo',
    }
];

export default function MembershipSection() {
    return (
        <section className="bg-brand-black py-24 relative overflow-hidden" id="businesses">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 fade-up">
                {/* Header */}
                <div className="relative mb-12">
                    <h2 className="text-3xl md:text-4xl text-white font-light relative z-10">
                        Kaz Properties Membership
                    </h2>
                    {/* Ghost Text */}
                    <div className="absolute -top-6 left-0 text-[60px] md:text-[80px] font-bold text-white/5 whitespace-nowrap pointer-events-none select-none z-0 tracking-widest uppercase">
                        MEMBERSHIP
                    </div>
                </div>

                <div className="relative flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10">
                        {members.map((m, i) => (
                            <div key={i} className="bg-[#1a1a1a] border border-white/5 hover:border-accent transition-colors p-8 flex flex-col justify-between group">
                                <div>
                                    <div className="bg-white p-4 mb-8 flex items-center justify-center min-h-[140px] rounded-sm">
                                        {/* Mock Logo */}
                                        <img src={m.img} alt={m.title} className="max-h-24 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-white font-semibold text-lg leading-snug mb-3 pr-4">
                                        {m.title}
                                    </h3>
                                    <p className="text-white/70 font-light text-sm mb-12">
                                        {m.subtitle}
                                    </p>
                                </div>
                                <a href="#" className="inline-flex items-center gap-2 bg-white/10 text-white w-max px-6 py-2 rounded-sm text-sm hover:bg-accent hover:text-brand-black transition-colors shadow-sm">
                                    Visit <ArrowRight size={14} />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots (mocking the right edge dots on screenshot) */}
                    <div className="hidden lg:flex flex-col gap-3 absolute -right-6 top-1/2 -translate-y-1/2">
                        {[1,2,3,4,5,6,7,8].map((num) => (
                            <button
                                key={num}
                                className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${num === 6 ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50 opacity-40 hover:opacity-100'}`}
                                aria-label={`Pagination ${num}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
