import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  };

  return (
    <NotFoundContainer>
      <NotFoundHeading>404 - Page Not Found</NotFoundHeading>
      <NotFoundMessage>
        Oops! The page you are looking for does not exist.
      </NotFoundMessage>
      <GoBackButton onClick={onHomeButtonClick}>Go Back</GoBackButton>
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

const GoBackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;