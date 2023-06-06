import React from 'react';
import { Nav } from 'components/nav';
import { Footer } from 'components/footer';
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
