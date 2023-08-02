import React from "react";

interface IProps {
  t: any;
}

const Footer = (props: IProps) => {
  const { t } = props;

  return (
    <div className="stock-app-detail-footer">
      <div className="stock-app-detail-footer__left">
        {t("common.command.sell")}
      </div>

      <div className="stock-app-detail-footer__right">
        {t("common.command.buy")}
      </div>
    </div>
  );
};

export default Footer;
