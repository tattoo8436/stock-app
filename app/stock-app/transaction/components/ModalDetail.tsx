import { formatIntegerNumer } from "@/app/utils";
import { Modal } from "antd";
import classNames from "classnames";
import dayjs from "dayjs";
import { TFunction } from "i18next";
import _ from "lodash";
import Image from "next/image";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalCancel: React.Dispatch<React.SetStateAction<boolean>>;
  transactionDetail: ITransactionDetail | null;
}

const ModalDetail = (props: IProps) => {
  const { t, openModal, setOpenModal, transactionDetail, setOpenModalCancel } =
    props;

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModalCancel(true);
  };

  return (
    <Modal
      className="modal-detail"
      open={openModal}
      onCancel={() => handleCloseModal()}
      footer={null}
      centered
    >
      <div className="modal-detail__header">
        {t("transaction.modalDetail.title")}
      </div>

      <div className="modal-detail__content">
        <div className="modal-detail__content__header">
          <div className="modal-detail__content__header__icon">
            <Image src={transactionDetail?.logo} alt="" />
          </div>

          <div className="modal-detail__content__header__text">
            <div className="modal-detail__content__header__text__name">
              {transactionDetail?.name}
            </div>
            <div className="modal-detail__content__header__text__description">
              {transactionDetail?.description}
            </div>
          </div>
        </div>

        <div className="modal-detail__content__content">
          <div className="modal-detail__content__content__item">
            <div className="modal-detail__content__content__item__label">
              {t("fieldName.orderTime")}
            </div>
            <div className="modal-detail__content__content__item__value">
              {dayjs(transactionDetail?.orderTime).format(
                "DD MMM YYYY, HH:mm:ss"
              )}
            </div>
          </div>

          <div className="modal-detail__content__content__item">
            <div className="modal-detail__content__content__item__label">
              {t("fieldName.status")}
            </div>
            <div
              className={classNames(
                "modal-detail__content__content__item__value",
                {
                  open: transactionDetail?.status === "OPEN",
                  match: transactionDetail?.status === "MATCH",
                  withdrawal: transactionDetail?.status === "WITHDRAWAL",
                }
              )}
            >
              {_.capitalize(transactionDetail?.status)}
            </div>
          </div>

          <div className="modal-detail__content__content__item">
            <div className="modal-detail__content__content__item__label">
              {t("fieldName.lot")}
            </div>
            <div className="modal-detail__content__content__item__value">
              {`${formatIntegerNumer(transactionDetail?.lot)} Lot`}
            </div>
          </div>

          <div className="modal-detail__content__content__item">
            <div className="modal-detail__content__content__item__label">
              {t("fieldName.price")}
            </div>
            <div className="modal-detail__content__content__item__value">
              {`Rp${formatIntegerNumer(transactionDetail?.price)}`}
            </div>
          </div>

          <div className="modal-detail__content__content__item item-investment">
            <div className="modal-detail__content__content__item__label">
              {t("fieldName.investment")}
            </div>
            <div className="modal-detail__content__content__item__value">
              {`Rp${formatIntegerNumer(transactionDetail?.investment)}`}
            </div>
          </div>
        </div>
      </div>

      <div className="modal-detail__footer">
        <div
          className="modal-detail__footer__left"
          onClick={() => handleCancel()}
        >
          {t("common.command.cancelOrder")}
        </div>

        <div
          className="modal-detail__footer__right"
          onClick={() => handleCloseModal()}
        >
          {t("common.command.amend")}
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetail;
