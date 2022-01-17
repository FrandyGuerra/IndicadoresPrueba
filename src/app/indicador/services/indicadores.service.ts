import { Injectable, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AllIndicators, Indicator } from '../interfaces/indicadores.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

   apiUrl:string= 'https://mindicador.cl/api';
  @Input() prueba:any;
  constructor(private _httpClient:HttpClient) {

   }

   getDailyIndicators(): Observable<AllIndicators>{
    return this._httpClient.get<AllIndicators>(this.apiUrl);
  }

  getIndicator(name: string): Observable<any>{
    const uri = `${this.apiUrl}/${name}`;
    return this._httpClient.get<any>(uri);
  }

  getIndicatorByDay(name: string, date: string): Observable<Indicator>{
    const uri = `${this.apiUrl}/${name}/${date}`;
    return this._httpClient.get<Indicator>(uri);
  }

  getIndicatorByYear(name: string, year: string): Observable<Indicator>{
    const uri = `${this.apiUrl}/${name}/${year}`;
    return this._httpClient.get<Indicator>(uri);
  }
}
