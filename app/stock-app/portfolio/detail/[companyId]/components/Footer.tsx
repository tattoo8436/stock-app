import { TFunction } from "i18next";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
}

const Footer = (props: IProps) => {
  const { t } = props;

  return (
    <div className="portfolio-detail-footer">{t("common.command.sell")}</div>
  );
};

export default Footer;
