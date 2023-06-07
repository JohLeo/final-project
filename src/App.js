import React from 'react';
import { Footer } from 'components/footer';
import StartPage from 'components/StartPage';
import { LocationSection } from 'components/LocationLink';
import { About } from './components/AboutUs'

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
