import React from 'react';
import { bool } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  const location = useLocation();

  return (
    <StyledMenu open={open}>
      <Link
        to="/forsale"
        aria-label="for sale"
        className={location.pathname.includes('/forsale') ? 'black-link' : ''}>
        for sale
      </Link>
      <Link
        to="/aboutus"
        aria-label="about us"
        className={
          (location.pathname.includes('/aboutus') || location.pathname.includes('/contact'))
          && !location.pathname.includes('/properties')
            ? 'black-link'
            : ''
        }>
        about us
      </Link>
      <Link
        to="/contact"
        aria-label="contact"
        className={
          location.pathname.includes('/contact')
          || location.pathname.includes('/forsale')
          || location.pathname.includes('/properties')
            ? 'black-link'
            : ''
        }>
        contact
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
