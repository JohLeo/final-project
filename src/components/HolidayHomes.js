/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loading from './Loading';

// MAKE CONST OF API
const API = 'https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties';

export const HolidayHomes = () => {
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
          {propertyData
            .filter((item) => item.category === 'Vacation Home') // Filter properties with category "Holiday Homes"
            .map((item, index) => (
              <React.Fragment key={item.id}>
                <PropertyCard>
                  <Link to={`/properties/${item._id}`}>
                    <ImageContainer>
                      <img src={item.mainImg} alt="Property" />
                    </ImageContainer>
                    <TextContainer>
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
                    </TextContainer>
                  </Link>
                </PropertyCard>
                {index < propertyData.length - 1 && <HorizontalLine />}
              </React.Fragment>
            ))}
        </SearchContainer>
      )}
    </>
  );
};
// STYLING
const HorizontalLine = styled.div`
  width: 70%;
  height: 1px;
  background-color: black;
  margin: 16px auto;

  @media (max-width: 768px) {
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-53%);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 7rem 16px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin: 7rem 0;
    width: 95%;
    margin-left: 3px;
  }
`;

const ImageContainer = styled.div`
height: 35rem;
overflow: hidden;
object-fit: cover;
display: flex;
align-items: center;
justify-content: center;
margin: 1rem 16px 1rem 0;
`;

const TextContainer = styled.div`
    text-align: left;
    flex: 1;
`;

const PropertyCard = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 90%;
    flex-direction: row;
  }
`;