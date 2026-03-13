import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-[#faf7f5] px-6 py-20 md:py-32 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#a07167]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-[#be9f98]/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-white/50 backdrop-blur-sm border border-[#a07167]/10 rounded-full shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a07167] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a07167]"></span>
                    </span>
                    <span className="uppercase text-sm md:text-base tracking-[0.1em] text-[#a07167] font-bold">
                        Kaz Properties & Developers
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#2c2622] leading-[1.1] mb-8 tracking-tight">
                    Your Abode of Peace
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    <span className="text-[#2c2622] font-medium border-b border-[#a07167]/30">Kaz Properties</span> makes luxury living accessible 
                    through innovative land-share model with up to <span className="text-[#a07167] font-semibold">40% savings</span>.
                </p>

                {/* Refined Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <a
                        href="#about"
                        className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#a07167] text-white text-sm font-semibold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-[#8c5e54] shadow-xl hover:shadow-[#a07167]/20 rounded-sm"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Learn More
                            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>

                    <a
                        href="#property"
                        className="inline-flex items-center justify-center px-10 py-4 border border-[#a07167] text-[#a07167] text-sm font-semibold tracking-widest uppercase hover:bg-[#a07167] hover:text-white transition-all duration-300 rounded-sm"
                    >
                        View Projects
                    </a>
                </div>

                {/* Quick Stats - Company Focus */}
                <div className="mt-24 pt-12 border-t border-[#a07167]/10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto">
                    {[
                        { num: '4+', label: 'Years Experience', unit: '' },
                        { num: '100%', label: 'Client Satisfaction', unit: '' },
                        { num: '27', label: 'Happy Families', unit: '' },
                        { num: '40%', label: 'Average Savings', unit: '' },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="flex items-baseline">
                                <span className="text-4xl md:text-5xl font-light text-[#2c2622]">{item.num}</span>
                                <span className="text-xl text-[#a07167] ml-0.5">{item.unit}</span>
                            </div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-2 font-medium">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}