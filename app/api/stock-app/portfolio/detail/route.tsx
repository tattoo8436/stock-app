export async function GET(req: Request) {
  const res = {
    id: 1,
    logo: require("@icons/company_logo_3.svg"),
    name: "ACES",
    description: "Ace Hardware Indonesia Tbk",
    value1: 700,
    value2: 5,
    percent: 0.72,
    nilaiInvestasi: {
      allocate: 25.32,
      lot: 26,
      averagePrice: 760.96,
      investment: 1978496,
      profitLoss: -158496,
      profitLossPercent: -8.15,
    },
    transactionHistory: [
      {
        date: '2022-10-04',
        value1: 705,
        value2: 2,
        value3: 141000
      },
      {
        date: '2022-09-01',
        value1: 705,
        value2: 2,
        value3: 211712
      }
    ]
  };
  return new Response(JSON.stringify(res));
}
