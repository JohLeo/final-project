// IMPORT MODULES

import React, { useEffect, useState } from 'react';

// MAKE CONST OF API

const API = 'https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties';

const StartPage = () => {
  // DEFINE STATE VARIABLE TO STORE PROPERTY DATA
  const [propertyData, setPropertyData] = useState([]);

  // FETCH PROPERTY DATA FROM THE API WHEN THE COMPONENT MOUNTS
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((responseData) => {
        setPropertyData(responseData);
        console.log(responseData); // CONSOLE LOGGING THE JSON - WE CAN REMOVE THIS BEFORE DEPLOY
      });
  }, []);

  // RENDER THE COMPONENT
  return (
    <div>
      {propertyData.map((item) => (
        <div key={item.id}>
          <p>
            {item.address.city}<br />
            {item.address.street} {item.address.streetNumber}<br />
          </p>
          <p>
            {item.category}<br />
            {item.description}<br />
          </p>
          <p>
            {item.price}<br />
            {item.realtor}<br />
          </p>
        </div>
      ))}
    </div>
  );
};

export default StartPage;

// STYLING