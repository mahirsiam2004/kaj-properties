'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface Props {
  /** 'light' variant: dark icon on light bg (for light-bg pages like mission-vision) */
  variant?: 'light' | 'dark';
  className?: string;
}

export default function ThemeToggleButton({ variant = 'dark', className = '' }: Props) {
  const { theme, toggleTheme } = useTheme();

  const base =
    'flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110 active:scale-95';

  const colorCls =
    variant === 'dark'
      ? 'text-white/60 hover:text-accent hover:bg-white/10 border border-white/15'
      : 'text-black/60 dark:text-white/60 hover:text-accent hover:bg-black/5 dark:hover:bg-white/10 border border-black/15 dark:border-white/15';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light/dark theme"
      className={`${base} ${colorCls} ${className}`}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
