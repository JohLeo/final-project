/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './lib/Button';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minSquareMeters, setMinSquareMeters] = useState('');
  const [category, setCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleMinSquareMetersChange = (event) => {
    setMinSquareMeters(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Build the query string based on the search parameters
    let queryString = `?location=${searchTerm}`;

    if (category) {
      queryString += `&type=${category}`;
    }

    // Perform the search with the query string
    fetch(`https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the search results
        console.log('Search results:', data);

        if (data.length === 0) {
          setSearchResults([]);
          setSearchError('No properties available in this city.');
        } else {
          let filteredData = data;

          if (maxPrice) {
            filteredData = filteredData.filter((result) => result.price <= maxPrice);
          }

          if (minSquareMeters) {
            filteredData = filteredData.filter((result) => result.squareMeters >= minSquareMeters);
          }

          
          const modifiedData = filteredData.map((result) => ({
            id: result._id,
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
            },
            mainImg: result.mainImg
          }));

          setSearchResults(modifiedData);
          setSearchError('');
        }
      })
      .catch((error) => {
        console.error('Error performing search:', error);
        setSearchError('An error occurred while performing the search. Please try again later.');
      });
  };

  // Define the category options
  const categoryOptions = ['Apartment', 'House', 'Vacation Home'];

  return (
    <div>
      <Form onSubmit={handleSearchSubmit}>
        <Input
          type="text"
          placeholder="City"
          value={searchTerm}
          onChange={handleSearchChange} />
        <Select value={category} onChange={handleCategoryChange}>
          <option value="">Select category</option>
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select value={maxPrice} onChange={handleMaxPriceChange}>
          <option value="">Max Price</option>
          <option value="500000">€500,000</option>
          <option value="1000000">€1,000,000</option>
          <option value="2000000">€2,000,000</option>
          <option value="3000000">€3,000,000</option>
          <option value="4000000">€4,000,000</option>
          <option value="5000000">€5,000,000</option>
          <option value="6000000">€6,000,000</option>
          <option value="7000000">€7,000,000</option>
          <option value="8000000">€8,000,000</option>
          <option value="9000000">€9,000,000</option>
          <option value="10000000">€10,000,000</option>
          <option value="11000000">€11,000,000</option>
          <option value="12000000">€12,000,000</option>
          <option value="13000000">€13,000,000</option>
          <option value="14000000">€14,000,000</option>
          <option value="15000000">€15,000,000</option>
          <option value="20000000">€20,000,000</option>
        </Select>
        <Select value={minSquareMeters} onChange={handleMinSquareMetersChange}>
          <option value="">Min Square Meters</option>
          <option value="50">50 sqm</option>
          <option value="60">60 sqm</option>
          <option value="70">70 sqm</option>
          <option value="80">80 sqm</option>
          <option value="90">90 sqm</option>
          <option value="100">100 sqm</option>
          <option value="120">120 sqm</option>
          <option value="150">150 sqm</option>
          <option value="200">200 sqm</option>
        </Select>
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
                  <ImageContainer>
                    <p>
                      <img src={result.mainImg} alt="Main" />
                    </p>
                  </ImageContainer>
                  <br />
                  <Title>Description:</Title> {result.description}
                  <br />
                  <Title>Category:</Title> {result.category}
                  <br />
                  <Title>Street address:</Title>{' '}
                  {result.address.street} {result.address.streetNumber}
                  <br />
                  <br />
                  <Title>Price:</Title> {result.price} {result.currency}
                  <br />
                  <Title>Size:</Title> {result.squareMeters}{' '}
                  {result.unitOfArea}
                  <br />
                  <Title>Realtor:</Title> {result.realtor}
                  <br />
                </Link>
              </ResultItem>
            ))}
          </ul>
        </ResultsContainer>
      )}

      {/* Displays error message */}
      {searchError && (
        <ErrorMessage>
          {searchError}
        </ErrorMessage>
      )}
    </div>
  );
};

// STYLING

const ImageContainer = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  object-fit: cover;
`;

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

const Select = styled.select`
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

const Title = styled.strong`
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

