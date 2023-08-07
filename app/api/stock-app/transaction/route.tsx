export async function GET(req: Request) {
  const res = {
    transactionToday: [
      {
        id: 1,
        logo: require("@icons/company_logo_1.svg"),
        name: "BJTM",
        value1: 680,
        value2: 68068,
        lot: 1,
        status: "OPEN",
      },
      {
        id: 2,
        logo: require("@icons/company_logo_2.svg"),
        name: "UNVR",
        value1: 680,
        value2: 68068,
        lot: 1,
        status: "MATCH",
      },
      {
        id: 3,
        logo: require("@icons/company_logo_3.svg"),
        name: "SIDO",
        value1: 680,
        value2: 68068,
        lot: 1,
        status: "MATCH",
      },
      {
        id: 4,
        logo: require("@icons/company_logo_4.svg"),
        name: "NICL",
        value1: 680,
        value2: 68068,
        lot: 1,
        status: "WITHDRAWAL",
      },
    ],
    yesterday: [
      {
        id: 2,
        logo: require("@icons/company_logo_2.svg"),
        name: "UNVR",
        value1: 680,
        value2: 68068,
        lot: 1,
        status: "MATCH",
      },
      {
        id: 3,
        logo: require("@icons/company_logo_3.svg"),
        name: "SIDO",
        value1: 680,
        value2: 68068,
        lot: 1,
        status: "MATCH",
      },
      {
        id: 5,
        logo: require("@icons/company_logo_5.svg"),
        name: "SIDO",
        value1: 680,
        value2: 68068,
        lot: 1,
        status: "MATCH",
      },
    ],
  };
  return new Response(JSON.stringify(res));
}
