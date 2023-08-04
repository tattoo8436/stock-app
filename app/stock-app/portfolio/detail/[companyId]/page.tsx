"use client";

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@config/i18n";
import { useTranslation } from "react-i18next";
import { getDataPortfolioDetail } from "@api/stock-app/portfolio/portfolioApi";
import ContentHeader from "./components/ContentHeader";
import NilaiInvestasi from "./components/NilaiInvestasi";
import TransactionHistory from "./components/TransactionHistory";

const PortfolioDetail = ({ params }: { params: { companyId: number } }) => {
  const { t } = useTranslation();

  const [portfolioDetail, setPortfolioDetail] =
    useState<IPortfolioDetail | null>(null);

  useEffect(() => {
    fetchCompanyDetail();
  }, []);

  const fetchCompanyDetail = async () => {
    try {
      const data = await getDataPortfolioDetail();
      console.log(data);
      setPortfolioDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="portfolio-detail">
      <Header t={t} />

      <div className="portfolio-detail-content">
        <ContentHeader portfolioDetail={portfolioDetail} />

        <NilaiInvestasi t={t} portfolioDetail={portfolioDetail} />

        <TransactionHistory t={t} portfolioDetail={portfolioDetail} />
      </div>

      <Footer t={t} />
    </div>
  );
};

export default PortfolioDetail;
