const express = require('express');
const router = express.Router();
const Shop = require('../models/Shop'); // Include the Shop model

// 1. Get all shops from the database
router.get('/', async (req, res) => {
  try {
    const shops = await Shop.find(); // Fetch shops from the database
    res.json(shops);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching shops', error: err.message });
  }
});

// 2. Add new shops (bulk insert)
router.post('/bulk-insert', async (req, res) => {
  try {
    const shops = req.body; // Expect an array of shop objects in the request body
    if (!Array.isArray(shops)) {
      return res.status(400).json({ message: 'Input should be an array of shops' });
    }

    await Shop.insertMany(shops);
    res.status(201).json({ message: 'Shops added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error inserting shops', error: err.message });
  }
});

// 3. Fallback sample shops (if no database is used)
const sampleShops = [
  {
    id: 1,
    name: 'Delicious Tiffins',
    owner: 'Rahul Sharma',
    contact: '9876543210',
    address: '123, Main Street, New Delhi',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Healthy Bites',
    owner: 'Pooja Gupta',
    contact: '8765432109',
    address: '45, Green Avenue, Mumbai',
    image: 'https://via.placeholder.com/150',
  },
];

// GET fallback route to serve sample data
router.get('/sample', (req, res) => {
  res.json(sampleShops);
});

module.exports = router;
