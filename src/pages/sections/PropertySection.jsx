import React, { useState, useEffect } from 'react';
import { MapPin, BedDouble, Bath, Maximize2, ArrowRight, ArrowLeft, X, Phone, Building2 } from 'lucide-react';
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
];

export default function PropertySection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featured = projects[currentIndex];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [currentIndex]);

    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center bg-brand-black" id="property">
            {/* Background Map/Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-60"
                style={{ backgroundImage: `url(${featured.mainBg})` }}
            >
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-brand-black/40"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 md:pt-20 lg:pt-16 min-h-full flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                    
                    {/* Left Column: Details */}
                    <div className="w-full lg:w-1/2 text-white">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                                <div className="bg-accent w-full h-full rounded-sm"></div>
                                <div className="bg-accent/50 w-full h-full rounded-sm"></div>
                                <div className="bg-accent/50 w-full h-full rounded-sm"></div>
                                <div className="bg-accent w-full h-full rounded-sm"></div>
                            </div>
                            <span className="text-accent uppercase font-semibold text-xs md:text-sm tracking-widest">{featured.status}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-4xl font-bold mb-3">{featured.name}</h3>
                        <p className="text-sm md:text-base text-white/80 font-light mb-8 max-w-lg">{featured.location}</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
                            <div className="flex flex-col border-l-2 border-white/20 pl-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <BedDouble size={18} className="text-accent" />
                                    <span className="font-bold text-lg md:text-xl">{featured.beds}</span>
                                </div>
                                <span className="text-[10px] md:text-sm font-light text-white/70 uppercase">Bedroom</span>
                            </div>
                            <div className="flex flex-col border-l-2 border-white/20 pl-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <Bath size={18} className="text-accent" />
                                    <span className="font-bold text-lg md:text-xl">{featured.baths}</span>
                                </div>
                                <span className="text-[10px] md:text-sm font-light text-white/70 uppercase">Bathroom</span>
                            </div>
                            <div className="flex flex-col border-l-2 border-white/20 pl-4 col-span-2 md:col-span-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <Maximize2 size={16} className="text-accent" />
                                    <span className="font-bold text-base md:text-xl">{featured.sqft} <span className="text-[10px] bg-white text-brand-black px-1 rounded-sm ml-1 uppercase">SQFT</span></span>
                                </div>
                                <span className="text-[10px] md:text-sm font-light text-white/70 uppercase">Flat size up to</span>
                            </div>
                        </div>

                        <button 
                            onClick={() => setIsModalOpen(true)} 
                            className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-brand-black transition-colors px-6 py-3 text-xs md:text-sm tracking-wide rounded-sm mb-12"
                        >
                            Project Details <ArrowRight size={16} />
                        </button>

                        <div className="flex items-end justify-between border-t border-white/10 pt-8 mt-auto">
                            <div className="flex items-center gap-4">
                                <span className="text-4xl md:text-5xl font-bold">1</span>
                                <span className="leading-tight text-[10px] uppercase tracking-widest font-semibold text-white/80">
                                    Number<br/>of projects
                                </span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm p-1">
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

                    {/* Right Column: Video */}
                    <div className="w-full lg:w-1/2 relative h-[300px] md:h-[500px]">
                        <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl bg-brand-black border border-white/5">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/vQYPO-BBAZ4?si=vQ0pS_HtBwdjXtCq" 
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
            </div>

            {/* Project Details Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-4 overflow-y-auto bg-brand-black/95 backdrop-blur-md">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    
                    {/* Modal Content */}
                    <div 
                        className="relative z-10 bg-[#121212] border border-white/10 w-full max-w-5xl min-h-screen md:min-h-0 md:max-h-[90vh] overflow-y-auto rounded-none md:rounded-sm shadow-2xl custom-scrollbar animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button 
                            className="fixed md:absolute top-4 right-4 md:top-6 md:right-6 text-white bg-accent/80 hover:bg-accent md:bg-white/5 md:text-white/50 md:hover:text-white transition-all z-[120] rounded-full p-3 md:p-2 shadow-xl"
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Side: Images */}
                            <div className="w-full lg:w-1/2 p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/5">
                                <div className="space-y-4">
                                    <h2 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Project Gallery</h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        {featured.images.map((img, i) => (
                                            <div key={i} className="relative aspect-video rounded-sm overflow-hidden border border-white/5 group">
                                                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-12 bg-white/5 p-6 rounded-sm border border-accent/20">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Phone className="text-accent" size={20} />
                                            <h4 className="text-white font-bold uppercase tracking-wider">Contact Us</h4>
                                        </div>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            Bachelor Gate, Ambagan Road, Jahangirnagar University.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Side: Details Content */}
                            <div className="w-full lg:w-1/2 p-6 lg:p-10 bg-white/[0.02]">
                                <div className="space-y-10">
                                    {/* Brand & Title */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Building2 size={16} className="text-accent" />
                                            <span className="text-accent uppercase text-[10px] font-bold tracking-[0.2em]">Kaj Properties & Developers</span>
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">Chhayabithi</h3>
                                        <p className="text-accent text-sm font-medium">Flat Share for Sale Near Jahangirnagar University</p>
                                    </div>
                                    
                                    {/* Implementation Steps */}
                                    <div className="space-y-4">
                                        <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2">Project Implementation</h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            <div className="bg-white/5 p-4 rounded-sm">
                                                <span className="text-accent font-bold mr-2 text-sm">Step 1:</span>
                                                <span className="text-white/80 text-sm italic">Purchase of land shares.</span>
                                            </div>
                                            <div className="bg-white/5 p-4 rounded-sm">
                                                <span className="text-accent font-bold mr-2 text-sm">Step 2:</span>
                                                <span className="text-white/80 text-sm italic">Construction of the building by paying the construction costs collectively in installments.</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Location Info */}
                                    <div className="space-y-4">
                                        <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2">Location Advantages</h4>
                                        <p className="text-white/60 text-sm italic">Located adjacent to the Dhaka-Aricha Highway.</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { k: 'North', v: 'Savar Golf Club' },
                                                { k: 'East', v: 'Savar Cantonment' },
                                                { k: 'South', v: 'Jahangirnagar University' }
                                            ].map(item => (
                                                <div key={item.k} className="border-l-2 border-accent pl-4">
                                                    <span className="block text-[10px] text-white/40 uppercase mb-1">{item.k}</span>
                                                    <span className="text-white text-sm font-medium">{item.v}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Summary Stats */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { l: 'Land Area', v: '18 Decimals' },
                                            { l: 'Flat Size', v: '1700 Sq. Ft.' },
                                            { l: 'Total Shares', v: '27' }
                                        ].map(stat => (
                                            <div key={stat.l} className="bg-white/5 p-4 text-center rounded-sm">
                                                <span className="block text-[10px] text-white/50 uppercase mb-1">{stat.l}</span>
                                                <span className="text-white font-bold text-sm">{stat.v}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Features Grid */}
                                    <div className="space-y-4 pb-10">
                                        <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2">Apartment Features</h4>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                                            {[
                                                '3 Bedrooms', '1 Guest Room', 'Dining & Drawing', 
                                                '4 Bathrooms', '6 Balconies', 'Standard Kitchen',
                                                'Parking Facility', 'Lift & Generator', 'CCTV Surveillance',
                                                'South-facing'
                                            ].map(feature => (
                                                <div key={feature} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                                    <span className="text-white/70 text-xs">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
