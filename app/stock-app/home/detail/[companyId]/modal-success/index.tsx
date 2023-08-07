import { Modal } from "antd";
import React from "react";
import { TFunction } from "i18next";
import Image from "next/image";
import ImageSuccess from "@images/success.png";

interface IProps {
  t: TFunction<"translation", undefined>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSuccess = (props: IProps) => {
  const { t, openModal, setOpenModal } = props;

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      className="modal-success"
      open={openModal}
      onCancel={() => handleClose()}
      footer={null}
      centered
    >
      <div className="modal-success__image">
        <Image src={ImageSuccess} alt="" />
      </div>

      <div className="modal-success__title">
        {t("homeDetail.modalSuccess.title")}
      </div>

      <div className="modal-success__message">
        {t("homeDetail.modalSuccess.message")}
      </div>

      <div className="modal-success__btn" onClick={() => handleClose()}>
        {t("common.command.done")}
      </div>
    </Modal>
  );
};

export default ModalSuccess;
