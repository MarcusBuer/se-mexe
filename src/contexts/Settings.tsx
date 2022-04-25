import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';

import LightTheme from '../styles/Theme.Light';
import DarkTheme from '../styles/Theme.Dark';

import usePersistedState from '../hooks/usePersistedState';

export const SettingsContext = React.createContext({
  theme: { toggleTheme: () => {} },
});

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export function SettingsProvider({ children }: Props) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'theme',
    LightTheme,
  );

  const toggleTheme = () => {
    setTheme(theme.title === 'Light' ? DarkTheme : LightTheme);
  };

  return (
    <SettingsContext.Provider value={{ theme: { toggleTheme } }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = React.useContext(SettingsContext);

  if (context === undefined) {
    throw new Error('Context was used outside of its Provider');
  }

  return context;
}
