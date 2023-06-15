// IMPORT MODULES
import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

// COMPONENT
export const Footer = () => {
  return (
    <FooterContainer>
      <LogoLink to="/">
        <Logo>
          <LogoImg
            src="https://i.postimg.cc/GtsjHZLD/HomeiGo.png"
            alt="HomeIGo logo" />
        </Logo>
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
          <a
            href="https://www.facebook.com/homeigo"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1.4rem' }} />

          </a>
          <a
            href="https://www.instagram.com/homeigo"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.4rem' }} />
          </a>
          <a
            href="mailto:info@homeigo.se">
            <FontAwesomeIcon icon={faEnvelopeOpen} style={{ fontSize: '1.4rem' }} />
          </a>
        </SocialIcons>
      </RightContainer>
    </FooterContainer>
  );
};

// STYLING

const Logo = styled.div`
  @media (max-width: 768px) {
    align-self: flex-start; 
    margin-left: 0.5rem;
    margin-bottom: 1rem; 
  }
`;
const LogoImg = styled.img`
  width: 150px;
  height: 100%;
  margin: 10px 40px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  height: 13rem;

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
  margin: 0 4rem 0 0;
  gap: 1rem;

  li {
    margin-right: 10px;

    a {
      text-decoration: none;
      color: var(--text);
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
  color: var(--text);
  gap: 1rem;
  right: 1rem;
  margin: 1rem 0 0 2.5rem;

  @media (max-width: 768px) {
    margin: 1rem 0 0 0.5rem;
  }
`;