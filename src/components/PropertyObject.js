import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    </div>
  );
};
