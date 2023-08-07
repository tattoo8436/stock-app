import { Modal } from "antd";
import { TFunction } from "i18next";
import React, { Dispatch, SetStateAction, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import FooterBtn from "./components/FooterBtn";
import ModalConfirmBuy from "../modal-confirm-buy";
import ModalConfirmSell from "../modal-confirm-sell";

interface IProps {
  t: TFunction<"translation", undefined>;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setOpenModalSuccess: Dispatch<SetStateAction<boolean>>;
  companyBuySell: ICompanyBuySell | null;
}

const ModalSell = (props: IProps) => {
  const { t, openModal, setOpenModal, setOpenModalSuccess, companyBuySell } =
    props;

  const [lot, setLot] = useState<number>(0);
  const [price, setPrice] = useState<number>(560);
  const [selling, setSelling] = useState<number>(0);
  const [openModalConfirmBuy, setOpenModalConfirmBuy] =
    useState<boolean>(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      className="modal-sell"
      open={openModal}
      onCancel={() => handleClose()}
      footer={null}
      centered
    >
      <Header t={t} companyBuySell={companyBuySell} lot={lot} price={price} />

      <Content
        t={t}
        companyBuySell={companyBuySell}
        lot={lot}
        setLot={setLot}
        price={price}
        setPrice={setPrice}
        selling={selling}
        setSelling={setSelling}
      />

      <Footer t={t} companyBuySell={companyBuySell} />

      <FooterBtn
        t={t}
        lot={lot}
        selling={selling}
        price={price}
        setOpenModal={setOpenModalConfirmBuy}
      />

      <ModalConfirmSell
        t={t}
        openModal={openModalConfirmBuy}
        setOpenModal={setOpenModalConfirmBuy}
        setOpenModalSuccess={setOpenModalSuccess}
        selling={selling}
        lot={lot}
        price={price}
        companyBuySell={companyBuySell}
      />
    </Modal>
  );
};

export default ModalSell;
