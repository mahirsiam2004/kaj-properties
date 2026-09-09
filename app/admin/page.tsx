import type { Metadata } from 'next';
import AdminClient from './AdminClient';

export const metadata: Metadata = { title: 'Admin — Kaz Properties' };

export default function AdminPage() {
  return (
    <div style={{ overflow: 'auto', height: '100vh', background: '#050505' }}>
      <AdminClient />
    </div>
  );
}
