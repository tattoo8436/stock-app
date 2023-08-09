import { baseUrlApi } from "@/app/utils";

export const getDataProfile = async () => {
  const res = await fetch(`${baseUrlApi}/stock-app/profile`);
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};

export const getDataDeposit = async () => {
  const res = await fetch(`${baseUrlApi}/stock-app/profile/deposit`);
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};