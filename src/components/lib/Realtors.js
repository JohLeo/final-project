import React from 'react';
import styled from 'styled-components';

const RealtorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

const RealtorImage = styled.img`
  max-width: 150px;
  height: auto;
  border-style: solid;
  border-width: 5px 5px 14px 5px; 
  border-color: #E6E6E8;
  margin: 10px 0;
`;

export const Realtor = ({ src, alt, ariaLabel }) => {
  return (
    <RealtorContainer>
      <RealtorImage
        src={src}
        alt={alt}
        aria-label={ariaLabel} />
    </RealtorContainer>
  );
};

export const Title = styled.p`
 margin: 0;
 color: var(--text);
 font-size: 10px;
 font-weight: 300;
`
export const Name = styled.p`
 margin: 0;
 color: var(--text);
 font-size: 14px;
 font-weight: 400;
 text-transform: uppercase;
`
export const Phone = styled.a`
 margin: 10px 0 0;
 color: var(--text);
 font-size: 14px;
 font-weight: 700;
 text-decoration: none;
`
export const Email = styled.a`
 margin: 0;
 color: var(--text);
 font-size: 10px;
 font-weight: 500;
 text-decoration: none;
`
export const UsDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`

export const ContactInfo = ({ title, name, phone, email }) => {
  return (
    <UsDetails>
      <Title>{title}</Title>
      <Name>{name}</Name>
      <Phone href={`tel:${phone}`}>{phone}</Phone>
      <Email href={`mailto:${email}`}>{email}</Email>
    </UsDetails>
  );
};