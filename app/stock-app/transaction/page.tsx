"use client";

import React, { useEffect, useState } from "react";
import "@config/i18n";
import { useTranslation } from "react-i18next";
import HeaderFilter from "./components/HeaderFilter";
import { getDataTransaction } from "@/app/api/stock-app/transaction/transactionApi";
import TransactionToday from "./components/TransactionToday";

const Transaction = () => {
  const { t } = useTranslation();

  const [filter, setFilter] = useState("TODAY");
  const [transaction, setTransaction] = useState<ITransaction | null>(null);

  useEffect(() => {
    fetchTransaction();
  }, []);

  const fetchTransaction = async () => {
    try {
      const data = await getDataTransaction();
      console.log(data);
      setTransaction(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="transaction">
      <HeaderFilter t={t} filter={filter} setFilter={setFilter} />

      <TransactionToday t={t} transaction={transaction} />
    </div>
  );
};

export default Transaction;
