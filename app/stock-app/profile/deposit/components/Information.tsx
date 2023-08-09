import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  deposit: IDeposit | null;
}

const Information = (props: IProps) => {
  const { t, deposit } = props;

  return (
    <div className="information">
      <div className="information__title">{t("deposit.label.nomor")}</div>

      <div className="information__content">
        <div className="information__content__left">
          <div className="information__content__left__avatar">
            <Image src={deposit?.information?.avatar} alt="" />
          </div>

          <div className="information__content__left__text">
            <div className="information__content__left__text__name">
              {deposit?.information?.name}
            </div>

            <div className="information__content__left__text__id">
              {deposit?.information?.id}
            </div>
          </div>
        </div>

        <div className="information__content__right">
          {t("deposit.label.salin")}
        </div>
      </div>
    </div>
  );
};

export default Information;
