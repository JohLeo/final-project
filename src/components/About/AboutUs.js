import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { ContainerColumn } from '../GlobalStyles';
import Button from '../lib/Button'

export const About = () => {
  return (
    <BgAbout>
      <AboutRow>
        <ContainerColumn>
          <UsH1>
            [Company Name] <br />
            where exceptional homes find their perfect match.
          </UsH1>
          <UsText>
            We embarked on a journey driven by our passion for connecting
            individuals with their dream homes. We believe that finding the perfect living
            space is an essential part of crafting a fulfilling life.   <br /> <br />

            Our dedicated team of professionals is committed to providing you with an
            unforgettable homebuying experience. With an acute understanding of the real
            estate market and a keen eye for detail, we curate a collection of extraordinary
            properties that cater to a variety of lifestyles and preferences. <br /> <br />

            Begin your journey towards finding your dream home today. <br /> <br />
          </UsText>
          <AboutBtn>
            <Link to="/aboutus">
              <Button
                type="submit"
                text="Read more" />
            </Link>
            <ContactLink to="/contact">
              <Button type="submit" text="Contact us" />
            </ContactLink>
          </AboutBtn>
        </ContainerColumn>

        <UsImage
          src="https://i.postimg.cc/pXGJs0tR/pexels-gerritt-tisdale-903028.jpg"
          alt="Home estate" />

      </AboutRow>

    </BgAbout>

  )
};

const BgAbout = styled.div`
background-color: #E6E6E6;
padding: 20px 0;
`
const AboutRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const AboutBtn = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 18px;
`

const UsText = styled.p`
 padding: 0 28px;
 white-space: pre-wrap;
 color: #414142;
 font-size: 14px;
 font-weight: 300;
 max-width: 500px;
`
const UsH1 = styled.h1`
  padding: 20px 28px;
  margin: 0;
  color: #414142;
  font-size: 24px;
  font-weight: 400;
`

const UsImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 350px;
  margin: 10px;
  border: 20px solid white;
  align-self: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactLink = styled(Link)`
  text-decoration: none;
`;
