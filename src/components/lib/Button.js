import React from 'react';
import styled from 'styled-components';

const FadeButton = styled.button`
  position: relative;
  border: 1px solid black;
  background-color: transparent;
  margin: 10px;
  padding: 8px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Button = ({ text }) => {
  return <FadeButton>{text}</FadeButton>;
};

export default Button;
