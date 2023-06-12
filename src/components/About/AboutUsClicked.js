import React from 'react';
import styled from 'styled-components/macro';
import { RowLeft, ColumnLeft } from '../GlobalStyles';
import { Realtor } from '../lib/Realtors';

export const AboutUs = () => {
  return (
    <BgMore>
      <MoreImg
        src="https://i.postimg.cc/BnqwFZXs/pexels-daniel-frank-1111766.jpg"
        alt="Home estate" />
      <ColumnLeft>
        <MH1>
          HOMEIGO
        </MH1>
        <MH2>
         Where exceptional homes find their perfect match.
        </MH2>

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

        <MH3>
            Our agents
        </MH3>
        <RowLeft>
          <Realtor
            src="https://i.postimg.cc/G2v9LTzN/Guru-The-Hannah.png"
            alt="Hannah the Guru"
            ariaLabel="Picture of Hannah"
            name="Hannah" />

          <Realtor
            src="https://i.pinimg.com/564x/d4/63/b9/d463b9355839ec568dd3452ffa36a575.jpg"
            alt="Sammy the proffessional"
            ariaLabel="Picture of Sammy"
            name="Sammy" />

          <Realtor
            src="https://i.postimg.cc/T19wm8zJ/Jojo.png"
            alt="Johanna"
            ariaLabel="Picture of Johanna"
            name="Johanna" />

        </RowLeft>

      </ColumnLeft>
    </BgMore>

  )
};

const BgMore = styled.div`
background-color: #E6E6E6;
padding: 40px 28px 40px 28px;
`
const MoreImg = styled.img`
  width: 95%;
  height: 95%;
  border: 20px solid white;
`;

const MH1 = styled.h1`
  padding: 0;
  margin: 40px 0 0;
  color: #414142;
  font-size: 34px;
  font-weight: 5s00;
`
const MH2 = styled.h3`
  margin: 12px 0 0;
  color: #414142;
  font-size: 24px;
  font-weight: 400;
`
const MH3 = styled.h3`
  margin: 20px 0 0;
  padding: 0;
  color: #414142;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;

`
const UsText = styled.p`
 padding: 0 2rem 1rem 0;
 color: #414142;
 font-size: 14px;
 font-weight: 300;
`

