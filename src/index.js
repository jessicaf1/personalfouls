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
let arr2;
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
            arr2 = arr.filter(player => player.Position === 'WR' ||
                player.Position === 'QB' ||
                player.Position === 'RB' ||
                player.Position === 'TE')
            debugger
            createVisualization();

            console.log(data);
            //   console.log(data.map(player => player.Position)) 
        });
    })
    .catch(function(err) {
        console.log("Fetch Error :-S", err);
    });

var svgWidth = 900,
    svgHeight = 500;
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
    .domain([0, 20])
    .range([0, 2200]);

var yScale = d3.scaleLinear()
    .domain([0, 20])
    .range([0, 400]);



function createVisualization() {
    debugger


    svg.selectAll("circle")
        // debugger
        .data(arr2)
        .enter()
        .append('circle')
        .attr("cx", function(d) {
            return xScale(parseInt(d.arrest_count));
        })
        .attr("cy", function(d) {
            // return yScale(parseInt(d.Name.length));
            return yScale(getRando(2, 22));
        })
        .attr('class', 'dots')
        .attr('r', 8)
        .attr('opacity', function(d) {
            if (parseInt(d.arrest_count) <= 2) {
                return .5
            } else if (parseInt(d.arrest_count) === 3) {
                return .7
            } else if (parseInt(d.arrest_count) === 4) {
                return .8
            } else {
                return 1
            }
        })
        .attr('fill', function(d) {
            if (d.Position === 'WR') {
                return 'white'
            } else if (d.Position === "RB") {
                return "blue";
            } else if (d.Position === "QB") {
                return "orange";
            } else if (d.Position === "TE") {
                return "yellow";
            }
        })
        .on("mouseover", function(d) {
            return tooltip.style("visibility", "visible").text(d.Name + ", " + d.Position + " : " + d.arrest_count + " arrests");
        })
        .on("mousemove", function(d) {
            return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px").text(d.Name + ", " + d.Position + " : " + d.arrest_count + " arrests");
        })
        .on("mouseout", function(d) {
            return tooltip.style("visibility", "hidden");
        });
    debugger
}

function getRando(min, max) {
    return Math.random() * (max - min) + min;
}

const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("font-family", "sans-serif")
    .style("font-size", "12px")
    .style("font-weight", "bold")
    .style("z-index", "90")
    .style("color", "	#8B0000")
    .style("border", "white")
    .style("visibility", "hidden");



var xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSize(10)
    // .orient("bottom")
    // .ticks(5)
    // .style("stroke", "pink")
    // .style("z-index", 100)

svg.append("g")
    .attr("class", "axis") //Assign "axis" class
    .attr("transform", "translate(3, 470)")
    .call(xAxis)
    // createVisualization();

body.append('div')
    .attr("class", "divv")
    .text("arrest")