import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Md. Rafiqul Islam',
        role: 'Homeowner — Chayabithi',
        quote: 'As a landowner, we chose Kaz Properties for their proven expertise, modern design approach, and strong commitment to timely project delivery. Their transparent communication and dedicated quality control impressed us from the start.',
        rating: 5,
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    },
    {
        name: 'Fatema Begum',
        role: 'Resident — Chayabithi',
        quote: 'The land-share model was something I had never heard of before. Kaz Properties explained everything clearly and helped us save nearly 40% compared to buying a flat the traditional way. We are so happy with our home.',
        rating: 5,
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    },
    {
        name: 'Karim Hossain',
        role: 'Investor — Chayabithi',
        quote: 'The young, innovative management team\'s high vision and professionalism gave us confidence to partner with them. The project was completed on schedule and the quality exceeded our expectations.',
        rating: 5,
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent(c => (c + 1) % testimonials.length);

    const t = testimonials[current];

    return (
        <section className="bg-white min-h-screen flex items-start md:items-center overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6 lg:px-12 pt-32 md:pt-24 lg:pt-20 fade-up mb-12">
                <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-16 lg:gap-24 items-center">
                    
                    {/* Thumbnails */}
                    <div className="w-full lg:w-1/3 flex lg:flex-col gap-4 justify-center">
                        {testimonials.map((item, i) => (
                            <button
                                key={i}
                                className={`relative overflow-hidden rounded-full transition-all duration-300 transform outline-none ${i === current ? 'w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 shadow-xl ring-4 ring-accent ring-offset-4' : 'w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-50 hover:opacity-100 hover:scale-105'}`}
                                onClick={() => setCurrent(i)}
                            >
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
 
                    {/* Content */}
                    <div className="w-full lg:w-2/3">
                        <p className="text-accent tracking-widest text-[10px] md:text-sm font-semibold uppercase mb-4">Happy Clients</p>
                        <h2 className="text-2xl md:text-5xl tracking-tight text-brand-black mb-6 md:mb-8 font-light leading-tight">
                            What Customers Say About Us
                        </h2>
 
                        <div className="flex gap-2 mb-6">
                            {Array.from({ length: t.rating }).map((_, i) => (
                                <Star key={i} size={20} fill="#BE9F98" color="#BE9F98" className="md:w-6 md:h-6" />
                            ))}
                        </div>
 
                        <blockquote className="text-lg md:text-3xl text-brand-black/90 font-light leading-relaxed mb-6 md:mb-10 min-h-[140px] md:min-h-[160px]">
                            "{t.quote}"
                        </blockquote>
 
                        <div className="flex items-center gap-6 mb-8 md:mb-12">
                            <img src={t.img} alt={t.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover lg:hidden" />
                            <div>
                                <div className="text-lg md:text-xl font-bold text-brand-black">{t.name}</div>
                                <div className="text-brand-black/60 uppercase text-[10px] md:text-sm tracking-wide mt-1">{t.role}</div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center gap-8">
                            <button className="p-4 rounded-full border border-brand-black/10 hover:bg-brand-black hover:text-white transition-colors text-brand-black" onClick={prev} aria-label="Previous">
                                <ChevronLeft size={24} />
                            </button>
                            <div className="flex gap-3">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-accent scale-125' : 'bg-brand-black/20 hover:bg-accent/50'}`}
                                        onClick={() => setCurrent(i)}
                                    />
                                ))}
                            </div>
                            <button className="p-4 rounded-full border border-brand-black/10 hover:bg-brand-black hover:text-white transition-colors text-brand-black" onClick={next} aria-label="Next">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
