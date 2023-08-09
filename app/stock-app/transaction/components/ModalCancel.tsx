import { Modal } from "antd";
import { TFunction } from "i18next";
import Image from "next/image";
import React from "react";
import ImageConfirm from "@images/confirm.png";

interface IProps {
  t: TFunction<"translation", undefined>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalDetail: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCancel = (props: IProps) => {
  const {
    t,
    openModal,
    setOpenModal,
    setOpenModalDetail,
    setOpenModalSuccess,
  } = props;

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
    setOpenModalDetail(false);
    setOpenModalSuccess(true);
  };

  return (
    <Modal
      className="modal-cancel"
      open={openModal}
      onCancel={() => handleCloseModal()}
      footer={null}
      centered
    >
      <div className="modal-cancel__image">
        <Image src={ImageConfirm} alt="" />
      </div>

      <div className="modal-cancel__content">
        {t("transaction.modalCancel.content")}
      </div>

      <div className="modal-cancel__footer">
        <div
          className="modal-cancel__footer__left"
          onClick={() => handleCancel()}
        >
          {t("common.command.yesCancel")}
        </div>

        <div
          className="modal-cancel__footer__right"
          onClick={() => handleCloseModal()}
        >
          {t("common.command.no")}
        </div>
      </div>
    </Modal>
  );
};

export default ModalCancel;
