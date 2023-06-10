import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components/macro';

// Create a styled container for the Lottie animation
const LottieContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  & > div {
    width: 15vw; // Set the width of the Lottie animation to 15% of the viewport width
    height: 15vh; // Set the height of the Lottie animation to 15% of the viewport height
  }

  .lottie {
    margin: auto; // Center the Lottie animation within its container
  }
`;

const Loading = () => {
  return (
    <LottieContainer>
      <Player
        loop // Set the animation to loop
        autoplay // Set the animation to play automatically
        src="https://assets9.lottiefiles.com/packages/lf20_LzmrHiRSDZ.json" // Set the source of the animation
        className="lottie" // Add a class to the Lottie animation for styling purposes
        speed={1} />
    </LottieContainer>
  )
};

export default Loading;