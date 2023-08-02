export const getCompanyDetail = async () => {
  const res = await fetch(
    "https://stock-app-olive.vercel.app/api/stock-app/home/company/detail"
  );
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};
