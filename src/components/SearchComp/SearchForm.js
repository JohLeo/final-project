/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Button from '../lib/Button';
import { Container,
  SearchH1,
  SearchForm,
  Input,
  Select,
  ErrorMessage,
  SearchFindCard,
  SearchFindImg } from './search.style'
import { SearchContainer, EstateInfo } from '../lib/Listings'

export const Search = () => {
  // State variables for search inputs, results, and error messages.
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minSquareMeters, setMinSquareMeters] = useState('');
  const [category, setCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState('');
  const categoryOptions = ['Apartment', 'House', 'Vacation Home'];

  // Event handlers for input changes.
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
    // Build the query string based on the search parameters.
    let queryString = `?location=${searchTerm}`;
    if (category) {
      queryString += `&type=${category}`;
    }
    try {
      // Perform the search with the query string.
      const response = await fetch(`https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties${queryString}`);
      const data = await response.json();
      // Process the search results.
      let filteredData = data;
      if (maxPrice) {
        filteredData = filteredData.filter((result) => result.price <= maxPrice);
      }
      if (minSquareMeters) {
        filteredData = filteredData.filter((result) => result.squareMeters >= minSquareMeters);
      }
      if (filteredData.length === 0) {
        setSearchResults([]);
        setSearchError('No properties found with the given criteria.');
      } else {
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
          mainImg: result.mainImg,
          roomNo: result.roomNo
        }));
        setSearchResults(modifiedData);
        setSearchError('');
      }
    } catch (error) {
      console.error('Error performing search:', error);
      setSearchError('An error occurred while performing the search. Please try again later.');
    }
  };

  // Default search results.
  useEffect(() => {
    // Perform the search with default parameters.
    fetch('https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties')
      .then((response) => response.json())
      .then((data) => {
        // Process the search results.
        if (data.length === 0) {
          setSearchResults([]);
        } else {
          const defaultResults = data.slice(0, 4).map((result) => ({
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
            roomNo: result.roomNo,
            mainImg: result.mainImg
          }));

          setSearchResults(defaultResults);
          setSearchError('');
        }
      })
      .catch((error) => {
        console.error('Error performing default search:', error);
        setSearchError('An error occurred while performing the default search. Please try again later.');
      });
  }, []);

  // Render the component.
  return (
    <>
      <Container>

        <SearchH1>Find your home</SearchH1>
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
      </Container>

      <SearchContainer>
        {searchResults.length > 0 ? (
          <SearchFindCard>
            {searchResults.map((result) => (
              <div key={result.id}>

                <SearchFindImg
                  src={result.mainImg}
                  alt="Beautiful home"
                  ariaLabel="Image of estate" />

                <EstateInfo
                  category={result.category}
                  adress={`${result.address.street} ${result.address.streetNumber}`}
                  city={result.address.city}
                  price={`${result.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ${result.currency}`}
                  square={`${result.squareMeters} ${result.unitOfArea}`} />
                <StyledLink to={`/properties/${result.id}`}>View Details</StyledLink>

              </div>
            ))}
          </SearchFindCard>
        ) : (
          <ErrorMessage>{searchError}</ErrorMessage>
        )}
      </SearchContainer>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  margin: 8px 0 20px 0;

  & a:hover {
    color: var(--green3)
  }
`;