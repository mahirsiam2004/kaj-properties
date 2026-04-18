import React from 'react';
import { Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

const socials = [
    { label: 'Phone', href: 'tel:+8801774873972', icon: <Phone size={16} strokeWidth={1.5} /> },
    { label: 'Email', href: 'mailto:kazdevelopersteam@gmail.com', icon: <Mail size={16} strokeWidth={1.5} /> },
    { label: 'divider' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61561571349588', icon: <Facebook size={16} strokeWidth={1.5} /> },
];

const SocialSidebar = () => (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] bg-brand-black/90 backdrop-blur-sm border-l border-white/10 rounded-l-md px-2 py-6 hidden md:flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-6">
            {socials.map((item, i) => {
                if (item.label === 'divider') {
                    return <div key={i} className="w-8 h-px bg-white/20" />;
                }
                return (
                    <a
                        key={i}
                        href={item.href}
                        className="text-white hover:text-accent hover:scale-110 transition-all duration-300"
                        aria-label={item.label}
                    >
                        {item.icon}
                    </a>
                );
            })}
        </div>
        
        {/* Follow Text Rotated */}
        <div className="mt-4 writing-vertical-rl rotate-180 flex items-center gap-4">
            <span className="text-white/80 tracking-widest text-xs uppercase font-medium">Follow</span>
            <div className="w-px h-12 bg-accent opacity-70"></div>
        </div>
    </div>
);

export default SocialSidebar;