
import { Component, OnInit } from '@angular/core';
import Plotly from 'plotly.js-dist';
import * as d3 from 'd3';

@Component({
  selector: 'app-surfacechart',
  standalone: true,
  templateUrl: './surfacechart.component.html',
  styleUrls: ['./surfacechart.component.css']
})
export class SurfacechartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv').then((rows) => {
      const unpack = (rows: any[], key: string) => {
        return rows.map(row => row[key]);
      };

      const z_data: number[][] = [];
      for (let i = 0; i < 36; i++) {
        z_data.push(unpack(rows, i.toString()));
      }

      const data: Partial<Plotly.Data>[] = [{
        z: z_data,
        type: 'surface',
        colorscale: [
          [0, 'rgb(0, 0, 128)'],   
          [0.25, 'rgb(0, 128, 0)'], 
          [0.5, 'rgb(255, 255, 0)'], 
          [1, 'rgb(165, 42, 42)']   
        ]
      }];

      const layout = {
        title: '3d surface chart',
        autosize: false,
        width: 500,
        height: 500,
        margin: {
          l: 65,
          r: 50,
          b: 65,
          t: 90,
        }
      };

      Plotly.newPlot('myDiv', data, layout);
    }).catch(err => {
      console.error('Error loading or parsing data:', err);
    });
  }
}
