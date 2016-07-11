//create a function that takes the current month and the current year
var listCalendar = function(month, year) {
  var allDates = [];
  var days;
  if (month === 2) {
    days = 28;
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) {
  	days = 30;
  } else {
  	days = 31;
  }

  for (var i = 1; i < days.length; i++) {
  	var currentDay = month + '/' + i + '/' + year;
    allDates.push({date: currentDay, effects: [], breakout: 'false'});
  }
  return allDates;
}

var d = new Date();
var currentMonth = d.getMonth();
var currentYear = d.getFullYear().toString().slice(2);

window.startingData = listCalendar(currentMonth, currentYear);
