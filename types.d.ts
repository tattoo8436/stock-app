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
