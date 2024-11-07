require('dotenv').config();
const mongoose = require('mongoose');
const BarData = require('./models/barModel');
const PieData = require('./models/pieModel');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const seedBarData = [
  { week: 'Week 1', guest: 400, user: 200 },
  { week: 'Week 2', guest: 300, user: 220 },
  { week: 'Week 3', guest: 200, user: 320 },
  { week: 'Week 4', guest: 278, user: 250 },
];

const seedPieData = [
  { name: 'Basic Tees', value: 55 },
  { name: 'Custom Short Pants', value: 31 },
  { name: 'Super Hoodies', value: 14 },
];

async function seedDatabase() {
  try {
    await BarData.deleteMany({});
    await PieData.deleteMany({});
    await BarData.insertMany(seedBarData);
    await PieData.insertMany(seedPieData);
    console.log('Data seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seedDatabase();
