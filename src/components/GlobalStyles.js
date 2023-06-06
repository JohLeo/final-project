import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@media only screen and (min-width: 330px) {
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
}
  
  @media only screen and (max-width: 768px) { 
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
  }
  
  @media only screen and (min-width: 769px) and (max-width: 1024px) { 
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
  }
`;

export default GlobalStyles;
