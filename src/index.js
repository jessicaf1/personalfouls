import '../src/styles/index.scss';

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').innerText = "";
});

// const response = await fetch('http://nflarrest.com/api/v1/player');
// const myJson = await response.json();
// console.log(JSON.stringify(myJson))

// fetch("http://nflarrest.com/api/v1/player", {

// });

fetch("http://nflarrest.com/api/v1/player")
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data);
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