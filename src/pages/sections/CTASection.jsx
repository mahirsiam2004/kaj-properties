import React from 'react';
import { Phone, Mail, Facebook, MessageCircle } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="bg-brand-light pt-12 md:pt-24 pb-0" id="contact">
            <div className="container mx-auto px-6 lg:px-12 fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* For Clients */}
                    <div className="bg-white p-10 md:p-14 border border-brand-black/5 shadow-xl rounded-sm">
                        <p className="text-accent uppercase tracking-widest text-[10px] md:text-xs font-bold mb-3">Let's Connect</p>
                        <h2 className="text-3xl md:text-4xl font-light text-brand-black mb-4">For Clients</h2>
                        <p className="text-brand-black/70 leading-relaxed font-light text-base mb-8">
                            Explore premium living and smart investment opportunities with Kaz Properties.
                            From modern apartments to innovative commercial spaces, we craft environments
                            that elevate your lifestyle. Let's build your vision together.
                        </p>

                        <div className="flex items-center gap-6 mb-12 border-l-4 border-accent pl-6 bg-brand-light py-4">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80"
                                alt="Sales Manager"
                                className="w-16 h-16 object-cover rounded-full shadow-sm"
                            />
                            <div>
                                <div className="text-xl font-bold text-brand-black">Kaz Sales Team</div>
                                <div className="text-sm uppercase tracking-wider text-brand-black/60 mt-1">Manager | Sales</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <a href="tel:+8801774873972" className="flex items-center gap-3 text-brand-black hover:text-accent transition-colors border border-brand-black/5 p-4 rounded-sm">
                                <Phone size={20} className="text-accent" />
                                <span className="font-medium">+880 1774-873972</span>
                            </a>
                            <a href="https://wa.me/8801774873972" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-black hover:text-accent transition-colors border border-brand-black/5 p-4 rounded-sm">
                                <MessageCircle size={20} className="text-accent" />
                                <span className="font-medium">WhatsApp</span>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61561571349588" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-black hover:text-accent transition-colors border border-brand-black/5 p-4 rounded-sm">
                                <Facebook size={20} className="text-accent" />
                                <span className="font-medium">Facebook</span>
                            </a>
                            <a href="mailto:kazdevelopersteam@gmail.com" className="flex items-center gap-3 text-brand-black hover:text-accent transition-colors border border-brand-black/5 p-4 rounded-sm">
                                <Mail size={20} className="text-accent" />
                                <span className="font-medium">Email Us</span>
                            </a>
                        </div>
                    </div>

                    {/* For Landowners */}
                    <div className="bg-brand-black text-white p-10 md:p-14 rounded-sm shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        
                        <p className="text-accent uppercase tracking-widest text-[10px] md:text-xs font-bold mb-3">Partner With Us</p>
                        <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">For Landowners</h2>
                        <p className="text-white/70 leading-relaxed font-light text-base mb-10">
                            Maximize the potential of your land with Kaz Properties. We collaborate to transform
                            your property into landmark developments — from signature residences to thriving
                            commercial spaces. Together, we build projects that ensure lasting value.
                        </p>

                        <div className="flex flex-col gap-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium tracking-wide uppercase text-white/50">Full Name</label>
                                    <input type="text" placeholder="Your name" className="bg-white/5 border border-white/20 focus:border-accent outline-none text-white px-4 py-3 rounded-sm transition-colors" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium tracking-wide uppercase text-white/50">Phone</label>
                                    <input type="tel" placeholder="+880..." className="bg-white/5 border border-white/20 focus:border-accent outline-none text-white px-4 py-3 rounded-sm transition-colors" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium tracking-wide uppercase text-white/50">Email</label>
                                <input type="email" placeholder="your@email.com" className="bg-white/5 border border-white/20 focus:border-accent outline-none text-white px-4 py-3 rounded-sm transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium tracking-wide uppercase text-white/50">Message</label>
                                <textarea rows="3" placeholder="Tell us about your land..." className="bg-white/5 border border-white/20 focus:border-accent outline-none text-white px-4 py-3 rounded-sm transition-colors resize-none"></textarea>
                            </div>
                            <button className="bg-accent hover:bg-white text-white hover:text-brand-black transition-colors py-4 uppercase tracking-widest text-sm font-bold w-full rounded-sm mt-4">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
