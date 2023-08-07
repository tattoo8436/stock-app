import { Modal } from "antd";
import { TFunction } from "i18next";
import React, { Dispatch, SetStateAction, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ModalSuccess from "../modal-success";

interface IProps {
  t: TFunction<"translation", undefined>;
  companyBuySell: ICompanyBuySell | null;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  buyOrderLot: number;
  price: number;
  buying: number;
}

const ModalConfirmBuy = (props: IProps) => {
  const {
    buyOrderLot,
    buying,
    companyBuySell,
    price,
    t,
    openModal,
    setOpenModal,
    setOpenModalSuccess
  } = props;

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      className="modal-confirm-buy"
      open={openModal}
      onCancel={() => handleClose()}
      footer={null}
      centered
    >
      <Header t={t} />

      <Content
        t={t}
        buying={buying}
        buyOrderLot={buyOrderLot}
        price={price}
        companyBuySell={companyBuySell}
      />

      <Footer
        t={t}
        setOpenModal={setOpenModal}
        setOpenModalSuccess={setOpenModalSuccess}
      />

      
    </Modal>
  );
};

export default ModalConfirmBuy;
