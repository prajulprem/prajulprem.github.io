require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BarData = require('./models/barModel');
const PieData = require('./models/pieModel');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Endpoint to get bar chart data
app.get('/api/charts/barData', async (req, res) => {
  try {
    const barData = await BarData.find({});
    res.json(barData);
  } catch (error) {
    console.error('Error fetching bar data:', error);
    res.status(500).json({ message: 'Failed to fetch bar data' });
  }
});

// Endpoint to get pie chart data
app.get('/api/charts/pieData', async (req, res) => {
  try {
    const pieData = await PieData.find({});
    res.json(pieData);
  } catch (error) {
    console.error('Error fetching pie data:', error);
    res.status(500).json({ message: 'Failed to fetch pie data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
