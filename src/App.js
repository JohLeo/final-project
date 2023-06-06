import React from 'react';
import { Footer } from 'components/footer';
import StartPage from 'components/StartPage';
import { LocationSection } from 'components/LocationLink';

export const App = () => {
  return (
    <div>
      <StartPage />
      <LocationSection />
      <Footer />
    </div>
  );
};
