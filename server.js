var mongoose = require('mongoose');
var express = require('express');
var path = require('path');

mongoose.connect('mongodb://localhost/dates');

var app = express();

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.use(express.static(__dirname + '/'));

app.listen(8000, function() {
  console.log('listening');
});