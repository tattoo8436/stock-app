"use client";

import React, { useEffect, useState } from "react";
import HomeSearch from "./components/HomeSearch";
import HomeChart from "./components/HomeChart";
import { useTranslation } from "react-i18next";
import { getDataChart, getDataCompany } from "@api/stock-app/home/homeApi";
import HomeCompany from "./components/HomeCompany";

const Home = () => {
  const { t } = useTranslation();

  const [listCompanies, setListCompanies] = useState<IHomeCompany[]>([]);
  const [listCharts, setListCharts] = useState<IHomeChart[]>([]);
  const [search, setSearch] = useState<IHomeSearch>({
    name: "",
    type: "TRENDING",
  });

  useEffect(() => {
    fetchCompany();
    fetchChart();
  }, []);

  const fetchCompany = async () => {
    try {
      const data = await getDataCompany();
      console.log(data);
      setListCompanies(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchChart = async () => {
    try {
      const data = await getDataChart();
      console.log(data);
      setListCharts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <HomeSearch t={t} />

      <HomeChart t={t} listCharts={listCharts} />

      <HomeCompany
        t={t}
        listCompanies={listCompanies}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default Home;
