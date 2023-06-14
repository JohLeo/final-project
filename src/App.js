import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Temporary } from 'components/Temporary'
import { Nav } from 'components/Navigation';
import { AboutUs } from 'components/About/AboutUsClicked';
import { ForSale } from 'components/ForSale';
import { NotFound } from 'components/NotFound';
import { Contact } from 'components/ContacUs/Contact';
import { PrivacyPolicy } from 'components/PrivacyPolicy';
import { PropertyObject } from 'components/Objects/PropertyObject';
import { Footer } from './components/Foot';
import { StartPage } from './components/StartPage';

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/forsale" element={<ForSale />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties/:id" element={<PropertyObject />} />
          <Route path="/houses" element={<Temporary />} />
          <Route path="/apartments" element={<Temporary />} />
          <Route path="/holidayhomes" element={<Temporary />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
