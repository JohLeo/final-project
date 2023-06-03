import React from 'react';
import { Nav } from 'components/nav';
import { Footer } from 'components/footer';
import { Search } from 'components/search';

export const App = () => {
  return (
    <div>
      <Nav />
      <Search />
      <Footer />
    </div>
  )
}
