/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Nav } from 'components/Navigation';
import { AboutUs } from 'components/About/AboutUsClicked';
import { ForSale } from 'components/ForSale';
import { NotFound } from 'components/NotFound';
import { Contact } from 'components/Contact';
import { PrivacyPolicy } from 'components/PrivacyPolicy';
import { PropertyObject } from 'components/Objects/PropertyObject';
import { menu } from 'reducers/menu';
import { Footer } from './components/Foot';
import { StartPage } from './components/StartPage';

export const App = () => {
  const reducer = combineReducers({
    menu
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/forsale" element={<ForSale />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/properties/:id" element={<PropertyObject />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};
