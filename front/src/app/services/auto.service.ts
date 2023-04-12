import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Symbol, SymbolHistorical } from '../models/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SymbolService {

  endpoint = environment.endpoint


  constructor(private http: HttpClient) { }

  //GET symbols
  getAllNemotecnicos(): Observable<Symbol[]> { 
    return this.http
      .get<Symbol[]>(`${this.endpoint}/symbols`)
      .pipe()
  }
  
  //GET symbols/<symbols>
  // getSymbolsBySymbol(symbol: any) {
  //   const res = this.http.get(`${this.endpoint}/symbols/`, symbol);
  //   console.log(res)
  //   return res;
  // }

  //GET historical
  getAllHistorical() {
    return this.http.get(`${this.endpoint}/historical`);
  }

  //GET historical/<symbols>
  getHistoricalBySymbol(symbol: any): Observable<SymbolHistorical[]> {
    return this.http
      .get<SymbolHistorical[]>(`${this.endpoint}/historical/${symbol}`)
      .pipe();
  }

}
