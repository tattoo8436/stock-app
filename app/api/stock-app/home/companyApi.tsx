import { baseUrlApi } from "@/app/utils";

export const getCompanyDetail = async () => {
  const res = await fetch(`${baseUrlApi}/stock-app/home/company/detail`);
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};

export const getDataBuySell = async () => {
  const res = await fetch(`${baseUrlApi}/stock-app/home/company/buy-sell`);
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};