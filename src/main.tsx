import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SettingsProvider } from './contexts/Settings';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <Routes />
        </DndProvider>
      </BrowserRouter>
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
