export interface Symbol {
  symbol: string;
  name: string;
  price: string;
}
export interface SymbolHistorical{
  symbol: string
  historical:{
    date: Date
    close: Number
  }
}
