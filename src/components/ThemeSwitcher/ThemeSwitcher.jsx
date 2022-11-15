import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import './ThemeSwitcher.css';

export const ThemeSwitcher = () => {
  const { theme, themes, setTheme } = useTheme();
  return (
    <div className="theme-switch-wrapper">
      <button className="theme-switch-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <div className="theme-switch-icon" style={{ backgroundColor: theme === 'light' ? 'black' : '#D9A621' }} />
      </button>
    </div>
  )
}
