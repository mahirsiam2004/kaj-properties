import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LayoutGrid } from 'lucide-react';

// Custom marker icon mimicking the 'Z' from Zubion
const customIcon = new L.DivIcon({
    className: 'custom-map-marker',
    html: `<div style="background-color: #000; color: #fff; width: 30px; height: 30px; display: flex; align-items: center; justify-center; border-radius: 50%; border: 2px solid #fff; font-weight: bold; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);">K</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

const locations = [
    { name: 'Uttara', count: 10, offsetLat: 23.8759, offsetLng: 90.3984 },
    { name: 'Bashundhara', count: 6, offsetLat: 23.8225, offsetLng: 90.4300 },
    { name: 'Jolshiri', count: 10, offsetLat: 23.8340, offsetLng: 90.5050 },
    { name: 'POHS', count: 4, offsetLat: 23.8050, offsetLng: 90.4100 },
];

// Generate scattered pins
const pins = [];
locations.forEach(loc => {
    for(let i=0; i<loc.count; i++) {
        pins.push({
            id: `${loc.name}-${i}`,
            lat: loc.offsetLat + (Math.random() - 0.5) * 0.05,
            lng: loc.offsetLng + (Math.random() - 0.5) * 0.05,
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
    const position = [23.83, 90.42];

    return (
        <section className="relative w-full h-[600px] lg:h-[800px] bg-[#fdfdfd]" id="location">
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
            <div className="absolute inset-0 z-20 container mx-auto px-6 lg:px-12 pointer-events-none flex flex-col justify-end pb-12 fade-up">
                <div className="flex flex-col gap-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-black w-max pointer-events-auto filter drop-shadow-md bg-white/30 backdrop-blur-sm p-4 rounded-md">
                        Project Locations
                    </h2>
                    
                    <div className="flex flex-wrap gap-4 pointer-events-auto max-w-fit">
                        {locations.map((loc) => (
                            <div key={loc.name} className="bg-white border-b-4 border-accent shadow-md px-6 py-4 flex flex-col items-center justify-center min-w-[120px]">
                                <h4 className="text-brand-black text-sm md:text-base font-medium mb-1">{loc.name}</h4>
                                <div className="flex items-center gap-1.5 text-brand-black font-bold text-xl md:text-2xl">
                                    <div className="w-1.5 h-1.5 grid grid-cols-2 gap-0.5 mt-[-4px]">
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
