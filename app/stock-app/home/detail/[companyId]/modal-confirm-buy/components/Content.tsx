import { formatIntegerNumer } from "@/app/utils";
import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  companyBuySell: ICompanyBuySell | null;
  buyOrderLot: number;
  price: number;
  buying: number;
}

const Content = (props: IProps) => {
  const { t, buying, buyOrderLot, price, companyBuySell } = props;
  return (
    <div className="content">
      <div className="content__header">
        <div className="content__header__icon">
          <Image src={companyBuySell?.logo ?? ""} alt="" />
        </div>

        <div className="content__header__text">
          <div className="content__header__text__name">
            {companyBuySell?.name}
          </div>

          <div className="content__header__text__description">
            {companyBuySell?.description}
          </div>
        </div>
      </div>

      <div className="content__content">
        <div className="content__content__item">
          <div className="content__content__item__label">
            {t("fieldName.buyOrderLot")}
          </div>
          <div className="content__content__item__value">{`${formatIntegerNumer(
            buyOrderLot
          )} Lot`}</div>
        </div>

        <div className="content__content__item">
          <div className="content__content__item__label">{t("fieldName.price")}</div>
          <div className="content__content__item__value">{`Rp${formatIntegerNumer(
            price
          )}`}</div>
        </div>

        <div className="content__content__item">
          <div className="content__content__item__label">
            {t("fieldName.investment")}
          </div>
          <div className="content__content__item__value">{`Rp${formatIntegerNumer(
            buyOrderLot * price * 100
          )}`}</div>
        </div>

        <div className="divider"></div>

        <div className="content__content__item">
          <div className="content__content__item__label">
            {t("fieldName.brokerFee")}
          </div>
          <div className="content__content__item__value">{`Rp${formatIntegerNumer(
            companyBuySell?.brokerFee
          )}`}</div>
        </div>

        <div className="content__content__item">
          <div className="content__content__item__label">
            {t("fieldName.exchangeFee")}
          </div>
          <div className="content__content__item__value">{`Rp${formatIntegerNumer(
            companyBuySell?.exchangeFee
          )}`}</div>
        </div>

        <div className="content__content__item item-payment">
          <div className="content__content__item__label">
            {t("fieldName.payment")}
          </div>
          <div className="content__content__item__value">{`Rp${formatIntegerNumer(
            buyOrderLot * price * 100 +
              (companyBuySell?.brokerFee ?? 0) +
              (companyBuySell?.exchangeFee ?? 0)
          )}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
