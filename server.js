var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/dates');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
app.use(express.static(__dirname + '/'));

app.post('/addCauseToDate', function(req, res) {
  console.log('button is posting to addCauseToDate!!!!');
  console.log('req is', req.body);
});

/////////////////////////////////////////////////////////

app.listen(8000, function() {
  console.log('listening');
});
