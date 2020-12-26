import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { IndicatorsI } from '../models';
import { IndicatorServices } from '../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public indicator: IndicatorsI;
  public chartData: ChartDataSets[];
  public chartLabel: Label[];
  public year = '2020';
  public indicatorInput = 'dolar';
  constructor(private indicatorService: IndicatorServices) {}

  ngOnInit(): void {
    this.callIndicator(this.indicatorInput, this.year);

    this.indicatorService.getIndicators().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  changeIndicator(): void {
    this.chartData = null;
    this.chartLabel = null;
    this.callIndicator(this.indicatorInput, this.year);
  }

  callIndicator(indicator: string, year: string): void {
    this.indicatorService.getIndicator(indicator, year).subscribe(
      (res: IndicatorsI) => {
        this.indicator = res;
        this.chartData = [
          {
            data: [...this.indicator.data.information.values],
            label: `${this.indicator.data.name} año ${this.indicator.data.year} - (Valor máximo por mes en ${this.indicator.data.unit})`
          }
        ];
        this.chartLabel = this.indicator.data.information.months;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}