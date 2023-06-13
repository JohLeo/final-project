import React from 'react';
import styled from 'styled-components';

const RealtorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const RealtorImage = styled.img`
  max-width: 100%;
  height: auto;
  border-style: solid;
  border-width: 5px 5px 14px 5px; 
  border-color: #E6E6E8;
  margin: 10px 10px 0;
`;

const RealtorName = styled.p`
  color: #414142;
  font-size: 11px;
  font-weight: 300;
  margin: 8px 0;
  font-family: 'Karla', sans-serif;
`;

export const Realtor = ({ src, alt, ariaLabel, name }) => {
  return (
    <RealtorContainer>
      <RealtorImage src={src} alt={alt} aria-label={ariaLabel} />
      <RealtorName>{name}</RealtorName>
    </RealtorContainer>
  );
};