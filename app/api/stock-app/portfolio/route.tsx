export async function GET(req: Request) {
  const res = {
    value: 6284817,
    profitLoss: -96877,
    capitalGain: -1.34,
    open: 68068,
  };

  return new Response(JSON.stringify(res));
}
