var mongoose = require('mongoose');

var dateSchema = new mongoose.Schema({
  date: String,
  effects: Array, 
  breakout: String
});

module.exports = mongoose.model('Date', dateSchema);