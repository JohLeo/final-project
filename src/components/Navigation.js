import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const textColor = useSelector((state) => state.menu.textColor);
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    const isBlackText = location.pathname.includes('/contact')
      || location.pathname.includes('/forsale')
      || location.pathname.includes('/properties');

    dispatch({ type: 'menu/setTextColor', payload: isBlackText ? 'black' : 'white' });
  }, [location, dispatch]);

  return (
    <Navbar>
      <NavbarLinks>
        <LogoLink to="/">
          <Logo textColor={textColor}>Logo</Logo>
        </LogoLink>
        <Links textColor={textColor}>
          <li>
            <Link
              to="/forsale"
              className={
                location.pathname.includes('/forsale')
                || location.pathname.includes('/contact')
                || location.pathname.includes('/properties')
                  ? 'black-link'
                  : ''
              }>
              for sale
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className={location.pathname.includes('/aboutus') ? 'black-link' : ''}>
              about
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                location.pathname.includes('/forsale')
                || location.pathname.includes('/contact')
                || location.pathname.includes('/properties')
                  ? 'black-link'
                  : ''
              }>
              contact
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

      &.black-link {
        color: black;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;
