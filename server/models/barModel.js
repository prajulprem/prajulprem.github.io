const mongoose = require('mongoose');

const barDataSchema = new mongoose.Schema({
  week: String,
  guest: Number,
  user: Number,
});

module.exports = mongoose.model('BarData', barDataSchema);
