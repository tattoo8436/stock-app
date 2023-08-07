import { TFunction } from "i18next";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = (props: IProps) => {
  const { t, setOpenModal, setOpenModalSuccess } = props;

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleConfirm = () => {
    setOpenModal(false);
    setOpenModalSuccess(true);
  };

  return (
    <div className="footer">
      <div className="footer__left" onClick={() => handleClose()}>
        {t("common.command.cancel")}
      </div>

      <div className="footer__right" onClick={() => handleConfirm()}>
        {t("common.command.confirm")}
      </div>
    </div>
  );
};

export default Footer;
