import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Temporary } from 'components/Temporary'
import { Nav } from 'components/Navigation';
import { AboutUs } from 'components/About/AboutUsClicked';
import { Footer } from './components/Foot';
import { StartPage } from './components/StartPage';

export const App = () => {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/forsale" element={<Temporary />} />
          <Route path="/object" element={<Temporary />} />
          <Route path="/houses" element={<Temporary />} />
          <Route path="/apartments" element={<Temporary />} />
          <Route path="/holidayhomes" element={<Temporary />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
