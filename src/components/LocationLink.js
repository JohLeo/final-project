import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LocationImg } from './lib/LinkCard';

export const LocationSection = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // TO PREVENT SITE FROM SCROLLING TO BOTTOM
  };
  return (
    <LocationSectionContainer>
      <Link to="/apartments" onClick={handleClick}>
        <LocationImg
          src="https://i.postimg.cc/cLngP2Xc/apartments.png"
          alt="Apartments"
          ariaLabel="Find your new apartment"
          locationText="Apartments" />
      </Link>
      <Link to="/houses" onClick={handleClick}>
        <LocationImg
          src="https://i.postimg.cc/Bv58nDWL/house.png"
          alt="Houses"
          ariaLabel="Find your new House"
          locationText="Houses" />
      </Link>
      <Link to="/holidayhomes" onClick={handleClick}>
        <LocationImg
          src="https://i.postimg.cc/N0v9tDnv/vacationhome.png"
          alt="Holiday housing"
          ariaLabel="Find your new holiday house"
          locationText="Holiday homes" />
      </Link>
    </LocationSectionContainer>
  )
}

const LocationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 35px auto;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;
