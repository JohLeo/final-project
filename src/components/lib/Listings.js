import React from 'react';
import styled from 'styled-components/macro';

const EstateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const EstateImg = styled.img`
  object-fit: cover;
  width: 85vw;
  height: 40vh;
  margin: 0 0 10px 0;

  @media (min-width: 635px) { 
    height: 60vh;
  }

  @media (min-width: 1025px) {
    width: 400px;
    height: 40vh;
  }
`;

export const LocationImg = ({ src, alt, ariaLabel }) => {
  return (

    <EstateContainer>
      <EstateImg
        src={src}
        alt={alt}
        aria-label={ariaLabel} />
    </EstateContainer>
  );
};
const Type = styled.p`
 margin: 0;
 color: var(--text);
 font-size: 10px;
 font-weight: 200;
 text-transform: uppercase;
`

const Adress = styled.p`
 margin: 0;
 color: var(--text);
 font-size: 24px;
 font-weight: 200;
 text-transform: uppercase;
`

const City = styled.p`
 margin: 0;
 color: var(--text);
 font-size: 14px;
 font-weight: 300;
 text-transform: uppercase;
`

const Data = styled.p`
 margin: 0;
 color: var(--text);
 font-size: 14px;
 font-weight: 300;
 text-decoration: none;
 text-transform: uppercase;
`

export const EstateInfo = ({ adress, city, category, room, square, price }) => {
  return (
    <EstateContainer>
      <Type>{category}</Type>
      <Adress>{adress}</Adress>
      <City>{city}</City>
      <Data>
        {room}{' '}
        <span style={{ margin: '0 10px' }}>{square}</span>
        {price}
      </Data>
    </EstateContainer>
  );
};

export const PropertyCard = styled.div`
  padding: 16px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;

  @media (min-width: 769px) {
    flex-direction: row;
  }

  &:hover {
    background-color: var(--bg-grey);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;

  @media (min-width: 769px) {
    justify-content: center;
  }

  @media (min-width: 1025px) {
    margin: 100px auto;
  }
`;