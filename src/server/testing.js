// src/components/YourComponent.js
import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make API call to fetch data from your server
    fetch('http://localhost:3000/api/your-endpoint')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => setData(result))
    .catch((error) => console.error('Error fetching data:', error));
  
  }, []);

  return (
    <div>
      {/* Render your component using the fetched data */}
      {data.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </div>
  );
};

export default YourComponent;
