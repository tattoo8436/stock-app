"use client";

import React, { useEffect, useState } from "react";
import "@config/i18n";
import { useTranslation } from "react-i18next";
import HeaderFilter from "./components/HeaderFilter";
import {
  getDataTransaction,
  getDataTransactionDetail,
} from "@/app/api/stock-app/transaction/transactionApi";
import TransactionToday from "./components/TransactionToday";
import Yesterday from "./components/Yesterday";
import ModalDetail from "./components/ModalDetail";
import ModalCancel from "./components/ModalCancel";
import ModalSuccess from "./components/ModalSuccess";

const Transaction = () => {
  const { t } = useTranslation();

  const [filter, setFilter] = useState("TODAY");
  const [transaction, setTransaction] = useState<ITransaction | null>(null);
  const [transactionDetail, setTransactionDetail] =
    useState<ITransactionDetail | null>(null);
  const [openModalDetail, setOpenModalDetail] = useState<boolean>(false);
  const [openModalCancel, setOpenModalCancel] = useState<boolean>(false);
  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);

  useEffect(() => {
    fetchTransaction();
    fetchTransactionDetail();
  }, []);

  const fetchTransaction = async () => {
    try {
      const data = await getDataTransaction();
      console.log(data);
      setTransaction(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTransactionDetail = async () => {
    try {
      const data = await getDataTransactionDetail();
      console.log(data);
      setTransactionDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="transaction">
      <HeaderFilter t={t} filter={filter} setFilter={setFilter} />

      <TransactionToday
        t={t}
        transaction={transaction}
        setOpenModal={setOpenModalDetail}
      />

      <Yesterday
        t={t}
        transaction={transaction}
        setOpenModal={setOpenModalDetail}
      />

      <ModalDetail
        t={t}
        openModal={openModalDetail}
        setOpenModal={setOpenModalDetail}
        setOpenModalCancel={setOpenModalCancel}
        transactionDetail={transactionDetail}
      />

      <ModalCancel
        t={t}
        openModal={openModalCancel}
        setOpenModal={setOpenModalCancel}
        setOpenModalDetail={setOpenModalDetail}
        setOpenModalSuccess={setOpenModalSuccess}
      />

      <ModalSuccess
        t={t}
        openModal={openModalSuccess}
        setOpenModal={setOpenModalSuccess}
      />
    </div>
  );
};

export default Transaction;
