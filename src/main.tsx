import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { SettingsProvider } from './contexts/Settings';
import { TouchBackend } from 'react-dnd-touch-backend'

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <BrowserRouter>
        <DndProvider backend={TouchBackend} options={{enableMouseEvents:true}}>
          <Routes />
        </DndProvider>
      </BrowserRouter>
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
