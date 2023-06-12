import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Navbar>
      <LogoLink to="/">
        <Logo>Logo</Logo>
      </LogoLink>
      <Links>
        <li>
          <Link to="/forsale">FOR SALE</Link>
        </li>
        <li>
          <Link to="/aboutus">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </Links>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

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
