import type { Metadata } from 'next';
import ChayanirClient from './ChayanirClient';

export const metadata: Metadata = {
  title: 'Chayanir — Kaz Properties & Developers',
  description: 'Chayanir — A thoughtfully designed residential project in Jahangirnagar Society, Savar, Dhaka by Kaz Properties.',
};

export default function ChayanirPage() {
  return <ChayanirClient />;
}
