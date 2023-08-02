export const getCompanyDetail = async () => {
  const res = await fetch(
    "https://stock-app-git-main-tattoo8436.vercel.app/api/stock-app/home/company/detail"
  );
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};
