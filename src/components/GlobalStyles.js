import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Hide horizontal overflow */
  }
`;

export default GlobalStyles;