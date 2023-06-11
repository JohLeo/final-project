/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */
// IMPORT MODULES
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import Loading from './Loading';

// MAKE CONST OF API
const API = 'https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties';

export const ForSale = () => {
  // DEFINE STATE VARIABLE TO STORE PROPERTY DATA
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // FETCH PROPERTY DATA FROM THE API WHEN THE COMPONENT MOUNTS
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((responseData) => {
        setPropertyData(responseData);
        setTimeout(() => setIsLoading(false), 3000)
        console.log(responseData); // CONSOLE LOGGING THE JSON - WE CAN REMOVE THIS BEFORE DEPLOY
      });
  }, []);

  // RENDER THE COMPONENT
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <SearchContainer>
          {propertyData.map((item) => (
            <PropertyCard key={item.id}>
              <StyledLink to={`/properties/${item._id}`}>
                <p>
                  {item.address.street} {item.address.streetNumber}
                  <br />
                  {item.address.postalCode}, {item.address.city}
                  <br />
                  {item.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
                  {item.currency}, {item.squareMeters} {item.unitOfArea}
                  <br />
                </p>
                <p>
                  {item.category}
                  <br />
                  {item.description}
                  <br />
                </p>
                <p>{item.realtor}</p>
              </StyledLink>
            </PropertyCard>
          ))}
        </SearchContainer>
      )}
    </>
  );
};

// STYLING
const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `;

const PropertyCard = styled.div`
  border: 1px solid black;
  padding: 16px;
  margin: 16px;
  max-width: 90%;
  text-align: center;
  height: 200px;
  width: 200px;
`;

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;