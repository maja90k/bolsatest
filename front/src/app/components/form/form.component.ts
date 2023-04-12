import { Component, OnInit } from '@angular/core';
import { Symbol, SymbolHistorical } from 'src/app/models/interfaces';
import { SymbolService as SymbolService } from 'src/app/services/auto.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nemotecnicosList: any = [];
  historicalList: any = [];

  public chart: any;

  constructor(private symbolService: SymbolService) { }

  getAllNemotecnicos() {
    return this.symbolService.getAllNemotecnicos()
      .subscribe((data) => {
        this.nemotecnicosList = data;
      })
  }

  getSymbolByNemo(symbol: string) {
    return this.symbolService.getHistoricalBySymbol(symbol)
      .subscribe((data) => {
        this.historicalList = data;
      })
  }

  createChart(historical: any) {
    console.log(historical);
    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: historical.date,
        datasets: [
          {
            label: "Price",
            data: [historical.price],
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }


  onClick(symbol: string) {
    const list = this.getSymbolByNemo(symbol);
    this.createChart(list);
  }

  ngOnInit() {
    this.getAllNemotecnicos();
  }

}
