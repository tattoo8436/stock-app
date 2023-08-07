import { formatIntegerNumer } from "@/app/utils";
import { TFunction } from "i18next";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  companyBuySell: ICompanyBuySell | null;
  buyOrderLot: number;
  price: number;
}

const Header = (props: IProps) => {
  const { t, companyBuySell, buyOrderLot, price } = props;

  const getInvestmentFee = () => {
    if (buyOrderLot === 0 || price === 0) {
      return 0;
    }
    return (
      price * buyOrderLot * 100 +
      (companyBuySell?.brokerFee ?? 0) +
      (companyBuySell?.exchangeFee ?? 0)
    );
  };

  return (
    <div className="header">
      <div className="header__title">{t("homeDetail.modalBuy.buyStock")}</div>

      <div className="header__content">
        <div className="header__content__item">
          <div className="header__content__item__label">
            {t("homeDetail.modalBuy.buyingPower")}
          </div>
          <div className="header__content__item__value">
            {`Rp${formatIntegerNumer(companyBuySell?.buyingPower)}`}
          </div>
        </div>

        <div className="header__content__item">
          <div className="header__content__item__label">
            {t("homeDetail.modalBuy.investmentFee")}
          </div>
          <div className="header__content__item__value">
            {`Rp${formatIntegerNumer(getInvestmentFee())}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
