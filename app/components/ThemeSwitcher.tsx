'use client';

import { useEffect, useState } from 'react';

type ThemeName = 'ghibli' | 'miami' | 'midnight' | 'clean';

const THEME_STORAGE_KEY = 'btf-theme';

const THEMES: Array<{ name: ThemeName; label: string; swatch: string }> = [
  { name: 'ghibli', label: 'Ghibli', swatch: 'linear-gradient(135deg, #4A90D9 0%, #F5C542 52%, #FF8A3D 100%)' },
  { name: 'miami', label: 'Miami', swatch: 'linear-gradient(135deg, #ff6b3d 0%, #ff2f92 48%, #00a6ff 100%)' },
  { name: 'midnight', label: 'Midnight', swatch: 'linear-gradient(135deg, #00e5ff 0%, #0a0d12 45%, #23ff8f 100%)' },
  { name: 'clean', label: 'Clean', swatch: 'linear-gradient(135deg, #ffffff 0%, #edf3ff 50%, #dbe7ff 100%)' }
];

const isThemeName = (value: string | null): value is ThemeName =>
  value === 'ghibli' || value === 'miami' || value === 'midnight' || value === 'clean';

export function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<ThemeName>('ghibli');

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const nextTheme = isThemeName(storedTheme) ? storedTheme : 'ghibli';
    document.documentElement.dataset.theme = nextTheme;
    setActiveTheme(nextTheme);
  }, []);

  const setTheme = (theme: ThemeName) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    setActiveTheme(theme);
  };

  return (
    <div className="fixed bottom-3 right-3 z-50 sm:bottom-5 sm:right-5">
      <div className="theme-switcher-shell flex items-center gap-1.5 rounded-full p-1.5">
        {THEMES.map((theme) => {
          const isActive = activeTheme === theme.name;

          return (
            <button
              key={theme.name}
              type="button"
              aria-label={`Switch to ${theme.label} theme`}
              aria-pressed={isActive}
              onClick={() => setTheme(theme.name)}
              className={`theme-dot h-6 w-6 rounded-full border ${
                isActive ? 'scale-110 border-white/80' : 'border-white/35'
              }`}
              style={{ background: theme.swatch }}
            />
          );
        })}
      </div>
    </div>
  );
}
