"use client";

import React, { useEffect, useState } from "react";
import HomeSearch from "./components/HomeSearch";
import HomeChart from "./components/HomeChart";
import { useTranslation } from "react-i18next";
import {
  getDataChart,
  getDataChartDetail,
  getDataCompany,
} from "@api/stock-app/home/homeApi";
import HomeCompany from "./components/HomeCompany";
import numeral from "numeral";

const Home = () => {
  const { t } = useTranslation();

  const [listCompanies, setListCompanies] = useState<IHomeCompany[]>([]);
  const [dataChart, setDataChart] = useState<number[][]>([]);
  const [chartDetail, setChartDetail] = useState<IHomeChartDetail | null>(null);
  const [search, setSearch] = useState<IHomeSearch>({
    name: "",
    type: "TRENDING",
  });

  useEffect(() => {
    fetchCompany();
    fetchChart();
    fetchChartDetail();
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
      setDataChart(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchChartDetail = async () => {
    try {
      const data = await getDataChartDetail();
      console.log(data);
      setChartDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <HomeSearch t={t} />

      <HomeChart t={t} dataChart={dataChart} chartDetail={chartDetail} />

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
