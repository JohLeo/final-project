import React from 'react';
import { bool, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, closeMenu }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/forsale" aria-label="for sale" onClick={closeMenu}>
        for sale
      </Link>
      <Link to="/aboutus" aria-label="about us" onClick={closeMenu}>
        about us
      </Link>
      <Link to="/contact" aria-label="contact" onClick={closeMenu}>
        contact
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  closeMenu: func.isRequired
};

export default Menu;