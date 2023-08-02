import { formatRealNumer, getColorValue } from "@/app/utils";
import React from "react";

interface IProps {
  t: any;
  portfolio: IPortfolio | null;
}

const HeaderCard = (props: IProps) => {
  const { t, portfolio } = props;

  return (
    <div className="header-card">
      <div className="header-card__title">{t("page.portfolio")}</div>

      <div className="header-card__content">{`Rp${formatRealNumer(
        portfolio?.value
      )}`}</div>

      <div className="header-card__footer">
        <div className="header-card__footer__left">
          <div className="header-card__footer__left__label">
            {t("common.label.profitLoss")}
          </div>
          <div
            className={`header-card__footer__left__value ${getColorValue(
              portfolio?.profitLoss
            )}`}
          >
            {formatRealNumer(portfolio?.profitLoss)}
          </div>
        </div>

        <div className="header-card__footer__center">
          <div className="header-card__footer__center__label">
            {t("common.label.capitalGain")}
          </div>
          <div
            className={`header-card__footer__center__value ${getColorValue(
              portfolio?.capitalGain
            )}`}
          >
            {formatRealNumer(portfolio?.capitalGain)}%
          </div>
        </div>

        <div className="header-card__footer__right">
          <div className="header-card__footer__right__label">
            {t("common.label.open")}
          </div>
          <div className="header-card__footer__right__value">
            {formatRealNumer(portfolio?.open)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
