import styled from 'styled-components/macro';

export const StyledMenu = styled.nav`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  background: white;
  text-align: left;
  height: 100vh;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    padding: 0 0 0 2rem;

    a {
      text-align: center;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 40%;
    height: 100vh;

    a {
      text-align: center;
    }
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--text);
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &.black-link {
      color: black;
    }

    &:hover {
      color: #989898;
    }
  }
`;

