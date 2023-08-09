export async function GET(req: Request) {
  const res = {
    information: {
      avatar: require("@icons/avatar.svg"),
      name: "Yahya Armadji",
      id: "117260684298",
    },
    bank: [
      {
        id: 1,
        logo: require("@icons/bank2.svg"),
        name: "BCA",
      },
      {
        id: 2,
        logo: require("@icons/bank2.svg"),
        name: "MANDIRI",
      },
      {
        id: 3,
        logo: require("@icons/bank3.svg"),
        name: "BNI",
      },
    ],
    wallet: [
      {
        id: 1,
        logo: require("@icons/wallet1.svg"),
        name: "GOPAY",
      },
      {
        id: 2,
        logo: require("@icons/wallet2.svg"),
        name: "Shopee Pay",
      },
      {
        id: 3,
        logo: require("@icons/wallet3.svg"),
        name: "LinkAja",
      },
    ],
  };
  return new Response(JSON.stringify(res));
}
