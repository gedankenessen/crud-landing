import React, { createContext, useContext, useEffect, useState } from 'react';

export const DEFAULT_THEMES = [
  {
    name: 'light',
    color: 'black',
  },
  {
    name: 'dark',
    color: '#D9A621',
  },
];

export const DEFAULT_THEME = DEFAULT_THEMES[0];

export const ThemeContext = createContext(DEFAULT_THEME);
export const Theme = ({ children, defaultTheme }) => {
  const [theme, setThemeRaw] = useState(DEFAULT_THEME);

  useEffect(() => {
    setThemeRaw(
      defaultTheme ??
      JSON.parse(localStorage && localStorage.getItem('theme')) ??
      (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)") ? DEFAULT_THEMES[1] : DEFAULT_THEME)
    )
  }, []);

  const setTheme = (theme) => {
    setThemeRaw(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  return <ThemeContext.Provider value={{ theme, themes: DEFAULT_THEMES, setTheme }}>{children}</ThemeContext.Provider>
};

export const useTheme = () => {
  // TODO: Load preferences from OS / localstorage
  const { theme, themes, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.name);
  }, [theme])

  return {
    theme,
    themes,
    setTheme,
    toggleTheme: () => setTheme(theme.name === 'light' ? themes[1] : themes[0]),
  };
}
