import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import Button from './lib/Button';

export const PrivacyPolicy = () => {
  return (
    <Container>
      <Heading>Homeigo Privacy Policy</Heading>
      <List>
        <ListItem>
          <Paragraph>
            <strong>Loader</strong> - We utilized <Link href="https://www.lottiefiles.com">LottieFiles</Link> to enhance user experience with captivating and dynamic loading animations,<br />
          adding a touch of interactivity to our website.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <strong>Images</strong> - The stunning visuals on our website were sourced from <Link href="https://www.pexels.com">Pexels</Link>, <br />
        a generous platform providing a vast collection of high-quality,
        royalty-free images.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <strong>Map</strong> - To provide accurate and interactive mapping functionality, we integrated <Link href="https://www.bing.com/maps">BingMaps</Link>, a robust mapping service,<br /> allowing users to navigate and explore our website with ease.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Paragraph>
            <strong>Social Media Icons</strong> - Our sleek and recognizable social media icons were sourced from <Link href="https://fontawesome.com">FontAwesome</Link>,<br /> a trusted resource for high-quality and customizable icons widely used across the web.
          </Paragraph>
        </ListItem>
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  padding: 0 10px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;

const Heading = styled.h1`
  margin: 90px 10px 0;
  color: var(--text);
  font-size: 34px;
  font-weight: 200;
  text-transform: uppercase;

  @media (min-width: 426px) {
    margin: 90px 30px 0;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const Link = styled.a`
  color: #000;

  &:hover {
    font-weight: bold;
  }
`;