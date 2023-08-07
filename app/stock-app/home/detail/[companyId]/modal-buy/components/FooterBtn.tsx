import { Button } from "antd";
import classNames from "classnames";
import { TFunction } from "i18next";
import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  buyOrderLot: number;
  price: number;
  buying: number;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const FooterBtn = (props: IProps) => {
  const { t, buyOrderLot, buying, price, setOpenModal } = props;

  const handleOpenModalConfirm = () => {
    setOpenModal(true);
  };

  return (
    <div className="footer-btn">
      <div
        className={classNames("footer-btn__content", {
          disabled: buying === 0 || buyOrderLot === 0 || price === 0,
        })}
        onClick={() => handleOpenModalConfirm()}
      >
        {t("common.command.buy")}
      </div>
    </div>
  );
};

export default FooterBtn;
