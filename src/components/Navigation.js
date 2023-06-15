import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  // Retrieve the text color from the Redux store
  const textColor = useSelector((state) => state.menu.textColor);
  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Get the current location from React Router
  const location = useLocation();

  useEffect(() => {
    const isBlackText = location.pathname.includes('/contact')
      || location.pathname.includes('/forsale')
      || location.pathname.includes('/properties')
      || location.pathname.includes('/houses')
      || location.pathname.includes('/holidayhomes')
      || location.pathname.includes('/apartments')
      || location.pathname.includes('/privacypolicy');

    // Dispatch an action to update the text color based on the current location
    dispatch({ type: 'menu/setTextColor', payload: isBlackText ? 'black' : 'white' });

    if (location.pathname === '/aboutus') {
      // Override the text color to white for the "/aboutus" page
      dispatch({ type: 'menu/setTextColor', payload: 'white' });
    }
  }, [location, dispatch]);

  return (
    <Navbar>
      <NavbarLinks>
        <LogoLink to="/">
          <LogoImg
            src="https://i.postimg.cc/90yTrKRD/homeigo-GR.png"
            alt="HomeIGo logo" />
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
              className={
                location.pathname.includes('/forsale')
                || location.pathname.includes('/contact')
                || location.pathname.includes('/properties')
                  ? 'black-link'
                  : ''
              }>
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

const LogoImg = styled.img`
  width: 150px;
  height: 100%;
  margin: 10px 40px;
`;

const Navbar = styled.nav`
  width: 100%;
  padding-top: 15px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
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
