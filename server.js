var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/dates');
var dateController = require('./server/dates/dateController.js');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
app.use(express.static(__dirname + '/'));

app.post('/addCauseToDate', dateController.addEffect);
app.get('/all', dateController.allDates);

/////////////////////////////////////////////////////////

app.listen(8000, function() {
  console.log('listening');
});
