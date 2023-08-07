interface IHomeCompany {
  id: number;
  logo: any;
  name: string;
  description: string;
  value1: number;
  value2: number;
  percent: number;
}

interface IHomeSearch {
  name: string;
  type: string;
}

interface IHomeChart {
  Date: string;
  scales: number;
}

interface IHomeChartDetail {
  id: number;
  name: string;
  value1: number;
  value2: number;
  percent: number;
  open: number;
  high: number;
  low: number;
  lot: number;
  value: number;
  freq: number;
}

interface ITableCompany {
  id: number;
  2022: number;
  2021: number;
  2020: number;
}

interface ICompanyDetail {
  id: number;
  logo: any;
  name: string;
  description: string;
  value1: number;
  value2: number;
  percent: number;
  tags: string[];
  dataChart: number[][];
  keyStatistics: {
    marketCap: number;
    currentShare: number;
    dataTable: ITableCompany[];
  };
}

interface IPortfolio {
  value: number;
  profitLoss: number;
  capitalGain: number;
  open: number;
}

interface IPortfolioCompany {
  id: 1;
  logo: any;
  name: string;
  description: string;
  investment: number;
  profitLoss: number;
  profitLossPercent: number;
  allocate: number;
  allocatePercent: number;
}

interface ITransactionHistory {
  date: string;
  value1: number;
  value2: number;
  value3: number;
}

interface IPortfolioDetail {
  id: number;
  logo: any;
  name: string;
  description: string;
  value1: number;
  value2: number;
  percent: number;
  nilaiInvestasi: {
    allocate: number;
    lot: number;
    averagePrice: number;
    investment: number;
    profitLoss: number;
    profitLossPercent: number;
  };
  transactionHistory: ITransactionHistory[];
}

interface ICompanyBuySellTable {
  lot1: number;
  bid: number;
  ask: number;
  lot2: number;
}

interface ICompanyBuySell {
  buyingPower: number;
  dataTable: IHomeDetailBuySellTable[];
  brokerFee: number;
  exchangeFee: number;
  id: number;
  logo: any;
  name: string;
  description: string;
  lot: number;
  profitLoss: number;
  profitLossPercent: number;
}

interface ICompanyTransaction {
  id: number;
  logo: any;
  name: string;
  value1: number;
  value2: number;
  lot: number;
  status: string;
}

interface ITransaction{
  transactionToday: ICompanyTransaction[],
  yesterday: ICompanyTransaction[]
}