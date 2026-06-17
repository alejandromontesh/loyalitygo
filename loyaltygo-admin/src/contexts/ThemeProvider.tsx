import { useState, useEffect, type ReactNode } from 'react';
import { ThemeContext, type Theme, type ThemeContextValue } from './ThemeContext';
import { STORAGE_KEYS } from '../utils/constants';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEYS.THEME);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme, isDark]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const value: ThemeContextValue = { theme, isDark, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
