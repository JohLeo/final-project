import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/lib/Button';
import { ColumnLeft } from '../GlobalStyles';
import { Realtor, ContactInfo } from '../lib/Realtors';
import { HeadImage, MH1, MH2, MH3, UsText, AgentContainer, AgentImg } from './About.styled';

export const AboutUs = () => {
  return (
    <>
      <HeadImage />
      <ColumnLeft>
        <MH1>
        HOMEIGO
        </MH1>
        <MH2>
        Where exceptional homes find their perfect match
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
            <ContactInfo
              title="Founder"
              name="Hannah Ek"
              phone="+46 70 53 811 46"
              email="hannah@homeigo.se" />
          </AgentImg>

          <AgentImg>
            <Realtor
              src="https://i.postimg.cc/hv7YgFkr/Sammy-The-Sally.png"
              alt="Sammy the proffessional"
              ariaLabel="Picture of Sammy" />
            <ContactInfo
              title="Founder"
              name="Sammy Olsson"
              phone="+46 70 53 811 48"
              email="sammy@homeigo.se" />
          </AgentImg>

          <AgentImg>
            <Realtor
              src="https://i.postimg.cc/T19wm8zJ/Jojo.png"
              alt="Johanna"
              ariaLabel="Picture of Johanna" />
            <ContactInfo
              title="Founder"
              name="Johanna Leonsson"
              phone="+46 70 63 800 47"
              email="johanna@homeigo.se" />
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