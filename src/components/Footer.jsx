import React from 'react';
import { NavLink } from 'react-router';
import { Logo } from './logo/Logo';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => (
    <footer className="relative bg-brand-light text-brand-black pt-20 overflow-hidden border-t border-gray-100">
        {/* Subtle Watermark/Sketch representation (using CSS pattern or faint SVG) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Top Area: Logo & Vision */}
            <div className="flex flex-col items-center text-center mb-16">
                <Logo light={false} />
                <p className="mt-6 text-sm lg:text-base font-light max-w-2xl text-brand-black/70">
                    Our vision is to create the ideal living environment for all people, where they can thrive and flourish
                </p>
            </div>

            {/* Middle Area: Columns */}
            <div className="flex flex-col md:flex-row justify-center md:gap-32 gap-12 mb-16 text-center md:text-left">
                {/* Contact Info */}
                <div>
                    <h6 className="text-xl font-semibold mb-6">Contact Info</h6>
                    <div className="space-y-4 text-sm text-brand-black/70">
                        <div>
                            <p className="font-medium text-brand-black mb-1">Corporate Office:</p>
                            <p>Bachelor Gate, Ambagan Road,</p>
                            <p>Jahangirnagar University,</p>
                            <p>Savar, Dhaka, Bangladesh</p>
                        </div>
                        <div className="pt-4">
                            <p className="font-semibold">+880 1774-873972</p>
                            <p className="font-semibold">kazdevelopersteam@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h6 className="text-xl font-semibold mb-6">Support</h6>
                    <div className="flex flex-col space-y-3 text-sm text-gray-700">
                        <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-accent transition-colors">Terms &amp; Condition</a>
                        <a href="#" className="hover:text-accent transition-colors">Support Center</a>
                        <a href="#" className="hover:text-accent transition-colors">FAQ</a>
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                <span className="font-semibold text-lg">Social Media</span>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/profile.php?id=61561571349588" target="_blank" rel="noopener noreferrer" className="bg-brand-black text-white p-2 rounded-full hover:bg-accent transition-colors" aria-label="Facebook">
                        <Facebook size={18} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="bg-brand-black text-white p-2 rounded-full hover:bg-accent transition-colors" aria-label="LinkedIn">
                        <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="bg-brand-black text-white p-2 rounded-full hover:bg-accent transition-colors" aria-label="Twitter / X">
                        <Twitter size={18} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="bg-brand-black text-white p-2 rounded-full hover:bg-accent transition-colors" aria-label="YouTube">
                        <Youtube size={18} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="bg-brand-black text-white p-2 rounded-full hover:bg-accent transition-colors" aria-label="Instagram">
                        <Instagram size={18} strokeWidth={1.5} />
                    </a>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-brand-black py-6 mt-8">
            <p className="text-center text-white/80 text-sm font-light">
                © {new Date().getFullYear()} Kaz Properties &amp; Developers. All Rights Reserved.
            </p>
        </div>
    </footer>
);

export default Footer;
