import React from 'react';
import { LayoutGrid, Maximize2, Share2, TrendingDown } from 'lucide-react';

const stats = [
  { icon: <LayoutGrid size={18} strokeWidth={1.5} />, num: '18', label: 'Decimals of Land' },
  { icon: <Maximize2 size={18} strokeWidth={1.5} />, num: '1700', label: 'Sq. Ft. Per Flat' },
  { icon: <Share2 size={18} strokeWidth={1.5} />, num: '27', label: 'Total Shares' },
  { icon: <TrendingDown size={18} strokeWidth={1.5} />, num: '40%', label: 'Cost Savings' },
];

const StatsBar = () => (
  <div className="stats-bar">
    <div className="stats-inner">
      {stats.map(({ icon, num, label }) => (
        <div className="stat-item fade-up" key={label}>
          <span className="stat-icon">{icon}</span>
          <span className="stat-num">{num}</span>
          <span className="stat-label">{label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default StatsBar;