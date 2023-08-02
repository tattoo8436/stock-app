export async function GET(req: Request) {
    const res = [
      {
        id: 1,
        logo: require("@icons/company_logo_1.svg"),
        name: "GOTO",
        description: "GoTo Gojek Tokopedia Tbk",
        investment: 1987469,
        profitLoss: -158496,
        profitLossPercent: -8.01,
        allocate: 26,
        allocatePercent: 25.32,
      },
      {
        id: 2,
        logo: require("@icons/company_logo_2.svg"),
        name: "PTBA",
        description: "GoTo Gojek Tokopedia Tbk",
        investment: 1987469,
        profitLoss: 158496,
        profitLossPercent: 8.01,
        allocate: 26,
        allocatePercent: 25.32,
      },
      {
        id: 3,
        logo: require("@icons/company_logo_3.svg"),
        name: "ACES",
        description: "GoTo Gojek Tokopedia Tbk",
        investment: 1987469,
        profitLoss: -158496,
        profitLossPercent: -8.01,
        allocate: 26,
        allocatePercent: 25.32,
      },
      {
        id: 4,
        logo: require("@icons/company_logo_4.svg"),
        name: "ANTM",
        description: "GoTo Gojek Tokopedia Tbk",
        investment: 1987469,
        profitLoss: -158496,
        profitLossPercent: -8.01,
        allocate: 26,
        allocatePercent: 25.32,
      },
      {
        id: 5,
        logo: require("@icons/company_logo_5.svg"),
        name: "SIDO",
        description: "GoTo Gojek Tokopedia Tbk",
        investment: 1987469,
        profitLoss: -158496,
        profitLossPercent: -8.01,
        allocate: 26,
        allocatePercent: 25.32,
      },
    ];
    return new Response(JSON.stringify(res));
  }
  