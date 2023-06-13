/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BingMap = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://final-project-backend-4l5tpsxxuq-ew.a.run.app/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    // Callback function to initialize the map
    window.initMap = () => {
      const mapOptions = {
        credentials: 'AgTgqtt7fZyKR5DLzQKkdxlkvK1i4egLlVkYOY612APv9RisryM8jiKqz-OcxcLX',
        center: new window.Microsoft.Maps.Location(59.33205084980061, 18.084713755375606),
        zoom: 15,
        mapTypeId: window.Microsoft.Maps.MapTypeId.roadmap
      };

      const map = new window.Microsoft.Maps.Map(document.getElementById('map'), mapOptions);

      // Add pushpins for each property
      properties.forEach((property) => {
        const location = new window.Microsoft.Maps.Location(property.latitude, property.longitude);
        const pin = new window.Microsoft.Maps.Pushpin(location);

        window.Microsoft.Maps.Events.addHandler(pin, 'click', () => {
          navigate(`/properties/${property._id}`);
        });

        map.entities.push(pin);
      });

      // Cleanup resources when the component is unmounted
      return () => {
        map.dispose();
        window.initMap = undefined;
      };
    };

    const loadMap = () => {
      // Load the Bing Maps script dynamically
      const script = document.createElement('script');
      script.src = 'https://www.bing.com/api/maps/mapcontrol?key=AgTgqtt7fZyKR5DLzQKkdxlkvK1i4egLlVkYOY612APv9RisryM8jiKqz-OcxcLX&callback=initMap';
      script.async = true;
      document.body.appendChild(script);
    };

    loadMap();
  }, [properties, navigate]);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '1rem 0',
        height: '400px'
      }} />
  );
};

export default BingMap;
