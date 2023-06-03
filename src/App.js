import React from 'react';
import { Nav } from 'components/nav';
import { Footer } from 'components/footer';
import { Search } from 'components/search';
import StartPage from 'components/StartPage';

export const App = () => {
  return (
    <div>
      <StartPage />
      <Nav />
      <Search />
      <Footer />
    </div>
  );
};
