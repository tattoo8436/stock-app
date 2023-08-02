import { baseUrlApi } from "@/app/utils";

export const getDataCompany = async () => {
  const res = await fetch(`${baseUrlApi}/stock-app/home/company`);
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};
