import React from 'react';
import { Nav } from 'components/Navigation';
import { Footer } from 'components/Footer';
import StartPage from 'components/StartPage';
import { LocationSection } from 'components/LocationLink';

export const App = () => {
  return (
    <div>
      <Nav />
      <StartPage />
      <LocationSection />
      <Footer />
    </div>
  );
};
