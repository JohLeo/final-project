import React from 'react';
import styled, { keyframes } from 'styled-components';

export const IntroPage = () => {
  return (
    <IntroBg>
      <IntroImage
        src="https://i.postimg.cc/cLngP2Xc/apartments.png"
        alt="Apartments"
        ariaLabel="Find your new apartment" />
    </IntroBg>
  )
};

const BgColors = keyframes`
  0% { background-color: #1F3630; }
  25% { background-color: #D7D2BF; }
  50% { background-color: #E6E6E6; }
  75% { background-color: #D6EEB2; }
  100% { background-color: #045D3F; }
`;

const IntroBg = styled.div`
display: flex;
justify-content: center;
background-color: #0D3A43;
animation: ${BgColors} 30s linear infinite;
`

const IntroImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: 100%;
  margin: 7rem;
  border: 20px solid white;
`;
