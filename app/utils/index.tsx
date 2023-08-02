import numeral from "numeral";

export const formatValuePercent = (value: number, percent: number) => {
  if (value > 0) {
    return `+${formatRealNumer(value)} (+${percent}%)`;
  }
  return `${formatRealNumer(value)} (${percent}%)`;
};

export const formatRealNumer = (value: number | undefined) => {
  if (value === undefined) {
    return "";
  }
  return numeral(value).format("0,0.00");
};

export const getColorValue = (value: number | undefined) => {
  if (value === undefined) {
    return "";
  }
  if (value >= 0) {
    return "positive";
  }
  return "negative";
};

//export const baseUrlApi = "http://localhost:3000/api";
export const baseUrlApi = "https://stock-app-olive.vercel.app/api";
