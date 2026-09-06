'use client';

import { useState } from 'react';
import { MapPin, BedDouble, Bath, Maximize2, ArrowRight, ArrowLeft, X, Phone, Building2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Chayabithi | Jahangirnagar University',
    status: 'Flat Share for Sale',
    location: 'Senwalia, Ashulia, Savar, Dhaka.',
    beds: '3', baths: '3', sqft: '1800',
    images: [
      '/assets/Chayabithi/KAJ POST 5.jpg',
      '/assets/Chayabithi/CHAYABITHI 7.jpg',
      '/assets/Chayabithi/vhayabithi_01.png',
    ],
    details: '18 Decimals Land. 27 Shares. 3 Beds, 3 Baths, 6 Balconies, CCTV, South-facing.',
  },
];

export default function PropertySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featured = projects[currentIndex];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex items-center bg-brand-black" id="property">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full bg-cover bg-right bg-no-repeat opacity-60" style={{ backgroundImage: `url(/assets/Projects/01.png)` }} />
        <div className="w-1/2 h-full bg-cover bg-left bg-no-repeat opacity-60" style={{ backgroundImage: `url(/assets/Projects/02.png)` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-transparent" />
        <div className="absolute inset-0 bg-brand-black/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10 w-full py-3 lg:py-12 max-h-[100dvh]">
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-12">
          {/* Left */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 grid grid-cols-2 gap-0.5">
                <div className="bg-accent w-full h-full rounded-sm" /><div className="bg-accent/50 w-full h-full rounded-sm" />
                <div className="bg-accent/50 w-full h-full rounded-sm" /><div className="bg-accent w-full h-full rounded-sm" />
              </div>
              <span className="text-accent uppercase font-semibold text-[8px] lg:text-xs tracking-widest">{featured.status}</span>
            </div>
            <h3 className="text-base lg:text-3xl font-bold mb-1 lg:mb-2">{featured.name}</h3>
            <p className="text-[9px] lg:text-sm text-white/80 font-light mb-2 lg:mb-5 max-w-lg">{featured.location}</p>

            <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-3 lg:mb-6">
              {[
                { icon: <BedDouble size={12} className="text-accent lg:w-4 lg:h-4" />, val: featured.beds, label: 'Bedroom' },
                { icon: <Bath size={12} className="text-accent lg:w-4 lg:h-4" />, val: featured.baths, label: 'Bathroom' },
                { icon: <Maximize2 size={10} className="text-accent lg:w-3.5 lg:h-3.5" />, val: featured.sqft, label: 'Flat size', sqft: true },
              ].map(({ icon, val, label, sqft }) => (
                <div key={label} className="flex flex-col border-l-2 border-white/20 pl-2">
                  <div className="flex items-center gap-1 mb-0.5">
                    {icon}
                    <span className="font-bold text-xs lg:text-lg">{val}
                      {sqft && <span className="text-[6px] lg:text-[8px] bg-white text-brand-black px-0.5 lg:px-1 rounded-sm ml-0.5 lg:ml-1 uppercase">SQFT</span>}
                    </span>
                  </div>
                  <span className="text-[7px] lg:text-xs font-light text-white/70 uppercase">{label}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 border border-white/30 text-white hover:bg-white hover:text-brand-black transition-colors px-3 lg:px-5 py-1 lg:py-2 text-[8px] lg:text-xs tracking-wide rounded-sm mb-3 lg:mb-6">
              Project Details <ArrowRight size={16} />
            </button>

            <div className="flex items-end justify-between border-t border-white/10 pt-2 lg:pt-5 mt-auto">
              <div className="flex items-center gap-2">
                <span className="text-xl lg:text-4xl font-bold">2</span>
                <span className="leading-tight text-[7px] lg:text-[9px] uppercase tracking-widest font-semibold text-white/80">Number<br />of projects</span>
              </div>
            </div>
          </div>

          {/* Right: Video */}
          <div className="w-full lg:w-1/2 relative h-[180px] lg:h-[380px]">
            <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl bg-brand-black border border-white/5">
              <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/vQYPO-BBAZ4?si=vQ0pS_HtBwdjXtCq"
                title="Chayabithi Property Tour" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-4 overflow-y-auto bg-brand-black/95 backdrop-blur-md">
          <div className="fixed inset-0 cursor-pointer" onClick={() => setIsModalOpen(false)} />
          <div className="relative z-10 bg-[#121212] border border-white/10 w-full max-w-5xl min-h-screen md:min-h-0 md:max-h-[90vh] overflow-y-auto rounded-none md:rounded-sm shadow-2xl scrollbar-thin"
            onClick={e => e.stopPropagation()}>
            <button className="fixed md:absolute top-4 right-4 md:top-6 md:right-6 text-white bg-accent/80 hover:bg-accent md:bg-white/5 md:text-white/50 md:hover:text-white transition-all z-[120] rounded-full p-3 md:p-2 shadow-xl"
              onClick={() => setIsModalOpen(false)} aria-label="Close">
              <X size={24} />
            </button>
            <div className="flex flex-col lg:flex-row">
              {/* Images */}
              <div className="w-full lg:w-1/2 p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/5">
                <h2 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 gap-4">
                  {featured.images.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-sm overflow-hidden border border-white/5 group">
                      <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  ))}
                </div>
                <div className="mt-12 bg-white/5 p-6 rounded-sm border border-accent/20">
                  <div className="flex items-center gap-3 mb-4"><Phone className="text-accent" size={20} /><h4 className="text-white font-bold uppercase tracking-wider">Contact Us</h4></div>
                  <p className="text-white/70 text-sm">Bachelor Gate, Ambagan Road, Jahangirnagar University.</p>
                </div>
              </div>
              {/* Details */}
              <div className="w-full lg:w-1/2 p-6 lg:p-10 bg-white/[0.02]">
                <div className="space-y-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2"><Building2 size={16} className="text-accent" /><span className="text-accent uppercase text-[10px] font-bold tracking-[0.2em]">Kaj Properties & Developers</span></div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">Chayabithi</h3>
                    <p className="text-accent text-sm font-medium">Flat Share for Sale Near Jahangirnagar University</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2">Project Implementation</h4>
                    {['Purchase of land shares.', 'Construction of the building by paying the construction costs collectively in installments.'].map((s, i) => (
                      <div key={i} className="bg-white/5 p-4 rounded-sm"><span className="text-accent font-bold mr-2 text-sm">Step {i + 1}:</span><span className="text-white/80 text-sm italic">{s}</span></div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2">Location Advantages</h4>
                    <p className="text-white/60 text-sm italic">Located adjacent to the Dhaka-Aricha Highway.</p>
                    <div className="grid grid-cols-2 gap-4">
                      {[{ k: 'North', v: 'Savar Golf Club' }, { k: 'East', v: 'Savar Cantonment' }, { k: 'South', v: 'Jahangirnagar University' }].map(item => (
                        <div key={item.k} className="border-l-2 border-accent pl-4">
                          <span className="block text-[10px] text-white/40 uppercase mb-1">{item.k}</span>
                          <span className="text-white text-sm font-medium">{item.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[{ l: 'Land Area', v: '18 Decimals' }, { l: 'Flat Size', v: '1700 Sq. Ft.' }, { l: 'Total Shares', v: '27' }].map(s => (
                      <div key={s.l} className="bg-white/5 p-4 text-center rounded-sm">
                        <span className="block text-[10px] text-white/50 uppercase mb-1">{s.l}</span>
                        <span className="text-white font-bold text-sm">{s.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4 pb-10">
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/10 pb-2">Apartment Features</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                      {['3 Bedrooms', 'Dining & Drawing', 'Standard Kitchen', '3 Bathrooms', '6 Balconies', 'South Facing', 'Parking Facility', 'Lift & Generator', 'CCTV Surveillance'].map(f => (
                        <div key={f} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-white/70 text-xs">{f}</span>
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
