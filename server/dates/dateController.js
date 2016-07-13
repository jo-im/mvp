var Date = require('./dateModel.js');

module.exports = {
  allDates: function(req, res, next) {
    findAllDates({})
      .then(function(dates) {
      	res.json(dates);
      })
      .fail(function(error) {
        next(error);
      });
  }
}