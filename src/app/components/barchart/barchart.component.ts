import { Component, AfterViewInit } from '@angular/core';
import * as Plotly from 'plotly.js-dist';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.plotChart();
  }

  plotChart() {
    const yValues = [520, 1040, 1560, 2080, 2600, 3120, 3540];
    const colors = [
      'rgba(49,44,185,255)',
      'rgba(109,104,233,255)',
      'rgba(151,147,249,255)',
      'rgba(80,124,211,255)',
      'rgba(57,98,186,255)',
      'rgba(72,149,186,255)'
    ];

    const y= [[2000, 1234, 1225, 2116, 2418, 1222],
    [1700, 1004, 2435, 1386, 1238, 2322],
    [1500, 1234, 2325, 2916, 1438, 1122],
    [2070, 2934, 2175, 1716, 1812, 2122],
    [3000, 3129, 1825, 1396, 1328, 1822],
    [2300, 1321, 1925, 3216, 1548, 1622]]

    const traces: Partial<Plotly.PlotData>[] = [];

    for (let i = 0; i < 6; i++) {
      const trace: Partial<Plotly.PlotData> = {
        x: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
        y:y[i].map(val => this.mapToYAxis(val, yValues)),
        type: 'bar',
        name: `R${i + 1}`,
        marker: {
          color: colors[i],
        }
      };
      traces.push(trace);
    }

    const data: Partial<Plotly.PlotData>[] = traces;

    const layout: Partial<Plotly.Layout> = {
      title: 'Raw Data',
      barmode: 'group',
      yaxis: {
        tickvals: yValues,
        ticktext: yValues.map(String),
        title: 'Values',
      },
      xaxis: {
        title: 'Categories',
      }
    };

    Plotly.newPlot('myDiv', data as Plotly.Data[], layout as Plotly.Layout);
  }

  mapToYAxis(value: number, yValues: number[]): number {
    const maxValue = Math.max(...yValues);
    const index = Math.floor(value / (maxValue / yValues.length));
    return yValues[Math.min(index, yValues.length - 1)];
  }
}
