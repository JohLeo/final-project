import React from 'react';
import { Nav } from 'components/nav';
import { Footer } from 'components/footer';
import { Search } from 'components/search';
import StartPage from 'components/StartPage';
import GlobalStyles from 'components/GlobalStyles';

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Search />
      <StartPage />
      <Footer />
    </div>
  );
};
