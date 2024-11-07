const express = require('express');
const router = express.Router();
const BarData = require('../models/BarData');
const PieData = require('../models/PieData');

// Route to get bar chart data
router.get('/barData', async (req, res) => {
  try {
    const data = await BarData.find({});
    res.json(data);
  } catch (error) {
    console.error('Error fetching bar data:', error);
    res.status(500).json({ message: 'Failed to fetch bar data' });
  }
});

// Route to get pie chart data
router.get('/pieData', async (req, res) => {
  try {
    const data = await PieData.find({});
    res.json(data);
  } catch (error) {
    console.error('Error fetching pie data:', error);
    res.status(500).json({ message: 'Failed to fetch pie data' });
  }
});

module.exports = router;
