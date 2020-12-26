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
  // Configurations Chart
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
  // End configurations
  constructor() {}

  ngOnInit(): void {}
}
