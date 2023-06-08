/* eslint-disable max-len */
// IMPORT MODULES
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './lib/Button'

// COMPONENT

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // PERFORM THE SEARCH WITH THE SEARCHTERM
    console.log('Performing search with:', searchTerm);
    fetch(`https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties?location=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
      // PROCESS THE SEARCH RESULTS
        console.log('Search results:', data);
        const modifiedData = data.map((result) => ({
          id: result.id,
          description: result.description
        }));
        setSearchResults(modifiedData);
      })
      .catch((error) => {
        console.error('Error performing search:', error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSearchSubmit}>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange} />
        <Button
          type="submit"
          text="Search" />
      </Form>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <ResultsContainer>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              // eslint-disable-next-line no-underscore-dangle
              <li key={result.id}>{result.description}</li>
            ))}
          </ul>
        </ResultsContainer>
      )}
    </div>
  );
};

// STYLING

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ResultsContainer = styled.div`
  margin-top: 20px;

  h2 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }
`;