/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { SearchContainer, LocationImg, EstateInfo, PropertyCard, TopSec, ListingH1 } from '../lib/Listings'

// MAKE CONST OF API
const API = 'https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties';

export const Houses = () => {
  // DEFINE STATE VARIABLE TO STORE PROPERTY DATA
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // FETCH PROPERTY DATA FROM THE API WHEN THE COMPONENT MOUNTS
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((responseData) => {
        // Filter the response data to only include apartments
        const filteredData = responseData.filter((item) => item.category.toLowerCase() === 'house');
        setPropertyData(filteredData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  // RENDER THE COMPONENT
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <SearchContainer>
          <TopSec>
            <ListingH1>All houses available</ListingH1>
          </TopSec>
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
