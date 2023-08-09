export async function GET(req: Request) {
  const res = {
    id: 1,
    logo: require("@icons/company_logo_3.svg"),
    name: "BJTM",
    description: "Bank Jatim",
    orderTime: "2021-03-01 10:00:01",
    status: "OPEN",
    lot: 26,
    price: 560,
    investment: 1456067,
  };
  return new Response(JSON.stringify(res));
}
