import React from 'react';
import styled from 'styled-components';

const RealtorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
`;

export const RealtorImg = ({ src, alt, ariaLabel }) => {
  return <RealtorImage
    src={src}
    alt={alt}
    aria-label={ariaLabel} />;
};

const RealtorName = styled.p`
  font-size: 13px;
  color: #414142;
  font-weight: 300;
`;

export const RealtorTxt = ({ name }) => {
  return <RealtorName>{name}</RealtorName>;
};