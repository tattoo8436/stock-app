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

interface ITableCompany{
  year: number,
  data: {
    q1: number | null,
    q2: number | null,
    q3: number | null,
    q4: number | null,
  }
}

interface ICompanyDetail{
  id: number,
  logo: any,
  name: string,
  description: string,
  value1: number,
  value2: number,
  percent: number,
  tags: string[],
  dataChart: number[][],
  keyStatistics: {
    marketCap: number,
    currentShare: number,
    dataTable: ITableCompany[]
  }
}
