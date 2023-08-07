import { Modal } from "antd";
import { TFunction } from "i18next";
import React, { Dispatch, SetStateAction, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import FooterBtn from "./components/FooterBtn";
import ModalConfirmBuy from "../modal-confirm-buy";

interface IProps {
  t: TFunction<"translation", undefined>;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setOpenModalSuccess: Dispatch<SetStateAction<boolean>>;
  companyBuySell: ICompanyBuySell | null;
}

const ModalBuy = (props: IProps) => {
  const { t, openModal, setOpenModal, setOpenModalSuccess, companyBuySell } = props;

  const [buyOrderLot, setBuyOrderLot] = useState<number>(0);
  const [price, setPrice] = useState<number>(570);
  const [buying, setBuying] = useState<number>(0);
  const [openModalConfirmBuy, setOpenModalConfirmBuy] =
    useState<boolean>(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      className="modal-buy"
      open={openModal}
      onCancel={() => handleClose()}
      footer={null}
      centered
    >
      <Header
        t={t}
        companyBuySell={companyBuySell}
        buyOrderLot={buyOrderLot}
        price={price}
      />

      <Content
        t={t}
        companyBuySell={companyBuySell}
        buyOrderLot={buyOrderLot}
        setBuyOrderLot={setBuyOrderLot}
        price={price}
        setPrice={setPrice}
        buying={buying}
        setBuying={setBuying}
      />

      <Footer t={t} companyBuySell={companyBuySell} />

      <FooterBtn
        t={t}
        buyOrderLot={buyOrderLot}
        buying={buying}
        price={price}
        setOpenModal={setOpenModalConfirmBuy}
      />

      <ModalConfirmBuy
        t={t}
        openModal={openModalConfirmBuy}
        setOpenModal={setOpenModalConfirmBuy}
        setOpenModalSuccess={setOpenModalSuccess}
        buying={buying}
        buyOrderLot={buyOrderLot}
        price={price}
        companyBuySell={companyBuySell}
      />
    </Modal>
  );
};

export default ModalBuy;
