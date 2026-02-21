import React from 'react';
import { Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

// X/Twitter not in lucide-react core, using inline SVG
const XIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const socials = [
    { label: 'Phone', href: 'tel:+8801XXXXXXXXX', icon: <Phone size={15} strokeWidth={1.5} /> },
    { label: 'Email', href: 'mailto:info@kajproperties.com', icon: <Mail size={15} strokeWidth={1.5} /> },
    { label: 'divider' },
    { label: 'Facebook', href: '#', icon: <Facebook size={15} strokeWidth={1.5} /> },
    { label: 'X', href: '#', icon: <XIcon /> },
    { label: 'LinkedIn', href: '#', icon: <Linkedin size={15} strokeWidth={1.5} /> },
    { label: 'Instagram', href: '#', icon: <Instagram size={15} strokeWidth={1.5} /> },
];

const SocialSidebar = () => (
    <div className="social-sidebar">
        <div className="social-sidebar-inner">
            {socials.map((item, i) => {
                if (item.label === 'divider') {
                    return <div key="divider" className="social-sidebar-divider" />;
                }
                return (
                    <a
                        key={item.label}
                        href={item.href}
                        className="social-sidebar-link"
                        aria-label={item.label}
                        style={{ animationDelay: `${i * 0.08 + 0.3}s` }}
                    >
                        {item.icon}
                    </a>
                );
            })}
            <div className="social-sidebar-follow">
                <span>FOLLOW</span>
            </div>
            <div className="social-sidebar-scrollbar">
                <div className="social-sidebar-scrollthumb" />
            </div>
        </div>
    </div>
);

export default SocialSidebar;