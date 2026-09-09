import type { Metadata } from 'next';
import ChayabithiClient from './ChayabithiClient';

export const metadata: Metadata = {
  title: 'Chayabithi — Kaz Properties',
  description: 'Our successful flagship project — 1800 Sq. Ft. apartments adjacent to Jahangirnagar University, Savar, Dhaka.',
};

export default function ChayabithiPage() {
  return <ChayabithiClient />;
}
