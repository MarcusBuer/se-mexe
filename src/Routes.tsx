import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Session from './pages/Session';

export default () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Session />} />
      </Routes>
    </>
  );
};
