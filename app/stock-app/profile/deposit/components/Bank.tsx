import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { FiChevronUp } from "react-icons/fi";

interface IProps {
  t: TFunction<"translation", undefined>;
  deposit: IDeposit | null;
}

const Bank = (props: IProps) => {
  const { t, deposit } = props;

  return (
    <div className="bank">
      <div className="bank__title">{t("deposit.label.bank")}</div>

      <div className="bank__content">
        {deposit?.bank?.map((i) => {
          return (
            <div key={i.id} className="item-wrapper">
              <div className="item-wrapper__left">
                <div className="item-wrapper__left__icon">
                  <Image src={i.logo} alt="" />
                </div>

                <div className="item-wrapper__left__name">{i.name}</div>
              </div>

              <div className="item-wrapper__right">
                <FiChevronUp />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bank;
