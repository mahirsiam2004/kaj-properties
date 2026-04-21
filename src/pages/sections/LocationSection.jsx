import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ExternalLink } from 'lucide-react';

// Premium 'K' marker icon
const makeIcon = (active = false) => new L.DivIcon({
    className: '',
    html: `<div style="
        background: ${active ? '#BE9F98' : 'rgba(18,18,18,0.85)'};
        backdrop-filter: blur(8px);
        color: #fff;
        width: 44px; height: 44px;
        display: flex; align-items: center; justify-content: center;
        border-radius: 50%;
        border: 2px solid ${active ? '#fff' : '#BE9F98'};
        font-weight: 800;
        font-size: 17px;
        box-shadow: 0 4px 24px rgba(190,159,152,0.35), 0 0 0 6px rgba(190,159,152,0.15);
        transition: all 0.3s;
        font-family: sans-serif;
        letter-spacing: -1px;
    ">K</div>`,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -26],
});

const locations = [
    {
        name: 'Chayabithi',
        area: 'Senwalia, Ashulia, Savar',
        city: 'Dhaka',
        lat: 23.8955,
        lng: 90.3212,
        mapUrl: 'https://maps.app.goo.gl/UDWjGdeHk4AG6XJe6',
        tag: 'Flat Share for Sale',
    },
    {
        name: 'KAJ Project',
        area: 'Jahangirnagar University',
        city: 'Savar, Dhaka',
        lat: 23.8760,
        lng: 90.2755,
        mapUrl: 'https://maps.app.goo.gl/yPWpcXj4djTQnarG8',
        tag: 'Upcoming',
    },
    {
        name: 'KAJ Project',
        area: 'Ashulia',
        city: 'Savar, Dhaka',
        lat: 23.9004,
        lng: 90.3410,
        mapUrl: 'https://maps.app.goo.gl/Fz8LJ6eJHn1Trpug6',
        tag: 'Upcoming',
    },
];

export default function LocationSection() {
    const [isClient, setIsClient] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    useEffect(() => { setIsClient(true); }, []);

    // Center point between all 3
    const center = [23.891, 90.312];

    return (
        <section className="relative w-full h-full min-h-screen bg-[#111] overflow-hidden" id="location">

            {/* Dark map fills the full background */}
            {isClient && (
                <div className="absolute inset-0 z-0">
                    <MapContainer
                        center={center}
                        zoom={12}
                        scrollWheelZoom={false}
                        zoomControl={false}
                        attributionControl={false}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {/* Dark / satellite-dark tile */}
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            attribution='&copy; OpenStreetMap &copy; CARTO'
                        />
                        {locations.map((loc, i) => (
                            <Marker
                                key={i}
                                position={[loc.lat, loc.lng]}
                                icon={makeIcon(activeIdx === i)}
                                eventHandlers={{ click: () => setActiveIdx(i) }}
                            >
                                <Popup
                                    closeButton={false}
                                    className="kaj-popup"
                                >
                                    <div style={{
                                        background: '#121212',
                                        color: '#fff',
                                        padding: '12px 16px',
                                        borderRadius: '4px',
                                        border: '1px solid rgba(190,159,152,0.3)',
                                        minWidth: '160px',
                                        fontSize: '13px',
                                    }}>
                                        <div style={{ color: '#BE9F98', fontWeight: '700', marginBottom: '4px', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                            {loc.tag}
                                        </div>
                                        <div style={{ fontWeight: '600', marginBottom: '2px' }}>{loc.name}</div>
                                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>{loc.area}</div>
                                        <a
                                            href={loc.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '4px',
                                                marginTop: '10px',
                                                color: '#BE9F98',
                                                textDecoration: 'none',
                                                fontSize: '10px',
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                fontWeight: '600',
                                            }}
                                        >
                                            Open in Maps ↗
                                        </a>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    {/* Gradient overlays for dark blending */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111]/90 via-[#111]/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-transparent to-[#111]/40 pointer-events-none" />
                </div>
            )}

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between px-6 lg:px-14 pt-24 pb-10 pointer-events-none">

                {/* Top: Header */}
                <div className="fade-up pointer-events-none">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                            <div className="bg-accent w-full h-full rounded-sm" />
                            <div className="bg-accent/50 w-full h-full rounded-sm" />
                            <div className="bg-accent/50 w-full h-full rounded-sm" />
                            <div className="bg-accent w-full h-full rounded-sm" />
                        </div>
                        <span className="text-accent uppercase font-semibold text-xs tracking-widest">Where We Build</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
                        Project <span className="font-bold">Locations</span>
                    </h2>
                </div>

                {/* Bottom: Location Cards */}
                <div className="flex flex-col sm:flex-row gap-3 pointer-events-auto fade-up">
                    {locations.map((loc, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIdx(i)}
                            className={`text-left flex-1 border backdrop-blur-md px-5 py-4 transition-all duration-300 rounded-sm
                                ${activeIdx === i
                                    ? 'bg-accent/20 border-accent shadow-[0_0_30px_rgba(190,159,152,0.2)]'
                                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                }
                            `}
                        >
                            <span className={`block text-[9px] uppercase tracking-[0.2em] font-bold mb-1
                                ${activeIdx === i ? 'text-accent' : 'text-white/40'}`}>
                                {loc.tag}
                            </span>
                            <span className="block text-white font-semibold text-sm">{loc.name}</span>
                            <span className="block text-white/50 text-xs mt-0.5">{loc.area}</span>
                            <a
                                href={loc.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={e => e.stopPropagation()}
                                className="inline-flex items-center gap-1 mt-3 text-[10px] uppercase tracking-widest font-semibold text-accent hover:text-white transition-colors"
                            >
                                <ExternalLink size={10} /> Open Map
                            </a>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
