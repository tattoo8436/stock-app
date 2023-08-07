import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  t: any;
  setOpenModalBuy: Dispatch<SetStateAction<boolean>>;
  setOpenModalSell: Dispatch<SetStateAction<boolean>>;
}

const Footer = (props: IProps) => {
  const { t, setOpenModalBuy, setOpenModalSell } = props;

  const handleOpenModalBuy = () => {
    setOpenModalBuy(true);
  };

  return (
    <div className="stock-app-detail-footer">
      <div className="stock-app-detail-footer__left">
        {t("common.command.sell")}
      </div>

      <div
        className="stock-app-detail-footer__right"
        onClick={() => handleOpenModalBuy()}
      >
        {t("common.command.buy")}
      </div>
    </div>
  );
};

export default Footer;
