export const getDataCompany = async () => {
  const res = await fetch("http://localhost:3000/api/stock-app/home/company");
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};
