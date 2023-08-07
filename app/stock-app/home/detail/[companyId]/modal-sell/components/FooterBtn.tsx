import { Button } from "antd";
import classNames from "classnames";
import { TFunction } from "i18next";
import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  lot: number;
  price: number;
  selling: number;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const FooterBtn = (props: IProps) => {
  const { t, lot, selling, price, setOpenModal } = props;

  const handleOpenModalConfirm = () => {
    setOpenModal(true);
  };

  return (
    <div className="footer-btn">
      <div
        className={classNames("footer-btn__content", {
          disabled: selling === 0 || lot === 0 || price === 0,
        })}
        onClick={() => handleOpenModalConfirm()}
      >
        {t("common.command.sell")}
      </div>
    </div>
  );
};

export default FooterBtn;
