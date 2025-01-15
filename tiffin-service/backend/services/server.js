const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const shopRoutes = require('./routes/shopRoutes');
const purchaseHistoryRoutes = require('./routes/purchaseHistoryRoutes');

app.use('/api/purchase-history', purchaseHistoryRoutes);

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/shops', shopRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
