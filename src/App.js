import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from 'components/footer';
import { Temporary } from 'components/Temporary'
import { AboutUs } from 'components/About/AboutUsClicked'
import { StartPage } from './components/StartPage';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/forsale" element={<Temporary />} />
          <Route path="/object" element={<Temporary />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
