import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/forsale">
        <span role="img" aria-label="for sale" />
  for sale
      </Link>
      <Link to="/aboutus">
        <span role="img" aria-label="about us" />
  about us
      </Link>
      <Link to="/contact">
        <span role="img" aria-label="contact" />
  contact
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
}
export default Menu;