import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';

import LightTheme from './styles/Theme.Light';
import DarkTheme from './styles/Theme.Dark';

import Home from './pages/Home';
import Session from './pages/Session';

import Navbar from './components/Navbar';

import usePersistedState from './hooks/usePersistedState';

export default () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'theme',
    LightTheme,
  );

  const toggleTheme = () => {
    setTheme(theme.title === 'Light' ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='session' element={<Session />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
