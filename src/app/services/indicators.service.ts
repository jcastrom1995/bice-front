import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IndicatorI, IndicatorsI } from '../models';

@Injectable()
export class IndicatorServices {
  constructor(private http: HttpClient) {}

  getIndicator(indicator: string, year: string): Observable<IndicatorsI> {
    return this.http.get<IndicatorsI>(`${environment.urlApi}indicators/${indicator}`, {
      params: {
        year
      }
    });
  }

  getIndicators(): Observable<IndicatorI> {
    return this.http.get<IndicatorI>(`${environment.urlApi}indicators`);
  }
}
