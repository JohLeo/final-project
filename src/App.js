import React from 'react';
import { Nav } from 'components/nav';
import { Footer } from 'components/footer';
import StartPage from 'components/StartPage';
import GlobalStyles from 'components/GlobalStyles';

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <StartPage />
      <Footer />
    </div>
  );
};
