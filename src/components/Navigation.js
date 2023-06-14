import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <Navbar>
      <NavbarLinks>
        <LogoLink to="/">
          <Logo>Logo</Logo>
        </LogoLink>
        <Links>
          <li>
            <Link to="/forsale" onClick={closeMenu}>
              FOR SALE
            </Link>
          </li>
          <li>
            <Link to="/aboutus" onClick={closeMenu}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
        </Links>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </NavbarLinks>
    </Navbar>
  );
};

const Navbar = styled.nav`
  width: 100%;
  padding-top: 15px;
  position: absolute;
  top: 0;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 2rem;
  color: #fffaf2;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;

  li {
    margin-right: 2rem;

    a {
      text-decoration: none;
      color: #fffaf2;
      font-size: 23px;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
