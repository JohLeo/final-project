/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { SearchContainer, LocationImg, EstateInfo, PropertyCard } from '../lib/Listings'

// MAKE CONST OF API
const API = 'https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties';

export const Apartments = () => {
  // DEFINE STATE VARIABLE TO STORE PROPERTY DATA
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // FETCH PROPERTY DATA FROM THE API WHEN THE COMPONENT MOUNTS
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((responseData) => {
        setPropertyData(responseData);
        setTimeout(() => setIsLoading(false), 3000);
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
            <React.Fragment key={item.id}>

              <PropertyCard>
                <StyledLink to={`/properties/${item._id}`}>

                  <LocationImg
                    src={item.mainImg}
                    alt="Property"
                    ariaLabel="Image of estate" />

                  <EstateInfo
                    category={item.category}
                    adress={`${item.address.street} ${item.address.streetNumber}`}
                    city={item.address.city}
                    price={`${item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ${item.currency}`}
                    room={item.roomNo}
                    square={`${item.squareMeters} ${item.unitOfArea}`} />
                </StyledLink>
              </PropertyCard>
            </React.Fragment>
          ))}
        </SearchContainer>
      )}
    </>
  );
};
// STYLING
const StyledLink = styled(Link)`
  text-decoration: none;
`;

