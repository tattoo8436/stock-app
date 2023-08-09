import { TFunction } from "i18next";
import React from "react";
import { MdCandlestickChart } from "react-icons/md";

interface IProps {
  t: TFunction<"translation", undefined>;
}

const Footer = (props: IProps) => {
  const { t } = props;

  return (
    <div className="footer">
      <div className="footer__header">
        <div className="footer__header__icon">
          <MdCandlestickChart />
        </div>

        <div className="footer__header__text">
          {t("common.label.stockvest")}
        </div>
      </div>

      <div className="footer__text">{`${t("common.label.version")} 1.0.0`}</div>
    </div>
  );
};

export default Footer;
