import { formatIntegerNumer } from "@/app/utils";
import { TFunction } from "i18next";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  companyBuySell: ICompanyBuySell | null;
  lot: number;
  price: number;
}

const Header = (props: IProps) => {
  const { t, companyBuySell, lot, price } = props;

  const getProceeds = () => {
    if (lot === 0 || price === 0) {
      return 0;
    }
    return (
      price * lot * 100 +
      (companyBuySell?.brokerFee ?? 0) +
      (companyBuySell?.exchangeFee ?? 0)
    );
  };

  return (
    <div className="header">
      <div className="header__title">{t("homeDetail.modalSell.sellStock")}</div>

      <div className="header__content">
        <div className="header__content__item">
          <div className="header__content__item__label">
            {t("fieldName.lot")}
          </div>
          <div className="header__content__item__value">
            {`${formatIntegerNumer(companyBuySell?.lot)} Lot`}
          </div>
        </div>

        <div className="header__content__item">
          <div className="header__content__item__label">
            {t("fieldName.profitLoss")}
          </div>
          <div className="header__content__item__value negative">
            {`Rp${formatIntegerNumer(
              companyBuySell?.profitLoss
            )} (${formatIntegerNumer(companyBuySell?.profitLossPercent)}%)`}
          </div>
        </div>

        <div className="header__content__item">
          <div className="header__content__item__label">
            {t("fieldName.proceeds")}
          </div>
          <div className="header__content__item__value">
            {`Rp${formatIntegerNumer(getProceeds())}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
