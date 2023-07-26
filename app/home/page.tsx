"use client";

import React from "react";
import Header from "./components/Header";
import ContentSearch from "./components/ContentSearch";
import ContentChart from "./components/ContentChart";
import ContentCompany from "./components/ContentCompany";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Header />

      <div className="home__content">
        <ContentSearch />

        <ContentChart />

        <ContentCompany t={t} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
