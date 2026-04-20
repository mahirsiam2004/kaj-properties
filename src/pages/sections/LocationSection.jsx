import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LayoutGrid } from 'lucide-react';

// Custom marker icon mimicking the 'Z' from Zubion
const customIcon = new L.DivIcon({
    className: 'custom-map-marker',
    html: `<div style="background-color: #BE9F98; color: #fff; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 3px solid #fff; font-weight: bold; box-shadow: 0 4px 15px rgba(190, 159, 152, 0.4); font-size: 16px;">K</div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
});

const locations = [
    { name: 'Savar', count: 2, offsetLat: 23.8583, offsetLng: 90.2667 },
    { name: 'Uttara', count: 1, offsetLat: 23.8759, offsetLng: 90.3984 },
];

// Generate scattered pins
const pins = [];
locations.forEach(loc => {
    for(let i=0; i<loc.count; i++) {
        pins.push({
            id: `${loc.name}-${i}`,
            lat: loc.offsetLat + (Math.random() - 0.5) * 0.02,
            lng: loc.offsetLng + (Math.random() - 0.5) * 0.02,
            area: loc.name
        });
    }
});

export default function LocationSection() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Bangladesh center approx
    // Centered between Savar and Uttara
    const position = [23.8671, 90.3325];

    return (
        <section className="relative w-full h-full min-h-screen bg-[#fdfdfd]" id="location">
            {/* The Map */}
            {isClient && (
                <div className="absolute inset-0 z-0 select-none">
                    <MapContainer center={position} zoom={11} scrollWheelZoom={false} style={{ width: '100%', height: '100%', zIndex: 0 }}>
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        />
                        {pins.map(pin => (
                            <Marker key={pin.id} position={[pin.lat, pin.lng]} icon={customIcon}>
                                <Popup>
                                    <div className="text-center">
                                        <strong>{pin.area} Project</strong><br />
                                        Kaz Properties &amp; Developers
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            )}
            
            {/* Overlay Gradient to blend with app design if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent pointer-events-none z-10"></div>

            {/* Content Overlays */}
            <div className="absolute inset-0 z-20 container mx-auto px-6 lg:px-12 pointer-events-none flex flex-col justify-end pb-8 md:pb-12 pt-32 md:pt-24 lg:pt-20 fade-up">
                <div className="flex flex-col gap-4 md:gap-8">
                    <h2 className="text-base md:text-3xl lg:text-4xl font-semibold text-brand-black w-max pointer-events-auto filter drop-shadow-md bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-sm border-l-4 border-accent">
                        Project Locations
                    </h2>
                    
                    <div className="flex flex-wrap gap-2 md:gap-4 pointer-events-auto max-w-fit">
                        {locations.map((loc) => (
                            <div key={loc.name} className="bg-white/95 backdrop-blur-sm border-b-4 border-accent shadow-lg px-3 md:px-6 py-2 md:py-4 flex flex-col items-center justify-center min-w-[80px] md:min-w-[120px]">
                                <h4 className="text-brand-black text-[10px] md:text-base font-medium mb-0.5 uppercase tracking-wider">{loc.name}</h4>
                                <div className="flex items-center gap-1 text-brand-black font-bold text-base md:text-2xl">
                                    <div className="w-1 h-1 grid grid-cols-2 gap-0.5 mt-[-2px]">
                                        <div className="bg-accent w-full h-full rounded-sm"></div>
                                        <div className="bg-accent w-full h-full rounded-sm"></div>
                                        <div className="bg-accent w-full h-full rounded-sm"></div>
                                        <div className="bg-accent w-full h-full rounded-sm"></div>
                                    </div>
                                    {loc.count}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
