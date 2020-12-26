import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() lineChartData: ChartDataSets[];
  @Input() lineChartLabels: Label[];
  // public lineChartData: ChartDataSets[] = [
  //   {
  //     data: [
  //       697.64,
  //       665.9,
  //       683.73,
  //       678.71,
  //       709.8,
  //       709.8,
  //       704.88,
  //       724.2,
  //       729.38,
  //       735.05,
  //       828.25,
  //       812.13
  //     ],
  //     label: 'Series A'
  //   }
  // ];
  // public lineChartLabels: Label[] = [
  //   'Enero',
  //   'Febrero',
  //   'Marzo',
  //   'Abril',
  //   'Mayo',
  //   'Junio',
  //   'Julio',
  //   'Agosto',
  //   'Septiembre',
  //   'Octubre',
  //   'Noviembre',
  //   'Diciembre'
  // ];
  public lineChartOptions: any & { annotation: any } = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(50,90,149, 0.6)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor() {}

  ngOnInit(): void {}
}
