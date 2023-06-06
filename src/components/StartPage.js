// IMPORT MODULES

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Search } from './Search'

// MAKE CONST OF API

const API = 'https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties';

const StartPage = () => {
  // DEFINE STATE VARIABLE TO STORE PROPERTY DATA
  const [propertyData, setPropertyData] = useState([]);

  // FETCH PROPERTY DATA FROM THE API WHEN THE COMPONENT MOUNTS
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((responseData) => {
        setPropertyData(responseData);
        console.log(responseData); // CONSOLE LOGGING THE JSON - WE CAN REMOVE THIS BEFORE DEPLOY
      });
  }, []);

  // RENDER THE COMPONENT
  return (
    <>
      <Search />
      <SearchContainer>
        {propertyData.map((item) => (
          <PropertyCard key={item.id}>
            <p>
              {item.address.street} {item.address.streetNumber}<br />
              {item.address.postalCode} {item.address.city}<br />
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} {item.currency} {item.squareMeters} {item.unitOfArea}<br />
            </p>
            <p>
              {item.category}<br />
              {item.description}<br />
            </p>
            <p>
              {item.realtor}<br />
            </p>
          </PropertyCard>
        ))}
      </SearchContainer>
    </>
  );
};

export default StartPage;

// STYLING
const SearchContainer = styled.div`
border-style: solid; 
max-width: 100%;
  `;

const PropertyCard = styled.div`
  border: 1px solid black;
  padding: 16px;
  margin-bottom: 16px;
  max-width: 90%;
`;