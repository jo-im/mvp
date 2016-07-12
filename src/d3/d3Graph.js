window.createGraph = function() {
console.log('coming through');
var data = spData;
var data2 = productData;
var data3 = sleepData;
var data4 = poorDietData;
var data5 = stressData;

// console.log('data is', data);

var vis = d3.select('#visualization'),
  WIDTH = 1000,
  HEIGHT = 500,
  MARGINS = {
  	top: 20,
  	right: 20,
  	bottom: 20,
  	left: 50
  },
   xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1, 31]),
   yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 1]),
   xAxis = d3.svg.axis().scale(xScale),
   yAxis = d3.svg.axis().scale(yScale).orient("left");

 vis.append("svg:g")
   .attr("transform", "translate(0, " + (HEIGHT - MARGINS.bottom) + ")")
   .call(xAxis);

 vis.append("svg:g")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);

 var skinProblemLine = d3.svg.line()
     .x(function(d) {
       return xScale(d.date);
     })
     .y(function(d) {
       return yScale(d.attr)
     });

 vis.append("svg:path")
  .attr("d", skinProblemLine(data))
  .attr("stroke", "red")
  .attr("stroke-width", 2)
  .attr("fill", "none");

  vis.append('svg:path')
  .attr('d', skinProblemLine(data2))
  .attr('stroke', 'green')
  .attr('stroke-width', 2)
  .attr('fill', 'none');

   vis.append('svg:path')
  .attr('d', skinProblemLine(data3))
  .attr('stroke', 'blue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');

   vis.append('svg:path')
  .attr('d', skinProblemLine(data4))
  .attr('stroke', 'brown')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
  
   vis.append('svg:path')
  .attr('d', skinProblemLine(data5))
  .attr('stroke', 'orange')
  .attr('stroke-width', 2)
  .attr('fill', 'none');

}
createGraph();


