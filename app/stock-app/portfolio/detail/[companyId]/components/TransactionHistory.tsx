import { formatIntegerNumer, formatRealNumer } from "@/app/utils";
import dayjs from "dayjs";
import { TFunction } from "i18next";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  portfolioDetail: IPortfolioDetail | null;
}

const TransactionHistory = (props: IProps) => {
  const { t, portfolioDetail } = props;

  return (
    <div className="transaction-history">
      <div className="transaction-history__header">
        {t("common.label.transactionHistory")}
      </div>

      <div className="transaction-history__content">
        {portfolioDetail?.transactionHistory?.map((i, index) => {
          return (
            <div className="item-wrapper" key={index}>
              <div className="item-wrapper__header">
                {dayjs(i.date).format("DD MMM YYYY")}
              </div>

              <div className="item-wrapper__content">
                <div className="item-wrapper__content__left">
                  {t("common.command.buy")}
                </div>

                <div className="item-wrapper__content__right">
                  <div className="item-wrapper__content__right__item">{`Rp${formatIntegerNumer(
                    i.value1
                  )}`}</div>

                  <div className="item-wrapper__content__right__item">{`${i.value2} Lot`}</div>

                  <div className="item-wrapper__content__right__item">{`Rp${formatIntegerNumer(
                    i.value3
                  )}`}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionHistory;
