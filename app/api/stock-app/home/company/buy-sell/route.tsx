export async function GET(req: Request) {
  const res = {
    buyingPower: 1000000,
    dataTable: [
      {
        lot1: 42956,
        bid: 555,
        ask: 560,
        lot2: 51824,
      },
      {
        lot1: 42956,
        bid: 555,
        ask: 560,
        lot2: 51824,
      },
      {
        lot1: 42956,
        bid: 555,
        ask: 560,
        lot2: 51824,
      },
      {
        lot1: 42956,
        bid: 555,
        ask: 560,
        lot2: 51824,
      },
      {
        lot1: 42956,
        bid: 555,
        ask: 560,
        lot2: 51824,
      },
    ],
    brokerFee: 32,
    exchangeFee: 25,
    id: 1,
    logo: require("@icons/company_logo_3.svg"),
    name: "ACES",
    description: "Ace Hardware Indonesia Tbk",
  };
  return new Response(JSON.stringify(res));
}
