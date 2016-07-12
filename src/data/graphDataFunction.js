window.createGraphData = function(month, year) {
  //create a results array
  var results = [];

  var monthString = month.toString();
  var yearString = year.toString();
  var days;

  if (month === 2) {
    days = 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
  } else {
    days = 31;
  }

  for (var i = 1; i <= days; i++) {
    var stringDay = i.toString();
    results.push({ date: stringDay, attr: '0' });
  }
  return results;
};