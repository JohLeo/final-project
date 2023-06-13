/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
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
  const categoryOptions = ['Apartment', 'House', 'Vacation Home'];

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

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    // Build the query string based on the search parameters
    let queryString = `?location=${searchTerm}`;

    if (category) {
      queryString += `&type=${category}`;
    }

    try {
      // Perform the search with the query string
      const response = await fetch(`https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties${queryString}`);
      const data = await response.json();

      // Process the search results
      console.log('Search results:', data);

      if (data.length === 0) {
        setSearchResults([]);
        setSearchError('Sorry city not found, we only operate in Stockholm, Helsingborg and Malmö at the moment.');
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
    } catch (error) {
      console.error('Error performing search:', error);
      setSearchError('An error occurred while performing the search. Please try again later.');
    }
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
          setSearchError('Sorry city not found, we only operate in Stockholm, Helsingborg and Malmö at the moment.');
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
        <Input
          type="text"
          placeholder="Search by City"
          value={searchTerm}
          onChange={handleSearchChange} />
        <Select value={category} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
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
      </SearchForm>
      {searchResults.length > 0 ? (
        <SearchResults>
          {searchResults.map((result) => (
            <SearchResult key={result.id}>
              <SearchResultImage src={result.mainImg} alt={result.description} />
              <SearchResultCategory>{result.category}</SearchResultCategory>
              <SearchResultContent>
                <SearchResultDetail>
                  <span>Address:</span> {result.address.street} {result.address.streetNumber}
                </SearchResultDetail>
                <SearchResultDescription>{result.description}</SearchResultDescription>
                <SearchResultDetails>
                  <SearchResultDetail>
                    <span>Price:</span> {result.price} {result.currency}
                  </SearchResultDetail>
                  <SearchResultDetail>
                    <span>Square Meters:</span> {result.squareMeters} {result.unitOfArea}
                  </SearchResultDetail>
                  <SearchResultDetail>
                    <span>Realtor:</span> {result.realtor}
                  </SearchResultDetail>
                </SearchResultDetails>
                <Link to={`/properties/${result.id}`}>View Details</Link>
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
`;

const SearchForm = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-bottom: 20px;
gap: 10px;

@media (max-width: 425px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.8rem;
`;

const Select = styled.select`
padding: 12px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 4px;
flex: 1;
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
  margin: 10px 0 10px 0;

`;

const SearchResultCategory = styled.h3`
  margin: 1rem 0 0 0;
  font-size: 18px;
`;

const SearchResultDescription = styled.p`
  margin: 10px 0;
`;

const SearchResultDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const SearchResultDetail = styled.div`
  margin-bottom: 5px;
  flex: 0 0 50%;

  @media (max-width: 425px) {
    flex: 0 0 100%;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;
