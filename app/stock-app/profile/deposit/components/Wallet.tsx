import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import { FiChevronUp } from "react-icons/fi";

interface IProps {
  t: TFunction<"translation", undefined>;
  deposit: IDeposit | null;
}

const Wallet = (props: IProps) => {
  const { t, deposit } = props;

  return (
    <div className="wallet">
      <div className="wallet__title">{t("deposit.label.wallet")}</div>

      <div className="wallet__content">
        {deposit?.wallet?.map((i) => {
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

export default Wallet;
