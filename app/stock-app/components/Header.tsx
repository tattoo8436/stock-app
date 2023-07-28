"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { MdCandlestickChart } from "react-icons/md";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="stock-app-header">
      <div className="stock-app-header__icon">
        <MdCandlestickChart />
      </div>

      <div className="stock-app-header__text">{t("common.label.stockvest")}</div>
    </div>
  );
};

export default Header;
