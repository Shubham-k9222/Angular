import { Component, OnInit } from '@angular/core';
import Plotly from 'plotly.js-dist';

@Component({
  selector: 'app-gauge',
  standalone: true,
  imports: [],
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  gaugeValue: number = 350; 

  constructor() { }

  ngOnInit(): void {
    this.createGauge();
    this.showalert(this.gaugeValue); 
    console.log(this.gaugeValue); 
  }

  createGauge(): void {
    const data: Partial<Plotly.Data>[] = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: this.gaugeValue,
        title: { text: "bar" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 400 },
        gauge: {
          axis: { range: [0, 500] },
          bar: { color: "black" },
          steps: [
            { range: [0, 100], color: 'red' },
            { range: [100, 200], color: 'orange' },
            { range: [200, 300], color: 'yellow' },
            { range: [300, 400], color: 'lightgreen' },
            { range: [400, 500], color: 'darkgreen' },
          ],
        }
      }
    ];

    const layout = { width: 600, height: 400 };
    Plotly.newPlot('myDiv', data, layout);
  }

  showalert(value: number): void {
    if (value < 100) {
      alert("low value");
    } else if (value >= 100 && value < 200) {
      alert("low mid value");
    } else if (value >= 200 && value < 300) {
      alert("mid value");
    } else if (value >= 300 && value < 400) {
      alert("high mid value");
    } else if (value >= 400 && value <= 500) {
      alert("high value");
    }
  }
}
