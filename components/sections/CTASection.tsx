import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-brand-light min-h-[100dvh] flex items-center" id="contact">
      <div className="container mx-auto px-4 lg:px-12 xl:px-20 fade-up w-full py-4 md:py-8 lg:py-12 xl:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          {/* For Clients */}
          <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10 border border-brand-black/5 shadow-xl rounded-sm">
            <p className="text-accent uppercase tracking-widest text-xs md:text-xs lg:text-xs xl:text-sm font-bold mb-1.5 md:mb-2 xl:mb-3">Let&rsquo;s Connect</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-brand-black mb-2 md:mb-3 xl:mb-4">For Clients</h2>
            <p className="text-brand-black/70 leading-relaxed font-light text-xs md:text-xs lg:text-sm xl:text-base mb-3 md:mb-5 xl:mb-6">
              Explore premium living and smart investment opportunities with Kaz Properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 xl:gap-4 mb-4 md:mb-6 xl:mb-7">
              {[
                { img: '/assets/team/Abu Bakar Siddique.jpg', name: 'Abu Bakar Siddique', role: 'CEO' },
                { img: '/assets/team/Sharmin Akter.jpeg', name: 'Sharmin Akter', role: 'Manager | Sales' },
              ].map(p => (
                <div key={p.name} className="flex-1 flex items-center gap-2 md:gap-3 border-l-4 border-accent pl-2 md:pl-3 xl:pl-4 bg-brand-light py-1.5 md:py-2 xl:py-3">
                  <img src={p.img} alt={p.name} className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 object-cover rounded-full shadow-sm" />
                  <div>
                    <div className="text-xs md:text-sm xl:text-base font-bold text-brand-black">{p.name}</div>
                    <div className="text-xs md:text-xs xl:text-sm uppercase tracking-wider text-brand-black/60 mt-0.5">{p.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 xl:gap-4">
              <a href="tel:+8801774873972" className="flex items-center gap-1.5 md:gap-2 text-brand-black hover:text-accent transition-colors border border-brand-black/5 p-2 md:p-3 xl:p-4 rounded-sm">
                <Phone size={14} className="text-accent shrink-0 xl:w-5 xl:h-5" />
                <div className="flex flex-col"><span className="font-medium text-xs md:text-xs xl:text-sm">+880 1774-873972</span><span className="text-xs md:text-xs uppercase tracking-wider text-brand-black/50">CEO</span></div>
              </a>
              <a href="tel:01913715734" className="flex items-center gap-1.5 md:gap-2 text-brand-black hover:text-accent transition-colors border border-brand-black/5 p-2 md:p-3 xl:p-4 rounded-sm">
                <Phone size={14} className="text-accent shrink-0 xl:w-5 xl:h-5" />
                <div className="flex flex-col"><span className="font-medium text-xs md:text-xs xl:text-sm">01913-715734</span><span className="text-xs md:text-xs uppercase tracking-wider text-brand-black/50">Sales</span></div>
              </a>
              <a href="https://wa.me/8801774873972" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 md:gap-2 text-brand-black hover:text-accent transition-colors border border-brand-black/5 p-2 md:p-3 xl:p-4 rounded-sm">
                <MessageCircle size={14} className="text-accent shrink-0 xl:w-5 xl:h-5" /><span className="font-medium text-xs md:text-xs xl:text-sm">WhatsApp</span>
              </a>
              <a href="mailto:kazdevelopersteam@gmail.com" className="flex items-center gap-1.5 md:gap-2 text-brand-black hover:text-accent transition-colors border border-brand-black/5 p-2 md:p-3 xl:p-4 rounded-sm">
                <Mail size={14} className="text-accent shrink-0 xl:w-5 xl:h-5" /><span className="font-medium text-xs md:text-xs xl:text-sm">Email Us</span>
              </a>
            </div>
          </div>

          {/* For Landowners */}
          <div className="bg-brand-black text-white p-4 md:p-6 lg:p-8 xl:p-10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <p className="text-accent uppercase tracking-widest text-xs md:text-xs lg:text-xs xl:text-sm font-bold mb-1.5 md:mb-2 xl:mb-3">Partner With Us</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mb-2 md:mb-3 xl:mb-4 text-white">For Landowners</h2>
            <p className="text-white/70 leading-relaxed font-light text-xs md:text-xs lg:text-sm xl:text-base mb-4 md:mb-6 xl:mb-7">
              Maximize the potential of your land with Kaz Properties.
            </p>
            <div className="flex flex-col gap-3 md:gap-4 xl:gap-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 xl:gap-5">
                <div className="flex flex-col gap-1 md:gap-1.5">
                  <label className="text-xs md:text-xs xl:text-sm font-medium tracking-wide uppercase text-white/50">Full Name</label>
                  <input type="text" placeholder="Your name" className="bg-white/5 border border-white/20 focus:border-accent outline-none text-white px-2.5 md:px-3 xl:px-4 py-1.5 md:py-2 xl:py-3 rounded-sm transition-colors text-xs md:text-sm xl:text-base" />
                </div>
                <div className="flex flex-col gap-1 md:gap-1.5">
                  <label className="text-xs md:text-xs xl:text-sm font-medium tracking-wide uppercase text-white/50">Phone</label>
                  <input type="tel" placeholder="+880..." className="bg-white/5 border border-white/20 focus:border-accent outline-none text-white px-2.5 md:px-3 xl:px-4 py-1.5 md:py-2 xl:py-3 rounded-sm transition-colors text-xs md:text-sm xl:text-base" />
                </div>
              </div>
              <div className="flex flex-col gap-1 md:gap-1.5">
                <label className="text-xs md:text-xs xl:text-sm font-medium tracking-wide uppercase text-white/50">Email</label>
                <input type="email" placeholder="your@email.com" className="bg-white/5 border border-white/20 focus:border-accent outline-none text-white px-2.5 md:px-3 xl:px-4 py-1.5 md:py-2 xl:py-3 rounded-sm transition-colors text-xs md:text-sm xl:text-base" />
              </div>
              <div className="flex flex-col gap-1 md:gap-1.5">
                <label className="text-xs md:text-xs xl:text-sm font-medium tracking-wide uppercase text-white/50">Message</label>
                <textarea rows={2} placeholder="Tell us about your land..." className="bg-white/5 border border-white/20 focus:border-accent outline-none text-white px-2.5 md:px-3 xl:px-4 py-1.5 md:py-2 xl:py-3 rounded-sm transition-colors resize-none text-xs md:text-sm xl:text-base" />
              </div>
              <button className="bg-accent hover:bg-white text-white hover:text-brand-black transition-colors py-2 md:py-3 xl:py-4 uppercase tracking-widest text-xs md:text-xs xl:text-sm font-bold w-full rounded-sm mt-1 md:mt-2">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
