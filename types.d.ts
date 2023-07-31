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
    Date: string,
    scales: number,
  }