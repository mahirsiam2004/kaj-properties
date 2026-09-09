export default function FeaturesSection() {
  const rooms = ['Master Bedroom', 'Guest Room', '3 Bathroom', 'Living & Dining', 'Kitchen', 'Special Balcony'];
  return (
    <section className="bg-brand-black text-white min-h-[100dvh] flex items-center border-t-4 border-brand-black" id="features">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20 fade-up py-4 md:py-8 lg:py-12 xl:py-16 w-full">
        <div className="flex flex-col lg:flex-row bg-brand-black text-white overflow-hidden rounded-sm border border-white/10">
          <div className="w-full lg:w-1/2 p-4 md:p-5 lg:p-8 xl:p-12 flex flex-col justify-center">
            <p className="text-accent uppercase font-bold tracking-widest text-xs md:text-xs lg:text-xs xl:text-sm mb-1.5 md:mb-2 xl:mb-3">Floor Plan</p>
            <h3 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-light mb-2 md:mb-3 xl:mb-4 text-white">1,800 Sq. Ft. of Thoughtful Space</h3>
            <p className="text-white/80 font-light leading-relaxed mb-3 md:mb-5 lg:mb-6 text-xs md:text-sm lg:text-sm xl:text-base text-justify">
              Every square foot is optimized for maximum comfort and natural ventilation. South-facing units ensure light all day long.
            </p>
            <a href="#contact" className="inline-flex items-center gap-1.5 md:gap-2 bg-accent text-white px-4 md:px-5 lg:px-6 xl:px-8 py-2 md:py-2.5 lg:py-3 xl:py-3.5 uppercase tracking-widest text-xs md:text-xs lg:text-xs xl:text-sm font-semibold hover:bg-white hover:text-brand-black transition-colors w-max rounded-sm">
              Request Floor Plan
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className="w-full lg:w-1/2 bg-white/5 relative flex items-center justify-center p-4 md:p-5 lg:p-8 xl:p-12 min-h-0 md:min-h-[280px] lg:min-h-[360px] xl:min-h-[420px]">
            <div className="grid grid-cols-2 gap-1.5 md:gap-2 lg:gap-3 xl:gap-4 w-full h-full text-center">
              {rooms.map(room => (
                <div key={room} className="border border-white/20 flex items-center justify-center p-2 md:p-3 lg:p-4 xl:p-5 text-xs md:text-sm lg:text-base xl:text-lg font-semibold tracking-wide hover:bg-accent hover:border-accent transition-colors">
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
