import React from 'react';
import { bool, func } from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen }) => {
  const location = useLocation();

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <StyledMenu open={open}>
      <Link
        to="/forsale"
        aria-label="for sale"
        className={location.pathname.includes('/forsale') ? 'black-link' : ''}
        onClick={handleLinkClick}>
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
        }
        onClick={handleLinkClick}>
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
        }
        onClick={handleLinkClick}>
        contact
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Menu;
