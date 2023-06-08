import React from 'react';
import { Footer } from 'components/Footer';
import StartPage from 'components/StartPage';
import { LocationSection } from 'components/LocationLink';
import { About } from './components/About/AboutUs'

export const App = () => {
  return (
    <div>
      <StartPage />
      <About />
      <LocationSection />
      <Footer />
    </div>
  );
};
