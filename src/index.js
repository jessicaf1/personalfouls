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
    svgHeight = 505;
var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)
    .attr('class', 'svg-container')

var line = svg
    .append("line")
    .attr("x1", 10)
    .attr("x2", 10)
    .attr("y1", 10)
    .attr("y2", 480)
    .attr("stroke", "white")
    .attr("stroke-width", "2.8");


svg
    .append("line")
    .attr("x1", 100)
    .attr("x2", 100)
    .attr("y1", 10)
    .attr("y2", 480)
    .attr("stroke", "white")
    .attr("stroke-width", "2.0");

// svg.append('circle')
//     .attr('cx', 400)
//     .attr('cy', 300)
//     .attr('r', 50)
//     .attr('fill', 'none')
//     .attr('stroke', 'white')

svg
    .append("line")
    .attr("x1", 220)
    .attr("x2", 220)
    .attr("y1", 10)
    .attr("y2", 480)
    .attr("stroke", "white")
    .attr("stroke-width", "2.0");

svg
    .append("line")
    .attr("x1", 310)
    .attr("x2", 310)
    .attr("y1", 10)
    .attr("y2", 480)
    .attr("stroke", "white")
    .attr("stroke-width", "2.0");

svg
    .append("line")
    .attr("x1", 400)
    .attr("x2", 400)
    .attr("y1", 10)
    .attr("y2", 480)
    .attr("stroke", "white")
    .attr("stroke-width", "2.0");

svg
    .append("line")
    .attr("x1", 498)
    .attr("x2", 498)
    .attr("y1", 10)
    .attr("y2", 480)
    .attr("stroke", "white")
    .attr("stroke-width", "2.0");

svg
    .append("line")
    .attr("x1", 596)
    .attr("x2", 596)
    .attr("y1", 10)
    .attr("y2", 480)
    .attr("stroke", "white")
    .attr("stroke-width", "2.0");

svg
    .append("line")
    .attr("x1", 694)
    .attr("x2", 694)
    .attr("y1", 10)
    .attr("y2", 480)
    .attr("stroke", "white")
    .attr("stroke-width", "2.0");

svg
    .append("line")
    .attr("x1", 792)
    .attr("x2", 792)
    .attr("y1", 10)
    .attr("y2", 480)
    .attr("stroke", "white")
    .attr("stroke-width", "2.0");

svg
    .append("line")
    .attr("x1", 890)
    .attr("x2", 890)
    .attr("y1", 10)
    .attr("y2", 480)
    .attr("stroke", "white")
    .attr("stroke-width", "2.8");

svg
    .append("line")
    .attr("x1", 9)
    .attr("x2", 891)
    .attr("y1", 10)
    .attr("y2", 10)
    .attr("stroke", "white")
    .attr("stroke-width", "2.8");



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
// .domain([0, d3.max(data)])
// .range([300, 0])
var yScale = d3.scaleLinear()
    .domain([0, 20])
    .range([0, 400]);



function createVisualization(position = "WR") {
    debugger
    svg.selectAll("circle").remove();
    svg
        .selectAll("circle")
        // debugger
        .data(
            arr2.filter(function(d) {
                // debugger
                if (position === 'All') {
                    // debugger
                    return true
                } else {
                    debugger
                    //return true if position === 'All'  
                    return d.Position === position;
                }
            })
        )
        .enter()
        .append("circle")

    .attr("cx", function(d) {
            return xScale(parseInt(d.arrest_count));
        })
        .attr("cy", function(d) {
            // return yScale(parseInt(d.Name.length));
            return yScale(getRando(2, 22));
        })
        .attr("class", "dots")
        .attr("r", 8)
        .attr("opacity", function(d) {
            if (parseInt(d.arrest_count) <= 2) {
                return 0.5;
            } else if (parseInt(d.arrest_count) === 3) {
                return 0.7;
            } else if (parseInt(d.arrest_count) === 4) {
                return 0.8;
            } else {
                return 1;
            }
        })
        .attr("fill", function(d) {
            if (d.Position === "WR") {
                return "white";
            } else if (d.Position === "RB") {
                return "blue";
            } else if (d.Position === "QB") {
                return "red";
            } else if (d.Position === "TE") {
                return "gray";
            }
        })
        .on("mouseover", function(d) {
            return tooltip
                .style("visibility", "visible")
                .text(
                    d.Name + ", " + d.Position + " : " + d.arrest_count + " arrests"
                );
        })
        .on("mousemove", function(d) {
            return tooltip
                .style("top", event.pageY - 10 + "px")
                .style("left", event.pageX + 10 + "px")
                .text(
                    d.Name + ", " + d.Position + " : " + d.arrest_count + " arrests"
                );
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
    .style("font-size", "16x")
    .style("font-family", "courier")
    .style("z-index", "90")
    .style("color", "crimson")
    .style("border", "white")
    .style("visibility", "hidden");



var xAxis = d3
    .axisBottom()
    .scale(xScale)
    // .ticks(20)
    //   .tickArguments([10], "|")

.tickSize([9])
    //   .tickSizeOuter([10])
    // .orient("bottom")
    // .ticks(50)
    // .tickFormat(x=>)
    // .style("stroke", "pink")
    // .style("z-index", 100)
    //.tickValues([range(0, 8)])
    .tickValues([.1, .2, .3, .4, .5, .6, .7, .8, .9,
        1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9,
        2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9,
        3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9,
        4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0,
        5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9,
        6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.0,
        7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8, 8.1
    ]);
xAxis.tickFormat(x => Number.isInteger(x) ? x : "")

// function range(start, end){
//     let arr = [];
//     for (let i = start; i< end; i+=0.1){
//         arr.push(i)
//     }
//     return arr
// }

svg.append("g")
    .attr("class", "axis") //Assign "axis" class
    .attr("transform", "translate(0, 480)")
    .call(xAxis)
    //  xAxis.ticks(20)
    // createVisualization();

// body.append('div')
//     .attr("class", "divv")
//     .text("arrest")
debugger
document.getElementById('button1').addEventListener('click', function(d) {
    debugger
    createVisualization(d.target.innerText)
})
document.getElementById("button2").addEventListener("click", function(d) {
    debugger
    createVisualization(d.target.innerText);
});

document.getElementById("button3").addEventListener("click", function(d) {
    debugger;
    createVisualization(d.target.innerText);
});

document.getElementById("button4").addEventListener("click", function(d) {
    debugger;
    createVisualization(d.target.innerText);
});

document.getElementById("button5").addEventListener("click", function(d) {
    debugger;
    createVisualization(d.target.innerText);
});

// const positions = ["QB", "WR", "TE", "RB"]
// debugger
// let dropdownButton = d3.select("ddbutton")
//     .selectAll('options')
//     .data(positions)
//     .enter()
//     .append('option')
//     .text(function (d) {return d} )
//     .attr('value', function (d) {return d})

// dropdownButton.on("change", function(d){
//     const selectedOption = d3.select(this).property('value')
//     createVisualization(selectedOption)
// })

// var button = svg.append('button')
//     .attr('class', 'ddbutton')

// var button = svg.append('button')
//   .selectAll(".ddbutton")
//   .data(positions)
//   .enter()
//   .append("g")
//   .attr("class", "button")
//   .call(button);
debugger
arr2.map(player => {
    debugger

    fetch(`http://nflarrest.com/api/v1/player/topCrimes/${player}.Name`).then(
        function(response) {
            response.json().then(function(data) {
                return console.log(data);
            });
        }
    );
});