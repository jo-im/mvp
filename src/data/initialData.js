//create a function that takes the current month and the current year
window.listCalendar = function(month, year) {
  var monthString = month.toString();
  var yearString = year.toString();
  var allDates = [];
  console.log('month is now', month);
  console.log('typeof month is', typeof month);
  var days;
  if (month === 2) {
    days = 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
  } else {
    days = 31;
  }

  for (var i = 1; i <= days; i++) {
    var currentDay = monthString + '/' + i + '/' + yearString;
    allDates.push({ date: currentDay, effects: [], breakout: 'false' });
  }
  return allDates;
};


var d = new Date();
window.currentMonth = d.getMonth();
window.currentYear = Number(d.getFullYear().toString().slice(2));

window.allDates = listCalendar(currentMonth, currentYear);
