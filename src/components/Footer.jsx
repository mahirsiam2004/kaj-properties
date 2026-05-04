import React from 'react';
import { NavLink } from 'react-router';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => (
    <footer className="relative bg-brand-light text-brand-black h-full min-h-[100dvh] flex flex-col overflow-hidden border-t border-gray-100">
        {/* Subtle Watermark/Sketch representation (using CSS pattern or faint SVG) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="container mx-auto px-4 lg:px-12 relative z-10 w-full py-6 md:py-12 lg:py-16 flex-1 flex flex-col justify-center">
            {/* Top Area: Vision */}
            <div className="flex flex-col items-center text-center mb-6 md:mb-10">
                <p className="text-[10px] md:text-xs lg:text-sm font-light max-w-2xl text-brand-black/70">
                    Our vision is to create the ideal living environment for all people, where they can thrive and flourish
                </p>
            </div>

            {/* Middle Area: Columns */}
            <div className="flex flex-col md:flex-row justify-center md:gap-12 lg:gap-20 gap-6 md:gap-8 mb-6 md:mb-10 text-center md:text-left">
                {/* Contact Info */}
                <div>
                    <h6 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Contact Info</h6>
                    <div className="space-y-2 md:space-y-3 text-[10px] md:text-xs text-brand-black/70">
                        <div>
                            <p className="font-medium text-brand-black mb-1">Corporate Office:</p>
                            <p>Bachelor Gate, Ambagan Road,</p>
                            <p>Jahangirnagar University,</p>
                            <p>Savar, Dhaka, Bangladesh</p>
                        </div>
                        <div className="pt-2 md:pt-3">
                            <p className="font-semibold">+880 1774-873972</p>
                            <p className="font-semibold">kazdevelopersteam@gmail.com</p>
                        </div>
                    </div>
                </div>

             
                <div>
                    <h6 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Support</h6>
                    <div className="flex flex-col space-y-1.5 md:space-y-2 text-[10px] md:text-xs text-gray-700">
                        <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-accent transition-colors">Terms &amp; Condition</a>
                        <a href="#" className="hover:text-accent transition-colors">Support Center</a>
                        <a href="#" className="hover:text-accent transition-colors">FAQ</a>
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4">
                <span className="font-semibold text-xs md:text-sm">Social Media</span>
                <div className="flex gap-2 md:gap-3">
                    <a href="https://www.facebook.com/profile.php?id=61561571349588" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white p-1.5 md:p-2 rounded-full hover:bg-accent transition-colors" aria-label="Facebook">
                        <Facebook size={14} strokeWidth={1.5} className="md:w-4 md:h-4" />
                    </a>
                    <a href="#" className="bg-brand-black text-white p-1.5 md:p-2 rounded-full hover:bg-accent transition-colors" aria-label="LinkedIn">
                        <Linkedin size={14} strokeWidth={1.5} className="md:w-4 md:h-4" />
                    </a>
                    <a href="#" className="bg-brand-black text-white p-1.5 md:p-2 rounded-full hover:bg-accent transition-colors" aria-label="Twitter / X">
                        <Twitter size={14} strokeWidth={1.5} className="md:w-4 md:h-4" />
                    </a>
                    <a href="#" className="bg-brand-black text-white p-1.5 md:p-2 rounded-full hover:bg-accent transition-colors" aria-label="YouTube">
                        <Youtube size={14} strokeWidth={1.5} className="md:w-4 md:h-4" />
                    </a>
                    <a href="#" className="bg-brand-black text-white p-1.5 md:p-2 rounded-full hover:bg-accent transition-colors" aria-label="Instagram">
                        <Instagram size={14} strokeWidth={1.5} className="md:w-4 md:h-4" />
                    </a>
                </div>
            </div>
        </div>

        {/* Bottom Bar - Full width black section at the bottom */}
        <div className="bg-brand-black py-3 md:py-4 w-full mt-auto relative z-10">
            <div className="container mx-auto px-4 lg:px-12">
                <div className="flex flex-col items-center gap-1 md:gap-1.5">
                    <p className="text-center text-white/80 text-[10px] md:text-xs font-light">
                        © {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.
                    </p>
                    <p className="text-center text-white/50 text-[9px] md:text-[10px] font-light">
                        Developed by <a href="https://gentrixit.net/" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium transition-colors underline decoration-white/30 hover:decoration-accent underline-offset-2">Gentrix IT</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
