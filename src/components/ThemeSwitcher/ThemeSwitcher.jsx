import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import './ThemeSwitcher.css';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="theme-switch-wrapper">
      <button className="theme-switch-button" onClick={toggleTheme}>
        <div className="theme-switch-icon" style={{ backgroundColor: theme.color, cursor: 'pointer' }} />
      </button>
    </div>
  )
}
