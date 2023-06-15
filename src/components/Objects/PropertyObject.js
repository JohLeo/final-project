/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContactInfo } from '../lib/Realtors';
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
  ObjectInfo,
  AgentBox,
  SmallRealtor,
  Headline } from './ObjectStyle';

export const PropertyObject = () => {
  const { id } = useParams();
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
      <ObjectInfo>
        <InfoDescription>
          <Headline>
            {property.headline}
          </Headline>
          <MainText>
            {property.description} <br />
          </MainText>
        </InfoDescription>

        <InfoDescription>
          <H6>Info</H6>
          <PropertyInfo label="Housing type" value={property.category} />
          <PropertyInfo label="Price" value={`${property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ${property.currency}`} />
          <PropertyInfo label="Size" value={`${property.squareMeters} ${property.unitOfArea}`} />
          <PropertyInfo label="Number of rooms" value={`${property.roomNo}`} />
          <PropertyInfo label="Street Address" value={`${property.address.street} ${property.address.streetNumber}`} />
          <PropertyInfo label="City" value={property.address.city} />

          <AgentBox>
            <SmallRealtor
              src={property.realtorImg}
              alt={property.realtor}
              ariaLabel={property.realtor} />
            <ContactInfo
              title="Agent"
              name={property.realtor}
              phone={property.phoneNumber}
              email={property.eMail} />
          </AgentBox>
        </InfoDescription>
      </ObjectInfo>

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