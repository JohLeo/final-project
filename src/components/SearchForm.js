/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

  // Default search results
  useEffect(() => {
    // Perform the search with default parameters
    fetch('https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties')
      .then((response) => response.json())
      .then((data) => {
        // Process the search results
        console.log('Default search results:', data);

        if (data.length === 0) {
          setSearchResults([]);
          setSearchError('No properties available.');
        } else {
          const defaultResults = data.slice(0, 3).map((result) => ({
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

          setSearchResults(defaultResults);
          setSearchError('');
        }
      })
      .catch((error) => {
        console.error('Error performing search:', error);
        setSearchError('An error occurred while performing the search. Please try again later.');
      });
  }, []);

  return (
    <Container>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          placeholder="Search by city"
          value={searchTerm}
          onChange={handleSearchChange} />
        <SearchInput
          type="number"
          placeholder="Max Price"
          min="0"
          value={maxPrice}
          onChange={handleMaxPriceChange} />
        <SearchInput
          type="number"
          placeholder="Min Square Meters"
          min="0"
          value={minSquareMeters}
          onChange={handleMinSquareMetersChange} />
        <SearchSelect value={category} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
        </SearchSelect>
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      {searchResults.length > 0 ? (
        <SearchResults>
          {searchResults.map((result) => (
            <SearchResult key={result.id}>
              <SearchResultImage src={result.mainImg} alt={result.description} />
              <SearchResultContent>
                <SearchResultCategory>{result.category}</SearchResultCategory>
                <SearchResultDescription>{result.description}</SearchResultDescription>
                <SearchResultDetails>
                  <SearchResultDetail>
                    <span>Realtor:</span> {result.realtor}
                  </SearchResultDetail>
                  <SearchResultDetail>
                    <span>Price:</span> {result.price} {result.currency}
                  </SearchResultDetail>
                  <SearchResultDetail>
                    <span>Square Meters:</span> {result.squareMeters} {result.unitOfArea}
                  </SearchResultDetail>
                  <SearchResultDetail>
                    <span>Address:</span> {result.address.street} {result.address.streetNumber}
                  </SearchResultDetail>
                </SearchResultDetails>
                <Link to={`/property/${result.id}`}>View Details</Link>
              </SearchResultContent>
            </SearchResult>
          ))}
        </SearchResults>
      ) : (
        <ErrorMessage>{searchError}</ErrorMessage>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const SearchSelect = styled.select`
  padding: 10px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SearchResult = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
`;

const SearchResultImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const SearchResultContent = styled.div`
  margin-top: 10px;
`;

const SearchResultCategory = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const SearchResultDescription = styled.p`
  margin: 10px 0;
`;

const SearchResultDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const SearchResultDetail = styled.div`
  flex: 1 0 50%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;
