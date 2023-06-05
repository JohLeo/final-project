import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us" />
        for sale
      </a>
      <a href="/">
        <span role="img" aria-label="price" />
        about us
      </a>
      <a href="/">
        <span role="img" aria-label="contact" />
        contact
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired
}
export default Menu;