export async function GET(req: Request) {
  const res = [
    {
      id: 1,
      logo: require("@icons/company_logo_1.svg"),
      name: "GOTO",
      description: "GoTo Gojek Tokopedia Tbk",
      value1: 198,
      value2: 1,
      percent: 0.53,
    },
    {
      id: 2,
      logo: require("@icons/company_logo_1.svg"),
      name: "GOTO",
      description: "GoTo Gojek Tokopedia Tbk",
      value1: 198,
      value2: -20,
      percent: 0.53,
    },
    {
      id: 3,
      logo: require("@icons/company_logo_1.svg"),
      name: "GOTO",
      description: "GoTo Gojek Tokopedia Tbk",
      value1: 198,
      value2: 1,
      percent: 0.53,
    },
    {
      id: 4,
      logo: require("@icons/company_logo_1.svg"),
      name: "GOTO",
      description: "GoTo Gojek Tokopedia Tbk",
      value1: 198,
      value2: 1,
      percent: 0.53,
    },
    {
      id: 5,
      logo: require("@icons/company_logo_1.svg"),
      name: "GOTO",
      description: "GoTo Gojek Tokopedia Tbk",
      value1: 198,
      value2: 1,
      percent: 0.53,
    },
  ];
  return new Response(JSON.stringify(res));
}
