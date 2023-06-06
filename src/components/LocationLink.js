import React from 'react';
import { LocationImg } from './lib/LinkCard'

export const LocationSection = () => {
  return (
    <div>
      <LocationImg
        src="https://i.postimg.cc/cLngP2Xc/apartments.png"
        alt="Apartments"
        ariaLabel="Find your new apartment"
        locationText="Apartments" />

      <LocationImg
        src="https://i.postimg.cc/Bv58nDWL/house.png"
        alt="Houses"
        ariaLabel="Find your new House"
        locationText="Houses" />

      <LocationImg
        src="https://i.postimg.cc/N0v9tDnv/vacationhome.png"
        alt="Holiday housing"
        ariaLabel="Find your new holiday house"
        locationText="Holiday homes" />
    </div>
  )
}
