"use client";

import React, { useEffect, useState } from "react";
import "@config/i18n";
import { useTranslation } from "react-i18next";
import HeaderCard from "./components/HeaderCard";
import {
  getDataCompany,
  getDataPortfolio,
} from "@api/stock-app/portfolio/portfolioApi";
import ContentCompany from "./components/ContentCompany";

const Portfolio = () => {
  const { t } = useTranslation();
  const [portfolio, setPortfolio] = useState<IPortfolio | null>(null);
  const [listCompanies, setListCompanies] = useState<IPortfolioCompany[]>([]);

  useEffect(() => {
    fetchPortfolio();
    fetchCompany();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const data = await getDataPortfolio();
      console.log(data);
      setPortfolio(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompany = async () => {
    try {
      const data = await getDataCompany();
      console.log(data);
      setListCompanies(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="portfolio">
      <HeaderCard t={t} portfolio={portfolio} />

      <ContentCompany t={t} listCompanies={listCompanies} />
    </div>
  );
};

export default Portfolio;
