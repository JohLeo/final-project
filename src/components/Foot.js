// IMPORT MODULES
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

// COMPONENT
export const Footer = () => {
  return (
    <FooterContainer>
      <LogoLink to="/">
        <Logo>Logo</Logo>
      </LogoLink>
      <RightContainer>
        <Links>
          <li>
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li>
            <Link to="/privacypolicy">PRIVACY POLICY</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </Links>
        <SocialIcons>
          {/* <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1.6rem' }} />
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.6rem' }} />
  <FontAwesomeIcon icon={faEnvelopeOpen} style={{ fontSize: '1.6rem' }} /> */}
        </SocialIcons>
      </RightContainer>
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 2rem;
    justify-content: flex-start;
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.div`
  color: black;
  font-size: 2rem; 
  left: 0;
  margin: 0 0 0 10rem;

  @media (max-width: 768px) {
    align-self: flex-start; 
    margin-left: 0.5rem;
    margin-bottom: 1rem; 
  }
`;

export const RightContainer = styled.div`
gap: 1rem;
margin-right: 1rem;
flex-direction: column;
align-items: flex-end;

@media (max-width: 768px) {
  width: 100%;
}
`

export const Links = styled.ul`
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
      white-space: nowrap;

      &:hover {
        color: #989898;
      }
    }
  }

  @media (max-width: 768px) {
    padding-left: 0.5rem; 
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  right: 1rem;
  margin: 1rem 0 0 2.5rem;

  @media (max-width: 768px) {
    margin: 1rem 0 0 0.5rem;
  }
`;