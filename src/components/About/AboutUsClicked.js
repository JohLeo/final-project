import React from 'react';
import styled from 'styled-components/macro';
import { ContainerColumn, ContainerRow } from '../GlobalStyles';
import { Realtor } from '../lib/Realtors';

export const AboutUs = () => {
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
            properties that cater to a variety of lifestyles and preferences.
            We strive to offer accurate and comprehensive information about each property,
            empowering you to make informed decisions with confidence.
            Our goal is to foster strong, long-lasting relationships with our clients,
            built on trust and exceptional customer service. <br /> <br />

            Whether youre a first-time homebuyer, a growing family in search of more space,
            or an individual seeking a tranquil retreat, we are here to guide you
            every step of the way.
            Begin your journey towards finding your dream home today. <br /> <br />

            Please note that the properties showcased by [Company Name] are for
            illustrative purposes only. Contact us to explore the real estate options
            available to you.
          </UsText>
        </ContainerColumn>

        <UsImage
          src="https://i.postimg.cc/pXGJs0tR/pexels-gerritt-tisdale-903028.jpg"
          alt="Home estate" />

      </AboutRow>

      <ContainerRow>
        <UsH3>
            Say hi our realtors
        </UsH3>
        <Realtor
          src="https://i.pinimg.com/564x/d4/63/b9/d463b9355839ec568dd3452ffa36a575.jpg"
          alt="Hannah the Guru"
          ariaLabel="Picture of Hannah"
          name="Hannah" />

        <Realtor
          src="https://i.pinimg.com/564x/d4/63/b9/d463b9355839ec568dd3452ffa36a575.jpg"
          alt="Sammy the pro"
          ariaLabel="Picture of Sammy"
          name="Sammy" />

        <Realtor
          src="https://i.pinimg.com/564x/d4/63/b9/d463b9355839ec568dd3452ffa36a575.jpg"
          alt="Johanna"
          ariaLabel="Picture of Johanna"
          name="Johanna" />

      </ContainerRow>
    </BgAbout>

  )
};

const BgAbout = styled.div`
background-color: #E6E6E6;
`
const AboutRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const UsText = styled.p`
 padding: 0 28px;
 white-space: pre-wrap;
 color: #414142;
 font-size: 14px;
 font-weight: 300;
`
const UsH1 = styled.h1`
  padding: 0 28px;
  margin: 40px 0 0;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const UsH3 = styled.h3`
  margin: 20px 0;
  padding: 0 28px;
  color: #414142;
  font-size: 24px;
  font-weight: 400;
`