import React from 'react';
import styled from 'styled-components';

const RealtorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const RealtorImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px 10px 0;
`;

const RealtorName = styled.p`
  color: #414142;
  font-size: 11px;
  font-weight: 300;
  margin: 8px 0;
`;

export const Realtor = ({ src, alt, ariaLabel, name }) => {
  return (
    <RealtorContainer>
      <RealtorImage src={src} alt={alt} aria-label={ariaLabel} />
      <RealtorName>{name}</RealtorName>
    </RealtorContainer>
  );
};