import {
  formatRealNumer,
  formatValuePercent,
  getColorValue,
} from "@/app/utils";
import { TFunction } from "i18next";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  portfolioDetail: IPortfolioDetail | null;
}

const NilaiInvestasi = (props: IProps) => {
  const { t, portfolioDetail } = props;

  return (
    <div className="nilai-investasi">
      <div className="nilai-investasi__header">
        {t("common.label.nilaiInvestasi")}
      </div>

      <div className="nilai-investasi__content">
        <div className="nilai-investasi__content__item">
          <div className="nilai-investasi__content__item__label">
            {t("fieldName.allocate")}
          </div>
          <div className="nilai-investasi__content__item__value">
            {`${formatRealNumer(portfolioDetail?.nilaiInvestasi?.allocate)}%`}
          </div>
        </div>

        <div className="nilai-investasi__content__item">
          <div className="nilai-investasi__content__item__label">
            {t("fieldName.lot")}
          </div>
          <div className="nilai-investasi__content__item__value">
            {`${portfolioDetail?.nilaiInvestasi?.lot} Lot`}
          </div>
        </div>

        <div className="nilai-investasi__content__item">
          <div className="nilai-investasi__content__item__label">
            {t("fieldName.averagePrice")}
          </div>
          <div className="nilai-investasi__content__item__value">
            {`Rp${formatRealNumer(
              portfolioDetail?.nilaiInvestasi?.averagePrice
            )}`}
          </div>
        </div>

        <div className="nilai-investasi__content__item">
          <div className="nilai-investasi__content__item__label">
            {t("fieldName.investment")}
          </div>
          <div className="nilai-investasi__content__item__value">
            {`Rp${formatRealNumer(
              portfolioDetail?.nilaiInvestasi?.investment
            )}`}
          </div>
        </div>

        <div className="nilai-investasi__content__item">
          <div className="nilai-investasi__content__item__label">
            {t("fieldName.profitLoss")}
          </div>
          <div
            className={`nilai-investasi__content__item__value ${getColorValue(
              portfolioDetail?.nilaiInvestasi?.profitLoss
            )}`}
          >
            {`Rp${formatValuePercent(
              portfolioDetail?.nilaiInvestasi?.profitLoss ?? 0,
              portfolioDetail?.nilaiInvestasi?.profitLossPercent ?? 0
            )}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NilaiInvestasi;
