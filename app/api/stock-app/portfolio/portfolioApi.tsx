import { baseUrlApi } from "@/app/utils";

export const getDataPortfolio = async () => {
  const res = await fetch(`${baseUrlApi}/stock-app/portfolio`);
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};

export const getDataCompany = async () => {
    const res = await fetch(`${baseUrlApi}/stock-app/portfolio/company`);
    if (!res.ok) {
      throw new Error("Error");
    }
    return res.json();
  };
