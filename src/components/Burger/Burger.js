import React from 'react';
import { bool, func } from 'prop-types';
import { useSelector } from 'react-redux';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }) => {
  const textColor = useSelector((state) => state.menu.textColor);
  // Retrieve the `textColor` value from the Redux store using the `useSelector` hook.

  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} textColor={textColor}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  // Prop indicating whether the burger menu is open or closed.
  open: bool.isRequired,
  // Callback function to set the burger menu state.
  setOpen: func.isRequired
};

export default Burger;