var Date = require('./dateModel.js');
var Q = require('q');

var findOne = Q.nbind(Date.findOne, Date);
var findAll = Q.nbind(Date.find, Date);
var create = Q.nbind(Date.create, Date);

module.exports = {
  allDates: function(req, res, next) {
    findAll({})
      .then(function(dates) {
      	console.log(dates);
      	res.json(dates);
      })
      .fail(function(error) {
        next(error);
      });
  },

  addEffect: function(req, res, next) {
  	var effect = req.body.effect;
  	var selection = req.body.selectedDate.date;
  	var breakout = req.body.selectedDate.breakout;
  	var id = req.body.selectedDate.id;
  	console.log('effect:', effect, 'selection:', selection);

  	findOne({ date: selection })
  	  .then(function(match) {
  	  	if (match) {
  	  		// if it's found, push to effects
  	  		res.send(match);
  	  	} else {
  	  		return selection;
  	  	}
  	  })
  	  .then(function(selection) {
  	  	var newDoc = {
		    "date": selection,
		    "breakout": breakout,
		    "effects": [effect],
		    "id": id
		  }
  	  	return create(newDoc);
  	  })
  	  .then(function (createdDoc) {
        if (createdDoc) {
          res.json(createdDoc);
        }
      })
      .fail(function (error) {
        next(error);
      });
  }
}