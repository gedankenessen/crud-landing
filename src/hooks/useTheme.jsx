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
export const Theme = ({ children, defaultTheme = DEFAULT_THEME }) => {
  const [theme, setTheme] = useState(defaultTheme);
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
