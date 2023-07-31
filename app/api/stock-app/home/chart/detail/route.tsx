export async function GET(req: Request) {
    const res = {
        id: 1,
        name: 'IHSG',
        value1: 7056.04,
        value2: -35.72,
        percent: -0.5,
        open: 7091.76,
        high: 7001.81,
        low: 7016.7,
        lot: 186.26,
        value: 9.88,
        freq: 1.1
    };
    return new Response(JSON.stringify(res));
  }
  