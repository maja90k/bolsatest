export interface Symbol {
  symbol: string;
  name: string;
  price: number;
}

export interface SymbolHistorical {
  symbol: string
  historical: {
    date: string | Date
    close: number
  }
}
