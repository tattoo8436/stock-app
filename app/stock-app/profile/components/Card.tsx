import { formatIntegerNumer } from "@/app/utils";
import { TFunction } from "i18next";
import Link from "next/link";
import React from "react";
import { BsBoxArrowDown, BsBoxArrowUp } from "react-icons/bs";

interface IProps {
  t: TFunction<"translation", undefined>;
  profile: IProfile | null;
}

const Card = (props: IProps) => {
  const { t, profile } = props;

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header__label">{t("fieldName.buyingPower")}</div>

        <div className="card__header__value">{`Rp${formatIntegerNumer(
          profile?.buyingPower
        )}`}</div>
      </div>

      <div className="card__content">
        <div className="card__content__left">
          <div className="card__content__left__label">
            {t("fieldName.saldoRDN")}
          </div>

          <div className="card__content__left__value">{`Rp${formatIntegerNumer(
            profile?.saldoRDN
          )}`}</div>
        </div>

        <div className="card__content__right">
          <div className="card__content__right__label">
            {t("fieldName.saldoPending")}
          </div>

          <div className="card__content__right__value">{`Rp${formatIntegerNumer(
            profile?.saldoPending
          )}`}</div>
        </div>
      </div>

      <div className="card__footer">
        <Link href="/stock-app/profile/deposit" className="card__footer__left">
          <div className="card__footer__left__icon">
            <BsBoxArrowUp />
          </div>

          <div className="card__footer__left__text">
            {t("profile.label.deposit")}
          </div>
        </Link>

        <div className="card__footer__right">
          <div className="card__footer__right__icon">
            <BsBoxArrowDown />
          </div>

          <div className="card__footer__right__text">
            {t("profile.label.withdraw")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
