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
let arrestArr;
let loading = true; 
fetch("https://nflarrest.com/api/v1/player")
    .then(function(response) {
       
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
                player.Position === 'TE' ||
                player.Position === 'K')
            


            arr2.map(player => {
            //   debugger;

                let name = player.Name.split(" ");
                let fname = name[0];
                let lname = name[1];
                console.log(fname, lname);

              fetch(
                `https://nflarrest.com/api/v1/player/topCrimes/${fname}%20${lname}`
              ).then(function(response) {
                response.json().then(function(data) {
                    arrestArr = Object.values(data);
                    let arrests = [];
                    arrestArr.forEach(arrest=> {
                        arrests.push(arrest.category) + ""
                    })
                    player["crimes"] = arrests
                    debugger
                    
                        createVisualization();
                        loading = false;
                        document
                          .getElementById("lds-circle")
                          .classList.add("hidden");

                    // console.log(player)
                //   return console.log(data);
        
                });
              });
            });



//createLoading function if loading is true 

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



function createVisualization(position = "", team = "", arrest = "") {
    debugger
    svg.selectAll("circle").remove();
    svg
        .selectAll("circle")
        // .transition()
        // .duration(1000)
        // debugger
        .data(
            arr2.filter(function(d) {
                // debugger
                // if (position === 'All') {
                //     // debugger
                //     return true
                // } else {
                //     debugger
                //     //return true if position === 'All'  
                //     return d.Position === position;
                // }
                console.log(arr2)
                // console.log(d.Position, position)
                debugger
                if (d.Position.includes(position) && d.Team_name.includes(team) && d.crimes.toString().includes(arrest)){
                    debugger
                    return true 
                }
                else {
                    debugger
                    return false 
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
            else if (d.Position === 'K') {
                return 'purple'
            }
        })
        // .on('click', function(d){
        //     return "hello"
        // })
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
                    d.Name + ", " + d.Position + " - " + d.arrest_count + " arrests (" +d.crimes + ")"
                );
        })
        .on("mouseout", function(d) {
            return tooltip.style("visibility", "hidden");
        });

    // d3.select('#check').property("checked", false)
    
    // var y = document.getElementsByClassName('active')
    // var i;
    // for (i = 0; i < y.length; i++) {
    //     debugger
    //     document.getElementById(y[i].id).classList.remove('active')
    // }
    debugger
}




    // d3.select("#check").on("change",update);
    // // update();
            
    //   function check() {
    //     document.getElementById('check').checked = true;
    //   }
    //   function uncheck() {
    //     document.getElementById("check").removeAttribute('checked')
    //     ;
    //   }  

	// function update(){
	// 	if(d3.select("#check").property("checked")){
    //         createVisualization(position="", team="", arrest="");
    //         uncheck();
    //     } 
    //     else {
    //        check()
    //     }
    // } 	
    debugger

    document
      .getElementById("reset")
      .addEventListener("click", function(d) {
          debugger
        var y = document.getElementsByClassName("active-pos");
        var z = document.getElementsByClassName("active-t");
        var q = document.getElementsByClassName("active-a");

        var i;
        for (i = 0; i < y.length; i++) {
          document.getElementById(y[i].id).classList.remove("active-pos");
          document.getElementById(z[i].id).classList.remove("active-t");
          document.getElementById(q[i].id).classList.remove("active-a");
        }
        createVisualization((position = ""), (team = ""), (arrest = ""));
      });

function getRando(min, max) {
    return Math.random() * (max - min) + min;
}

const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("font-family", "sans-serif")
    .style("font-size", "14px")
    .style("font-family", "courier")
    .style("z-index", "90")
    .style("color", "crimson")
    .style("border", "white")
    .style("visibility", "hidden")
    .style("width", "100px")



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
// debugger
// document.getElementById('button1').addEventListener('click', function(d) {
//     debugger
//     createVisualization(d.target.innerText)
// })
// document.getElementById("button2").addEventListener("click", function(d) {
//     debugger
//     createVisualization(d.target.innerText);
// });

// document.getElementById("button3").addEventListener("click", function(d) {
//     debugger;
//     createVisualization(d.target.innerText);
// });

// document.getElementById("button4").addEventListener("click", function(d) {
//     debugger;
//     createVisualization(d.target.innerText);
// });

// document.getElementById("button5").addEventListener("click", function(d) {
//     debugger;
//     createVisualization(d.target.innerText);
// });




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

// buttons

// document.getElementsByClassName("button-t").addEventListener("click", function(d) {
//   debugger;
//   let arr = ['QB', 'RB', 'WR', 'TE', 'All'];
//   let position;
//   let team; 
//   if (arr.includes(d.target.innerText)){
//     position = d.target.innerText
//   }
//   else {
//     team = d.target.innerText
//   }
//   createVisualization(position, team);
// });

var x = document.getElementsByClassName("button-t");
var i;
 let position;
 let team;
 let arrest; 

for (i = 0; i < x.length; i++) {

    x[i].addEventListener("click", function(d) {
  let arr = ['QB', 'RB', 'WR', 'TE', 'K','All Positions'];
  let arr2 = ["49ers", "Bears", "Bengals", "Bills", "Broncos", "Browns",
   "Buccaneers", "Cardinals", "Chargers", "Chiefs", "Colts", 
   "Cowboys", "Dolphins", "Eagles", "Falcons", "Giants", "Lions", "Jaguars",
   "Jets", "Packers", "Panthers", "Patriots", "Raiders", "Rams", "Ravens",
   "Redskins", "Saints", "Seahawks", "Steelers", "Texans", "Titans", "Vikings", "All Teams"];
    
  if (arr.includes(d.target.innerText)){
       debugger
      if(document.getElementById(this.id).classList.contains('active-pos')){
          document.getElementById(this.id).classList.remove("active-pos");
      }
      else {
             var y = document.getElementsByClassName("active-pos");
             var i;
             for (i = 0; i < y.length; i++) {
                 document.getElementById(y[i].id).classList.remove('active-pos')
             }
             document.getElementById(this.id).classList.add("active-pos");
           } 
           
      debugger
    if (d.target.innerText !== 'All Positions'){
        position = d.target.innerText
        // position.classList.add('active')
    }
    else {
        position = ""
    }
  }
  
    if (arr2.includes(d.target.innerText)) {
         if (document.getElementById(this.id).classList.contains("active-t")) {
           document.getElementById(this.id).classList.remove("active-t");
         } else {
           var y = document.getElementsByClassName("active-t");
           var i;
           for (i = 0; i < y.length; i++) {
             document.getElementById(y[i].id).classList.remove("active-t");
           }
           document.getElementById(this.id).classList.add("active-t");
         }
      debugger;
      if (d.target.innerText !== "All Teams") {
        team = d.target.innerText;
      } else {
        team = ""
      }
    }
  
  if (!arr.includes(d.target.innerText) && !arr2.includes(d.target.innerText))  {
        if (document.getElementById(this.id).classList.contains("active-a")) {
          document.getElementById(this.id).classList.remove("active-a");
        } else {
          var y = document.getElementsByClassName("active-a");
          var i;
          for (i = 0; i < y.length; i++) {
            document.getElementById(y[i].id).classList.remove("active-a");
          }
          document.getElementById(this.id).classList.add("active-a");
        }
      debugger
      if (d.target.innerText !== "All") {
          debugger
        arrest = d.target.innerText;
      } else {
          debugger
        arrest = ""
      }
  }
  debugger
  createVisualization(position, team, arrest);
  
});
}

