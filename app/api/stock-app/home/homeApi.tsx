export const getDataCompany = async () => {
  const res = await fetch("http://localhost:3000/api/stock-app/home/company");
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};

export const getDataChart = async () => {
  const res = await fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json');
  if (!res.ok) {
    throw new Error("Error");
  }
  return res.json();
};