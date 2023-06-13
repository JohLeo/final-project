import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Button from 'components/lib/Button';
import { ColumnLeft } from '../GlobalStyles';
import { Realtor } from '../lib/Realtors';

export const AboutUs = () => {
  return (
    <>
      <HeadImage />
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
        <AgentContainer>
          <AgentImg>
            <Realtor
              src="https://i.postimg.cc/G2v9LTzN/Guru-The-Hannah.png"
              alt="Hannah the Guru"
              ariaLabel="Picture of Hannah" />
            <Title>Founder</Title>
            <Name>Hannah Ek</Name>
            <Phone href="tel:+46706735400">+46 70 53 811 46</Phone>
            <Email href="mailto:hannah@guru.se">hannah@homeigo.se</Email>
          </AgentImg>

          <AgentImg>
            <Realtor
              src="https://i.postimg.cc/hv7YgFkr/Sammy-The-Sally.png"
              alt="Sammy the proffessional"
              ariaLabel="Picture of Sammy" />
            <Title>Founder</Title>
            <Name>Sally Olsson</Name>
            <Phone href="tel:+46706735400">+46 70 53 811 48</Phone>
            <Email href="mailto:hannah@guru.se">sammy@homeigo.se</Email>
          </AgentImg>

          <AgentImg>
            <Realtor
              src="https://i.postimg.cc/T19wm8zJ/Jojo.png"
              alt="Johanna"
              ariaLabel="Picture of Johanna" />
            <Title>Founder</Title>
            <Name>Johanna Leonsson</Name>
            <Phone href="tel:+46706735400">+46 70 638 00 47</Phone>
            <Email href="mailto:johanna@leonsson.se">johanna@homeigo.se</Email>
          </AgentImg>

        </AgentContainer>

        <Link to="/">
          <Button
            type="submit"
            text="Return" />
        </Link>
      </ColumnLeft>
    </>

  )
};

const HeadImage = styled.div`
  background-image: url('https://i.postimg.cc/BnqwFZXs/pexels-daniel-frank-1111766.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  height: 400px;
  margin: 0;
`;

const MH1 = styled.h1`
  padding: 0;
  margin: 40px 20px 0;
  color: #414142;
  font-size: 34px;
  font-weight: 5s00;
`
const MH2 = styled.h3`
  margin: 12px 0 0 20px;
  color: #414142;
  font-size: 24px;
  font-weight: 400;
`
const MH3 = styled.h3`
  margin: 20px 0 0 20px;
  padding: 0;
  color: #414142;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;

`
const UsText = styled.p`
 padding: 0 2rem 1rem 0;
 margin: 20px;
 color: var(--text);
 font-size: 14px;
 font-weight: 300;
`
const AgentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const AgentImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px;

  @media (min-width: 375px) {
    width: 42%;
  }
  @media (min-width: 768px) {
    width: 18%;
  }
`
const Title = styled.p`
 margin: 0;
 color: var(--text);
 font-size: 10px;
 font-weight: 300;
`
const Name = styled.p`
 margin: 0;
 color: var(--text);
 font-size: 14px;
 font-weight: 400;
 text-transform: uppercase;
`

const Phone = styled.a`
 margin: 10px 0 0;
 color: var(--text);
 font-size: 14px;
 font-weight: 700;
 text-decoration: none;
`
const Email = styled.a`
 margin: 0;
 color: var(--text);
 font-size: 10px;
 font-weight: 500;
 text-decoration: none;
`