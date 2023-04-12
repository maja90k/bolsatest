import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Symbol, SymbolHistorical } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  endpoint = environment.endpoint

  symbol: Symbol = {
    symbol: '',
    name: '',
    price: '',
  }


  // symbolByHis: SymbolHistorical = {
  //   close: NaN,
  //   date: '',
  // }



  constructor(private http: HttpClient) { }

  //GET symbols
  getAllSymbols() { 
    const res = this.http.get(`${this.endpoint}/symbols`);
    console.log(res + "xd");
    return res
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
  getHistoricalBySymbol(symbolObj: any) {
    return this.http.get(`${this.endpoint}/historical`,);
  }







}
