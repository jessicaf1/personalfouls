import '../src/styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').innerText = "";
});

// const response = await fetch('http://nflarrest.com/api/v1/player');
// const myJson = await response.json();
// console.log(JSON.stringify(myJson))

// fetch("http://nflarrest.com/api/v1/player", {

// });
let arr; 
fetch("http://nflarrest.com/api/v1/player")
  .then(function(response) {
    //   debugger
    if (response.status !== 200) {
        
      console.log(
        "error" + response.status
      );
      return;
    }
    response.json().then(function(data) {
        
        arr = Object.values(data)
        debugger
        createVisualization();

      console.log(data);
    //   console.log(data.map(player => player.Position)) 
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
  
  var svgWidth = 900, svgHeight = 500; 
  var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .attr('class', 'svg-container')

      var line = svg.append('line')
        .attr("x1", 40)
        .attr("x2", 40)
        .attr("y1", 0)
        .attr("y2", 600)
        .attr("stroke", "white");


      svg.append("line")
        .attr("x1", 130)
        .attr("x2", 130)
        .attr("y1", 0)
        .attr("y2", 600)
        .attr("stroke", "white");

          svg
            .append("line")
            .attr("x1", 220)
            .attr("x2", 220)
            .attr("y1", 0)
            .attr("y2", 600)
            .attr("stroke", "white");

             svg
               .append("line")
               .attr("x1", 310)
               .attr("x2", 310)
               .attr("y1", 0)
               .attr("y2", 600)
               .attr("stroke", "white");
               
                svg
                  .append("line")
                  .attr("x1", 400)
                  .attr("x2", 400)
                  .attr("y1", 0)
                  .attr("y2", 600)
                  .attr("stroke", "white");

                   svg
                     .append("line")
                     .attr("x1", 490)
                     .attr("x2", 490)
                     .attr("y1", 0)
                     .attr("y2", 600)
                     .attr("stroke", "white");

                      svg
                        .append("line")
                        .attr("x1", 580)
                        .attr("x2", 580)
                        .attr("y1", 0)
                        .attr("y2", 600)
                        .attr("stroke", "white");

                         svg
                           .append("line")
                           .attr("x1", 670)
                           .attr("x2", 670)
                           .attr("y1", 0)
                           .attr("y2", 600)
                           .attr("stroke", "white");

                            svg
                              .append("line")
                              .attr("x1", 760)
                              .attr("x2", 760)
                              .attr("y1", 0)
                              .attr("y2", 600)
                              .attr("stroke", "white");

                                svg
                                  .append("line")
                                  .attr("x1", 850)
                                  .attr("x2", 850)
                                  .attr("y1", 0)
                                  .attr("y2", 600)
                                  .attr("stroke", "white");

//   var rect = svg.append('rect')
//     .attr('x', 400)
//     .attr('y', 100)
//     .attr('width', 200)
//     .attr('height', 100)
//     .attr('fill', 'green')

// d3.json("http://nflarrest.com/api/v1/player", function(error, data) {
//     data.forEach(function(d) {
//         d.Position = d.Position;
//         d.arrest_count = +d.arrest_count;
//     });

//     svg.append('d.Position');

// } 

// d3.csv("http://nflarrest.com/api/v1/player");
//     debugger

//   d3.csv("http://nflarrest.com/api/v1/player",
//     function(d) {
//         debugger
//       return {
//         position: d.Position,
//         arrest_count: +d.arrest_count,
//         name: d.name
//       };
//     },
//     function(error, rows) {
//         debugger
//       arr = rows;
//       console.log(arr);
//       createVisualization();
//     });
// let a = [[3, 4], [500, 6]]
// let arr2 = arr.map(player=> { return  player.arrest_count} )

var xScale = d3.scaleLinear()
  .domain([0, 15])
  .range([0, 15]);

var yScale = d3.scaleLinear()
  .domain([0, 20])
  .range([0, 20]);

    function createVisualization() { 
        debugger
        svg.selectAll("circle")
        // debugger
            .data(arr)
            .enter()
            .append('circle')
            .attr("cx", function(d) {
	   		return xScale(parseInt(d.arrest_count));
	    })
	        .attr("cy", function(d) {
	   		return yScale(parseInt(d.arrest_count));
	        })
            .attr('r', 5)
            debugger 
        } 

    // createVisualization();