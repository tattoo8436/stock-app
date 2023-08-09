import { baseUrlApi } from "@/app/utils";

export const getDataTransaction = async () => {
  const res = await fetch(`${baseUrlApi}/stock-app/transaction`);
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};

export const getDataTransactionDetail = async () => {
  const res = await fetch(`${baseUrlApi}/stock-app/transaction/detail`);
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};