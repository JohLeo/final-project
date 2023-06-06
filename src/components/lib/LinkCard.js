import React from 'react';
import styled from 'styled-components';

const OverlayText = styled.div`
  position: relative;
  display: inline-block;
`;

const LinkImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: 100%;
  margin: 10px;
`;

const LocationText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 5rem;
  background-color: rgba(255, 255, 255, 0.8);
  color: #414142;
  font-size: 14px;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const LocationImg = ({ src, alt, ariaLabel, locationText }) => {
  return (

    <OverlayText>
      <LinkImage src={src} alt={alt} aria-label={ariaLabel} />
      <LocationText>{locationText}</LocationText>
    </OverlayText>

  );
};

