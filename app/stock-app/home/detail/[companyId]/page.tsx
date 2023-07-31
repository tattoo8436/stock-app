"use client";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { getCompanyDetail } from "@api/stock-app/home/companyApi";
import ChartHeader from "./components/ChartHeader";
import ChartDetail from "./components/ChartDetail";
import ChartContent from "./components/ChartContent";
import ChartFooter from "./components/ChartFooter";

const Detail = ({ params }: { params: { companyId: number } }) => {
  const { t } = useTranslation();
  const [companyDetail, setCompanyDetail] = useState<ICompanyDetail | null>(
    null
  );
  const [search, setSearch] = useState<string>("1M");

  useEffect(() => {
    fetchCompanyDetail();
  }, []);

  const fetchCompanyDetail = async () => {
    try {
      const data = await getCompanyDetail();
      console.log(data);
      setCompanyDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="stock-app-detail">
      <Header />

      <div className="stock-app-detail-content">
        <ChartHeader companyDetail={companyDetail} />

        <ChartDetail companyDetail={companyDetail} />

        <ChartContent t={t} dataChart={companyDetail?.dataChart ?? []} />

        <ChartFooter search={search} setSearch={setSearch} />
      </div>

      <Footer t={t} />
    </div>
  );
};

export default Detail;
