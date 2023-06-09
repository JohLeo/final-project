import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Temporary } from 'components/Temporary'
import { Nav } from 'components/Navigation';
import { AboutUs } from 'components/About/AboutUsClicked';
import { ForSale } from 'components/ForSale';
import { NotFound } from 'components/NotFound';
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
          <Route path="/forsale" element={<ForSale />} />
          <Route path="/object" element={<Temporary />} />
          <Route path="/houses" element={<Temporary />} />
          <Route path="/apartments" element={<Temporary />} />
          <Route path="/holidayhomes" element={<Temporary />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
