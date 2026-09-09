import type { Metadata } from 'next';
import ManagementTeamClient from './ManagementTeamClient';

export const metadata: Metadata = {
  title: 'Our Management Team — Kaz Properties & Developers',
  description: 'Meet the experienced leadership team behind Kaz Properties & Developers — driving vision, integrity, and excellence in real estate.',
};

export default function ManagementTeamPage() {
  return <ManagementTeamClient />;
}
