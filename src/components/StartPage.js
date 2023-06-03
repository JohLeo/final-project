import React, { useEffect } from 'react';

const API = 'https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties';

const StartPage = () => {
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return null;
};

export default StartPage;
