/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from './lib/Button';

export const PropertyObject = () => {
  const { id } = useParams();
  console.log('Property ID:', id);
  const [property, setProperty] = useState('');

  useEffect(() => {
    // Fetch the property information based on the ID
    fetch(`https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the property data
        console.log('Property data:', data);
        setProperty(data);
      })
      .catch((error) => {
        console.error('Error fetching property:', error);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Property Details:</h2>
      <p>
        <img src={property.mainImg} alt="Main" />
      </p>
      <p>
        <strong>Description:</strong> {property.description}
      </p>
      <p>
        <strong>Category:</strong> {property.category}
      </p>
      <p>
        <strong>Street Address:</strong> {property.address.street} {property.address.streetNumber}
      </p>
      <p>
        <strong>City:</strong> {property.address.city}
      </p>
      <p>
        <strong>Size:</strong> {property.squareMeters} {property.unitOfArea}
      </p>
      <p>
        <strong>Realtor:</strong> {property.realtor}
      </p>
      <p>
        <strong>Price:</strong> {property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} {property.currency}
      </p>
      <div>
        {property.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
      <Link to="/">
        <Button
          type="submit"
          text="Return" />
      </Link>
    </div>
  );
};
