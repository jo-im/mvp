window.listCalendar = function(month, year) {
  var monthString = month.toString();
  var yearString = year.toString();
  var allDates = [];
  var days;

  if (month === 2) {
    days = 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
  } else {
    days = 31;
  }
  var id = -1;

  for (var i = 1; i <= days; i++) {
  	id++;
    var currentDay = monthString + '/' + i + '/' + yearString;
    allDates.push({ date: currentDay, effects: [], breakout: 'false', id: id });
  }
  return allDates;
};


var d = new Date();
window.currentMonth = d.getMonth();
window.currentYear = Number(d.getFullYear().toString().slice(2));
window.allDates = listCalendar(currentMonth, currentYear);
window.selectedDate = 0;
window.buttons = [{title: 'Products', id: 'first'}, {title: 'Lack Of Sleep', id: 'second'}, {title: 'Poor Diet', id: 'third' }, {title: 'Stress', id: 'fourth'} ];

