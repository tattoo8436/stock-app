"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Button } from "antd";
import { getDataCompany } from "@/app/api/stock-app/home/homeApi";
import Image from "next/image";
import classNames from "classnames";

interface IProps {
  t: any;
  listCompanies: IHomeCompany[];
  search: IHomeSearch;
  setSearch: React.Dispatch<React.SetStateAction<IHomeSearch>>;
}

const HomeCompany = (props: IProps) => {
  const { t, listCompanies, search, setSearch } = props;

  const formatValue2 = (value2: number, percent: number) => {
    if (value2 > 0) {
      return `+${value2} (+${percent}%)`;
    }
    return `-${value2} (-${percent}%)`;
  };

  const handleChangeSearch = (type: string) => {
    setSearch((pre) => ({ ...pre, type: type }));
  };

  return (
    <div className="home-company">
      <div className="home-company__header">
        <div
          className={classNames("home-company__header__item", {
            active: search.type === "TRENDING",
          })}
          onClick={() => handleChangeSearch("TRENDING")}
        >
          {t("common.label.trending")}
        </div>

        <div
          className={classNames("home-company__header__item", {
            active: search.type === "TOP_GAINER",
          })}
          onClick={() => handleChangeSearch("TOP_GAINER")}
        >
          {t("common.label.topGainer")}
        </div>

        <div
          className={classNames("home-company__header__item", {
            active: search.type === "TOP_LOSER",
          })}
          onClick={() => handleChangeSearch("TOP_LOSER")}
        >
          {t("common.label.topLoser")}
        </div>

        <div
          className={classNames("home-company__header__item", {
            active: search.type === "MOST_ACTIVE",
          })}
          onClick={() => handleChangeSearch("MOST_ACTIVE")}
        >
          {t("common.label.mostActive")}
        </div>
      </div>

      <div className="home-company__content">
        {listCompanies?.map((i) => {
          return (
            <div key={i.id} className="home-company__content__item">
              <div className="item__left">
                <div className="item__left__logo">
                  <Image src={i.logo} alt="" />
                </div>

                <div className="item__left__text">
                  <div className="item__left__text__name">{i.name}</div>
                  <div className="item__left__text__description">
                    {i.description}
                  </div>
                </div>
              </div>

              <div className="item__right">
                <div className="item__right__value1">{i.value1}</div>
                <div
                  className={classNames("item__right__value2", {
                    positive: i.value2 >= 0,
                    negative: i.value2 < 0,
                  })}
                >
                  {formatValue2(i.value2, i.percent)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCompany;
