import { formatIntegerNumer } from "@/app/utils";
import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import _ from "lodash";

interface IProps {
  t: TFunction<"translation", undefined>;
  transaction: ITransaction | null;
}

const TransactionToday = (props: IProps) => {
  const { t, transaction } = props;

  console.log(transaction);
  

  return (
    <div className="transaction-today">
      <div className="transaction-today__title">
        {t("transaction.label.transactionToday")}
      </div>

      <div className="transaction-today__content">
        {transaction?.transactionToday?.map((i) => {
          return (
            <div key={i.id} className="transaction-today__content__item">
              <div className="item__left">
                <div className="item__left__icon">
                  <Image src={i.logo} alt="" />
                </div>

                <div className="item__left__text">
                  <div className="item__left__text__name">{i.name}</div>
                  <div className="item__left__text__value">{`Rp${formatIntegerNumer(
                    i.value1
                  )}`}</div>
                </div>
              </div>

              <div className="item__center">
                <div className="item__center__lot">{`${formatIntegerNumer(
                  i.lot
                )} Lot`}</div>
                <div className="item__center__value">{`Rp${formatIntegerNumer(
                  i.value2
                )}`}</div>
              </div>

              <div className="item__right">{_.capitalize(i.status)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionToday;
