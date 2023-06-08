import React, { useState } from 'react';
import styled from 'styled-components';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (

    <Navbar>
      <Logo>Logo</Logo>
      <Links>
        <li><a href="#">FOR SALE</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
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

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 1rem; 
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  margin-right: auto; 

  li {
    margin-right: 10px;

    a {
      text-decoration: none;
      color: #000;
    }
  }

  @media (max-width: 768px) {
    display: none; 
  }
`;