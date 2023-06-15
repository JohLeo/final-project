import React, { useEffect, useState } from 'react';
import { LocationSection } from 'components/LocationLink';
import { Search } from './SearchComp/SearchForm';
import { IntroPage } from './Intro/Intro';
import { About } from './About/AboutUs'
import Map from './Map';

export const StartPage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <IntroPage />
      <Search />
      <About />
      <LocationSection />
      <Map properties={properties} />
    </>
  );
};