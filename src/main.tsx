import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SettingsProvider } from './contexts/Settings';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
