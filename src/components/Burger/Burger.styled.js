import styled from 'styled-components/macro';

export const StyledBurger = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open, textColor }) => (open ? '#414142' : textColor)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      background: ${({ open, textColor }) => (open ? '#414142' : textColor)};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
      background: ${({ open, textColor }) => (open ? '#414142' : textColor)};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      background: ${({ open, textColor }) => (open ? '#414142' : textColor)};
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;