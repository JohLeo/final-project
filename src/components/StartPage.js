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
        // Fetch properties data from the specified API endpoint
        const response = await fetch('https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties');
        const data = await response.json();
        setProperties(data); // Update the state with the fetched properties data
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties(); // Invoke the fetchProperties function when the component mounts
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