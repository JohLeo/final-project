/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { Temporary } from 'components/Temporary'
import { Nav } from 'components/Navigation';
import { AboutUs } from 'components/About/AboutUsClicked';
import { ForSale } from 'components/ForSale';
import { NotFound } from 'components/NotFound';
import { Contact } from 'components/ContacUs/Contact';
import { PrivacyPolicy } from 'components/PrivacyPolicy';
import { PropertyObject } from 'components/Objects/PropertyObject';
import menu from 'components/reducers/menu';
import { Apartments } from 'components/Apartments';
import { Houses } from 'components/Houses';
import { HolidayHomes } from 'components/HolidayHomes';
import { Footer } from './components/Foot';
import { StartPage } from './components/StartPage';

export const App = () => {
  const reducer = combineReducers({
    menu: menu.reducer
  });

  const store = configureStore({ reducer });

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
          <Route path="/houses" element={<Houses />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/holidayhomes" element={<HolidayHomes />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};