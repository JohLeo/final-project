import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404 - Page Not Found</NotFoundHeading>
      <NotFoundMessage>
        Oops! The page you are looking for does not exist.
      </NotFoundMessage>
      <GoBackLink to="/">Go Back</GoBackLink>
    </NotFoundContainer>
  );
};

// STYLING
const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const NotFoundHeading = styled.h1`
  font-size: 28px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const NotFoundMessage = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const GoBackLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;