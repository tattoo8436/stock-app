export async function GET(req: Request) {
  const res = {
    id: 1,
    logo: require("@icons/company_logo_3.svg"),
    name: "ACES",
    description: "Ace Hardware Indonesia Tbk",
    value1: 700,
    value2: -5,
    percent: -0.72,
    tags: ["Bank", "ESGQKEHATI", "IDXSMC-COM", "INFOBANK15"],
    dataChart: [
      [1327359600000, 30.95],
      [1327446000000, 31.34],
      [1327532400000, 31.18],
      [1327618800000, 31.05],
      [1327878000000, 31.0],
      [1327964400000, 30.95],
      [1328050800000, 31.24],
      [1328137200000, 31.29],
      [1328223600000, 31.85],
      [1328482800000, 31.86],
      [1328569200000, 32.28],
      [1328655600000, 32.1],
      [1328742000000, 32.65],
      [1328828400000, 32.21],
      [1329087600000, 32.35],
      [1329174000000, 32.44],
      [1329260400000, 32.46],
      [1329346800000, 32.86],
      [1329433200000, 32.75],
      [1329778800000, 32.54],
      [1329865200000, 32.33],
      [1329951600000, 32.97],
      [1330038000000, 33.41],
      [1330297200000, 33.27],
      [1330383600000, 33.27],
      [1330470000000, 32.89],
      [1330556400000, 33.1],
      [1330642800000, 33.73],
      [1330902000000, 33.22],
      [1330988400000, 31.99],
      [1331074800000, 32.41],
      [1331161200000, 33.05],
      [1331247600000, 33.64],
      [1331506800000, 33.56],
      [1331593200000, 34.22],
      [1331679600000, 33.77],
      [1331766000000, 34.17],
      [1331852400000, 33.82],
      [1332111600000, 34.51],
      [1332198000000, 33.16],
    ],
    keyStatistics: {
      marketCap: 10436,
      currentShare: 15.02,
      dataTable: [
        {
          year: 2022,
          data: {
            q1: 454,
            q2: 362,
            q3: null,
            q4: null,
          },
        },
        {
          year: 2021,
          data: {
            q1: 448,
            q2: 355,
            q3: 46,
            q4: 34,
          },
        },
        {
          year: 2020,
          data: {
            q1: 439,
            q2: 331,
            q3: 329,
            q4: 308,
          },
        },
      ],
    },
  };
  return new Response(JSON.stringify(res));
}
