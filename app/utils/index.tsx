import numeral from "numeral";

export const formatValuePercent = (value: number, percent: number) => {
  if (value > 0) {
    return `+${value} (+${percent}%)`;
  }
  return `${value} (${percent}%)`;
};

export const formatRealNumer = (value: number | undefined) => {
  if(value === undefined) {
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
