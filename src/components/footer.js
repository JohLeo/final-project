// IMPORT MODULES
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

// COMPONENT
export const Footer = () => {
  return (
    <FooterContainer>
      <Logo>Logo</Logo>
      <Center>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" />
      </Center>
      <Links>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">PRIVACY POLICY</a></li>
        <li><a href="#">CONTACT</a></li>
      </Links>
    </FooterContainer>
  );
};

// STYLING
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  height: 20rem;
`;

export const Logo = styled.div`
  color: black;
  font-size: 1rem; 
  left: 0;
  margin: 0 0 0 10rem;
`;

export const Center = styled.div`
display: flex; 
justify-content: center;
gap: 1rem;
`

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 0 10rem 0 0;
  gap: 1rem;

  li {
    margin-right: 10px;

    a {
      text-decoration: none;
      color: #000;
    }
  }
`;