import React from 'react';
import { bool, func } from 'prop-types';
import { useSelector } from 'react-redux';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }) => {
  const textColor = useSelector((state) => state.menu.textColor);

  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} textColor={textColor}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Burger;
