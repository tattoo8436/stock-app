export async function GET(req: Request) {
  const res = {
    buyingPower: 1000000,
    saldoRDN: 1200050,
    saldoPending: 200050,
  };
  return new Response(JSON.stringify(res));
}
