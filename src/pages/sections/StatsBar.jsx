import React from 'react';

const stats = [
    { num: '18', label: 'Decimals of Land' },
    { num: '1800', label: 'Sq. Ft. Per Flat' },
    { num: '27', label: 'Total Shares' },
    { num: '40%', label: 'Cost Savings' },
];

const StatsBar = () => (
    <div className="stats-bar">
        <div className="stats-inner">
            {stats.map(({ num, label }) => (
                <div className="stat-item fade-up" key={label}>
                    <span className="stat-num">{num}</span>
                    <span className="stat-label">{label}</span>
                </div>
            ))}
        </div>
    </div>
);

export default StatsBar;
