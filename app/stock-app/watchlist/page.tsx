"use client";

import React, { useEffect, useState } from "react";
import "@config/i18n";
import { useTranslation } from "react-i18next";
import { getDataCompany } from "@api/stock-app/watchlist/watchlistApi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  formatRealNumer,
  formatValuePercent,
  getColorValue,
} from "@utils/index";
import classNames from "classnames";

const Watchlist = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [listCompanies, setListCompanies] = useState<IHomeCompany[]>([]);
  const [idDelete, setIdDelete] = useState<number>(0);

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

  const handleChangePage = (companyId: number) => {
    router.push(`/stock-app/home/detail/${companyId}`);
  };

  const handleDelete = (id: number) => {
    if (id === idDelete) {
      setIdDelete(0);
    } else {
      setIdDelete(id);
    }
  };

  return (
    <div className="watchlist">
      <div className="watchlist__title">{t("page.watchlist")}</div>

      <div className="watchlist__content">
        {listCompanies?.map((i) => {
          return (
            <>
              <div key={i.id} className="watchlist__content__item">
                <div
                  className={classNames("item-wrapper", {
                    swiped: idDelete === i.id,
                  })}
                  onClick={() => handleDelete(i.id)}
                >
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
                    <div className="item__right__value1">
                      {formatRealNumer(i.value1)}
                    </div>
                    <div
                      className={`item__right__value2 ${getColorValue(
                        i.value2
                      )}`}
                    >
                      {formatValuePercent(i.value2, i.percent)}
                    </div>
                  </div>
                </div>

                <div
                  className={classNames("btn-delete", {
                    swiped: idDelete === i.id,
                  })}
                >
                  {t("common.command.delete")}
                </div>
              </div>

              <div className="divider"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Watchlist;
