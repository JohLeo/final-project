import React, { useState, useEffect, useLocation } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const textColor = useSelector((state) => state.menu.textColor);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/properties/:id') {
      dispatch({ type: 'menu/setTextColor', payload: 'black' });
    } else {
      dispatch({ type: 'menu/setTextColor', payload: 'white' });
    }
  }, [location, dispatch]);

  return (
    <Navbar>
      <NavbarLinks>
        <LogoLink to="/">
          <Logo textColor={textColor}>Logo</Logo>
        </LogoLink>
        <Links textColor={textColor}>
          <li>
            <Link to="/forsale">for sale</Link>
          </li>
          <li>
            <Link to="/aboutus">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
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
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 2rem;
  color: ${(props) => props.textColor};
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;

  li {
    margin-right: 2rem;

    a {
      text-decoration: none;
      color: ${(props) => props.textColor};
      font-size: 18px;
      font-weight: 300;
      text-transform: uppercase;
    }
  }
`;