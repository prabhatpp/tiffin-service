import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Shoplist = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/shops');
        setShops(response.data); // Store fetched data in state
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };
    fetchShops();
  }, []);

  return (
    <div>
      <h1>Shop List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {shops.map((shop) => (
          <div key={shop._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            <img
              src={shop.image}
              alt={shop.name}
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h2>{shop.name}</h2>
            <p>Owner: {shop.owner}</p>
            <p>Contact: {shop.contact}</p>
            <p>Address: {shop.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoplist;
