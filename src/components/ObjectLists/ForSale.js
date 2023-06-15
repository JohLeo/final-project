/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { SearchContainer, LocationImg, EstateInfo, PropertyCard } from '../lib/Listings'

// MAKE CONST OF API
const API = 'https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties';

export const ForSale = () => {
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
      {propertyData.length === 0 ? (
        <Loading />
      ) : (
        <SearchContainer>
          {propertyData.map((item, index) => (
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
                {index < propertyData.length - 1 && <HorizontalLine />}
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

const HorizontalLine = styled.div`
  width: 70%;
  height: 1px;
  background-color: var(--bg-grey);
  margin: 36px auto 0;

  @media (max-width: 768px) {
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-56%);
  }
`;

