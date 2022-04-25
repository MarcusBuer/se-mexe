import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Session from './pages/Session';

import Navbar from './components/Navbar';

export default () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='session' element={<Session />} />
      </Routes>
    </>
  );
};
