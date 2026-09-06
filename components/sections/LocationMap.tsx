'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Location { name: string; area: string; lat: number; lng: number; mapUrl: string; tag: string; }
interface Props { locations: Location[]; activeIdx: number; onSelect: (i: number) => void; }

const makeIcon = (active: boolean) => new L.DivIcon({
  className: '',
  html: `<div style="
    background:${active ? '#BE9F98' : 'rgba(255,255,255,0.95)'};
    backdrop-filter:blur(8px);
    color:#111;
    width:44px;height:44px;
    display:flex;align-items:center;justify-content:center;
    border-radius:50%;
    border:2px solid ${active ? '#111' : '#BE9F98'};
    font-weight:800;font-size:17px;
    box-shadow:0 4px 24px rgba(190,159,152,0.35),0 0 0 6px rgba(190,159,152,0.15);
    font-family:sans-serif;letter-spacing:-1px;
  ">K</div>`,
  iconSize: [44, 44], iconAnchor: [22, 22], popupAnchor: [0, -26],
});

export default function LocationMap({ locations, activeIdx, onSelect }: Props) {
  return (
    <MapContainer
      center={[23.891, 90.312]}
      zoom={12}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc, i) => (
        <Marker key={i} position={[loc.lat, loc.lng]} icon={makeIcon(activeIdx === i)}
          eventHandlers={{ click: () => onSelect(i) }}>
          <Popup closeButton={false}>
            <div style={{ background: '#fff', color: '#111', padding: '12px 16px', borderRadius: '4px', border: '1px solid rgba(190,159,152,0.3)', minWidth: '160px', fontSize: '13px' }}>
              <div style={{ color: '#BE9F98', fontWeight: 700, marginBottom: 4, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{loc.tag}</div>
              <div style={{ fontWeight: 600, marginBottom: 2 }}>{loc.name}</div>
              <div style={{ color: '#666', fontSize: 11 }}>{loc.area}</div>
              <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 10, color: '#BE9F98', textDecoration: 'none', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                Open in Maps ↗
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
