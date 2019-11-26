import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  dataset = [60,48,30,47,13,24,46,29,19,57,37,49,9,45,23,36,52,58,41,14,28,40,51,4,50,56,18,27,34,39,43,53,8,12,55,20,42,33,54,6,22,11,21,35,17,38,44,59,7,26,2,32,16,5,3,1,10,15,25,31];
  // dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
  
  constructor() { }

  ngOnInit() {
    var len = this.dataset.length;
    // var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    //   11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
    var w = 1000;
    var h = 1000;
    var barPadding = 2;
    var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

    svg.selectAll("rect")
            .data(this.dataset)
            .enter()
            .append("rect")
            .attr("width", 20)
            .attr("x", function(d, i) {
              return i * (w / len);
            })
            // .attr("width", w / dataset.length - barPadding)
            .attr("width", 10)
            .attr("height", function(d) {
              return d*10;
            })
            .attr("fill", function() {
              return '#'+Math.floor(Math.random()*16777215).toString(16);
            });

            
    svg.append("text")
        .data(this.dataset)
        .style("fill", "black")
        .style("font-size", "14px")
        .attr("width", 10)
        .attr("height", function(d) {
          return 100;
        })
        .attr("dy", "20")
        .attr("x", function (d) { return d; })
      //  .attr("y", function (d) { return d+10; })
        .style("style", "label")
        .text(function (d) { return d; });
  }

  changeData(){
    console.log('called',this.dataset.sort());    
    this.dataset.sort();
    // this.dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
  }
}
