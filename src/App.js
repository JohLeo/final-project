import React from 'react';
import { Nav } from 'components/nav';
import { Footer } from 'components/footer';
import StartPage from 'components/StartPage';

export const App = () => {
  return (
    <div>
      <Nav />
      <StartPage />
      <Footer />
    </div>
  );
};
