import { Component, OnInit } from '@angular/core';
import { Symbol, SymbolHistorical } from 'src/app/models/interfaces';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  symbols: any = [];
  //errores: any = [];
  
  // formAuto: Symbol = {
  //   id: NaN,
  //   marca: '',
  //   modelo: '',
  // }

  constructor(private autoService: AutoService) { }


  getDataBySymbols() {
    this.autoService.getAllSymbols().subscribe(symbol => this.symbols = symbol);
  }

  ngOnInit() {
    this.getDataBySymbols();
  }

}
