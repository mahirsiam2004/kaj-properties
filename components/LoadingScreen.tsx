'use client';

import { useEffect, useState } from 'react';

interface Props { onComplete: () => void; }

export default function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    // Phase 1: logo glows in (0 → 600ms)
    const holdTimer = setTimeout(() => setPhase('hold'), 600);
    // Phase 2: hold briefly (600 → 1200ms)
    const exitTimer = setTimeout(() => setPhase('exit'), 1200);
    // Phase 3: fade out complete → show site (1200 → 1700ms)
    const doneTimer = setTimeout(() => onComplete(), 1700);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      style={{
        backgroundColor: '#FAF7F5',
        opacity: phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 0.5s ease-in-out' : 'none',
        pointerEvents: phase === 'exit' ? 'none' : 'auto',
      }}
    >
      {/* Ambient glow behind logo */}
      <div
        style={{
          position: 'absolute',
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(190,159,152,0.35) 0%, rgba(190,159,152,0.08) 60%, transparent 100%)',
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'scale(0.6)' : 'scale(1)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      />

      {/* Logo */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'scale(0.85)' : 'scale(1)',
          transition: 'opacity 0.7s cubic-bezier(0.2,0.8,0.2,1), transform 0.7s cubic-bezier(0.2,0.8,0.2,1)',
        }}
      >
        <img
          src="/logo1.png"
          alt="Kaz Properties"
          style={{
            width: 140,
            objectFit: 'contain',
            filter: 'brightness(0)',
          }}
        />

        {/* Tagline */}
        <p
          style={{
            color: '#BE9F98',
            fontSize: 10,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            fontWeight: 600,
            fontFamily: 'Outfit, sans-serif',
            opacity: phase === 'hold' || phase === 'exit' ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.2s',
          }}
        >
          Welcome to Your Abode of Peace
        </p>

        {/* Progress bar */}
        <div
          style={{
            width: 140,
            height: 1,
            background: 'rgba(0,0,0,0.08)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              background: '#BE9F98',
              width: phase === 'enter' ? '0%' : phase === 'hold' ? '70%' : '100%',
              transition: phase === 'enter'
                ? 'width 0.6s ease-out'
                : phase === 'hold'
                ? 'width 0.5s ease-out'
                : 'width 0.4s ease-out',
            }}
          />
        </div>
      </div>
    </div>
  );
}
