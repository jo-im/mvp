window.firstData = function() {
  window.spData = createGraphData(currentMonth, currentYear);
  window.productData = createGraphData(currentMonth, currentYear);
  window.poorDietData = createGraphData(currentMonth, currentYear);
  window.sleepData = createGraphData(currentMonth, currentYear);
  window.stressData = createGraphData(currentMonth, currentYear);
}

firstData();
