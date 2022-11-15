import React, { useEffect, useState } from 'react';

export const useTheme = () => {
  // TODO: Load preferences from OS / localstorage
  const [theme, setTheme] = useState('brand');
  const themes = [
    {
      name: 'light',
      color: 'white',
    },
    {
      name: 'dark',
      color: 'black',
    },
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  return { theme, themes, setTheme: (theme) => setTheme(theme) };
}
