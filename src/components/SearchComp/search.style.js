import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchH1 = styled.h1`
  margin: 90px 10px 0;
  color: var(--text);
  font-size: 24px;
  font-weight: 200;
  text-transform: uppercase;

  @media (min-width: 426px) {
    font-size: 34px;
    margin: 90px 30px 0;
  }
`

export const SearchForm = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-top: 40px;
margin-bottom: 20px;
gap: 8px;


@media (max-width: 425px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 9px;
`;

export const Select = styled.select`
padding: 9px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 4px;
flex: 1;

/* Safari-specific styles */
-webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const SearchResults = styled.div`
    text-decoration: none;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

export const SearchFindCard = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

export const SearchFindImg = styled.img`
  object-fit: cover;
  width: 95vw;
  height: 40vh;
  margin: 20px 0 0 0;

  @media (min-width: 635px) { 
    height: 60vh;
  }

  @media (min-width: 1025px) {
    width: 70vw;
    height: 50vh;
    margin: 30px 0 0;
  }
`;