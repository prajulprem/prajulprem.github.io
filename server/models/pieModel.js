const mongoose = require('mongoose');

const pieDataSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

module.exports = mongoose.model('PieData', pieDataSchema);
