import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import Cookies from 'js-cookie';

import darkTheme from '../styles/themes/darkTheme';
import lightTheme from '../styles/themes/lightTheme';

interface ThemeContextData {
  toggleTheme: () => void;
  theme: string;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(null);

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    const storedTheme = Cookies.get('theme');
    setTheme(storedTheme || 'light');
  }, []);

  useEffect(() => {
    Cookies.set('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme,
      }}
    >
      <StyledComponentThemeProvider
        theme={theme === 'light' ? darkTheme : lightTheme}
      >
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
}
