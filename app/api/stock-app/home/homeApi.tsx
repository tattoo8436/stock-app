import { baseUrlApi } from "@/app/utils";

export const getDataCompany = async () => {
  const res = await fetch(
    `${baseUrlApi}/stock-app/home/company`
  );
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};

export const getDataChartDetail = async () => {
  const res = await fetch(
    `${baseUrlApi}/stock-app/home/chart/detail`
  );
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};

export const getDataChart = async () => {
  const res = await fetch(
    `${baseUrlApi}/stock-app/home/chart`
  );
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};
