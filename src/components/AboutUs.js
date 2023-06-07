import React from 'react';
import { ContainerColumn, ContainerRow } from './GlobalStyles'
import { RealtorImg, RealtorTxt } from './lib/Realtors'

export const About = () => {
  return (
    <ContainerRow>
      <ContainerColumn>
        <RealtorImg
          src="https://i.pinimg.com/564x/d4/63/b9/d463b9355839ec568dd3452ffa36a575.jpg"
          alt="Hannah the Guru"
          ariaLabel="Picture of Hannah" />

        <RealtorTxt
          name="Hannah" />
      </ContainerColumn>

      <ContainerColumn>
        <RealtorImg
          src="https://i.pinimg.com/564x/d4/63/b9/d463b9355839ec568dd3452ffa36a575.jpg"
          alt="Sammy the pro"
          ariaLabel="Picture of Sammy" />

        <RealtorTxt
          name="Sammy" />
      </ContainerColumn>

      <ContainerColumn>
        <RealtorImg
          src="https://i.pinimg.com/564x/d4/63/b9/d463b9355839ec568dd3452ffa36a575.jpg"
          alt="Johanna"
          ariaLabel="Picture of Johanna" />

        <RealtorTxt
          name="Johanna" />
      </ContainerColumn>
    </ContainerRow>

  )
};

