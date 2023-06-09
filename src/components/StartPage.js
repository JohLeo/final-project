// IMPORT MODULES
import React from 'react';
import { LocationSection } from 'components/LocationLink';
import { Search } from './search';
import { IntroPage } from './Intro/Intro';
import { About } from './About/AboutUs'

export const StartPage = () => {
  // RENDER THE COMPONENT
  return (
    <>
      <IntroPage />
      <About />
      <LocationSection />
      <Search />
    </>
  );
};