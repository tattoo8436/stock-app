"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Button } from "antd";
import { getDataCompany } from "@api/home/homeApi";
import Image from "next/image";
import classNames from "classnames";

interface IProps {
  t: any;
}

interface ICompany {
  id: number;
  logo: any;
  name: string;
  description: string;
  value1: number;
  value2: number;
  percent: number;
}
const ContentCompany = (props: IProps) => {
  const { t } = props;

  const [listCompanies, setListCompanies] = useState<ICompany[]>([]);

  useEffect(() => {
    fetchCompany();
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

  const formatValue2 = (value2: number, percent: number) => {
    if (value2 > 0) {
      return `+${value2} (+${percent}%)`;
    }
    return `-${value2} (-${percent}%)`;
  };

  return (
    <div className="content-company">
      <div className="content-company__header">
        <div className="content-company__header__item">
          {t("common.label.trending")}
        </div>

        <div className="content-company__header__item">
          {t("common.label.topGainer")}
        </div>

        <div className="content-company__header__item">
          {t("common.label.topLoser")}
        </div>

        <div className="content-company__header__item">
          {t("common.label.mostActive")}
        </div>
      </div>

      <div className="content-company__content">
        {listCompanies?.map((i: ICompany) => {
          return (
            <div key={i.id} className="content-company__content__item">
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

export default ContentCompany;
