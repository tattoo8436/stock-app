import {
  formatRealNumer,
  formatValuePercent,
  getColorValue,
} from "@/app/utils";
import { TFunction } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  listCompanies: IPortfolioCompany[];
}

const ContentCompany = (props: IProps) => {
  const { t, listCompanies } = props;
  const router = useRouter();

  const handleChangePage = (companyId: number) => {
    router.push(`/stock-app/portfolio/detail/${companyId}`);
  };

  return (
    <div className="content-company">
      <div className="content-company__title">
        {t("common.label.stockList")}
      </div>

      <div className="content-company__content">
        {listCompanies?.map((i) => {
          return (
            <Link
              key={i.id}
              href={`/stock-app/portfolio/detail/${i.id}`}
              className="content-company__content__item"
            >
              <div className="item__header">
                <div className="item__header__logo">
                  <Image src={i.logo} alt="" />
                </div>

                <div className="item__header__text">
                  <div className="item__header__text__name">{i.name}</div>
                  <div className="item__header__text__description">
                    {i.description}
                  </div>
                </div>
              </div>

              <div className="item__footer">
                <div className="item__footer__left">
                  <div className="item__footer__left__label">
                    {t("common.label.investment")}
                  </div>
                  <div className="item__footer__left__value">{`Rp${formatRealNumer(
                    i.investment
                  )}`}</div>
                </div>

                <div className="item__footer__center">
                  <div className="item__footer__center__label">
                    {t("common.label.profitLoss")}
                  </div>
                  <div
                    className={`item__footer__center__value ${getColorValue(
                      i.profitLoss
                    )}`}
                  >{`Rp${formatValuePercent(
                    i.profitLoss,
                    i.profitLossPercent
                  )}`}</div>
                </div>

                <div className="item__footer__right">
                  <div className="item__footer__right__label">
                    {t("common.label.allocate")}
                  </div>
                  <div className="item__footer__right__value">{`${formatRealNumer(
                    i.allocate
                  )} (${i.allocatePercent}%)`}</div>
                </div>
              </div>

              <div className="divider"></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContentCompany;
