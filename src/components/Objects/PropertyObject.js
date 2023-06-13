/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ObjectMainImg,
  ObjectImg,
  OverH3,
  OverH4,
  OverH5,
  ExtraImg,
  InfoDescription,
  H6,
  MainText,
  Label,
  Value,
  ItemDescription,
  Test } from './ObjectStyle'

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
    <>
      <ObjectMainImg>
        <ObjectImg src={property.mainImg} alt="Main" />
        <OverH3> {property.address.street} {property.address.streetNumber} </OverH3>
        <OverH4> {property.address.city} </OverH4>
        <OverH5> {property.squareMeters} {property.unitOfArea}</OverH5>
      </ObjectMainImg>
      <Test>
        <InfoDescription>
          <MainText>
            {property.description} <br />
          Step into this charming apartment that exudes elegance
          with its light-filled spaces and stylish wood accents.
          The open-concept living area showcases beautiful wood
          flooring, creating a warm and inviting ambiance.
          Natural light floods through large windows, illuminating
          the space and enhancing the serene atmosphere.
          The living room features a comfortable seating
          arrangement, perfect for relaxation.
          The kitchen boasts modern cabinetry that beautifully
          complements the wood theme, while offering functionality
          and style. The bedroom is a tranquil retreat,
          adorned with wooden elements and designed to provide
          utmost comfort. The bathroom is tastefully appointed,
          featuring sleek fixtures and a seamless blend of light
          tones and wooden textures. This apartment offers a
          delightful combination of sophistication and natural
          charm, creating an inviting sanctuary youll be proud
          to call home.
          </MainText>
        </InfoDescription>

        <InfoDescription>
          <H6>Info</H6>
          <PropertyInfo label="Housing type" value={property.category} />
          <PropertyInfo label="Price" value={`${property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ${property.currency}`} />
          <PropertyInfo label="Size" value={`${property.squareMeters} ${property.unitOfArea}`} />
          <PropertyInfo label="Street Address" value={`${property.address.street} ${property.address.streetNumber}`} />
          <PropertyInfo label="City" value={property.address.city} />
          <PropertyInfo label="Realtor" value={property.realtor} />
        </InfoDescription>
      </Test>

      <div>
        {property.images.map((image, index) => (
          <ExtraImg key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </>
  );
};

export const PropertyInfo = ({ label, value }) => {
  return (
    <ItemDescription>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </ItemDescription>
  );
};