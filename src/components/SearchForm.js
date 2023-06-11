/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './lib/Button';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minSquareMeters, setMinSquareMeters] = useState('');
  const [maxSquareMeters, setMaxSquareMeters] = useState('');
  const [category, setCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const categoryOptions = ['Apartment', 'House', 'Vacation Home'];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleMinSquareMetersChange = (event) => {
    setMinSquareMeters(event.target.value);
  };

  const handleMaxSquareMetersChange = (event) => {
    setMaxSquareMeters(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Build the query string based on the search parameters
    const queryString = new URLSearchParams({
      location: searchTerm,
      minPrice,
      maxPrice,
      minSquareMeters,
      maxSquareMeters,
      type: category
    }).toString();

    // Perform the search with the query string
    fetch(`https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties?${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the search results
        console.log('Search results:', data);
        const modifiedData = data.map((result) => ({
          id: result.id,
          description: result.description,
          category: result.category,
          realtor: result.realtor,
          price: result.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
          currency: result.currency,
          squareMeters: result.squareMeters,
          unitOfArea: result.unitOfArea,
          address: {
            street: result.address.street,
            streetNumber: result.address.streetNumber
          }
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
          placeholder="City"
          value={searchTerm}
          onChange={handleSearchChange} />
        <Select
          value={category}
          onChange={handleCategoryChange}>
          <option value="">Select category</option>
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange} />
        <Input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange} />
        <Input
          type="number"
          placeholder="Min Square Meters"
          value={minSquareMeters}
          onChange={handleMinSquareMetersChange} />
        <Input
          type="number"
          placeholder="Max Square Meters"
          value={maxSquareMeters}
          onChange={handleMaxSquareMetersChange} />
        <Button type="submit" text="Search" />
      </Form>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <ResultsContainer>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result) => (
              <ResultItem key={result.id}>
                <Link to={`/properties/${result.id}`}>
                  {/* Update the URL to include the id */}
                  <Title>Description:</Title> {result.description}<br />
                  <Title>Category:</Title> {result.category}<br />
                  <Title>Street address:</Title> {result.address.street} {result.address.streetNumber}<br /><br />
                  <Title>Price:</Title> {result.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} {result.currency}<br />
                  <Title>Size:</Title> {result.squareMeters} {result.unitOfArea}<br />
                  <Title>Realtor:</Title> {result.realtor}<br />
                </Link>
              </ResultItem>
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

const ResultItem = styled.li`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  `;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.strong`
    font-weight: bold;
  `;