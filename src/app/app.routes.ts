import { Routes } from '@angular/router';
import {BarchartComponent} from './components/barchart/barchart.component'
import {SurfacechartComponent} from './components/surfacechart/surfacechart.component'
import {GaugeComponent} from './components/gauge/gauge.component'
export const routes: Routes = [
  {
    path:'Barchart',
    component: BarchartComponent
},
{
    path:'surfacechart',
    component:SurfacechartComponent
},
{
    path:'gauge',
    component:GaugeComponent
},
];
