"use client";

import React, { useEffect, useState } from "react";
import "@config/i18n";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import { getDataDeposit } from "@/app/api/stock-app/profile/profileApi";
import Information from "./components/Information";
import Bank from "./components/Bank";
import Wallet from "./components/Wallet";

const Deposit = () => {
  const { t } = useTranslation();

  const [deposit, setDeposit] = useState<IDeposit | null>(null);

  useEffect(() => {
    fetchDeposit();
  }, []);

  const fetchDeposit = async () => {
    try {
      const data = await getDataDeposit();
      console.log(data);
      setDeposit(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="deposit">
      <Header t={t} />

      <Information t={t} deposit={deposit} />

      <Bank t={t} deposit={deposit} />

      <Wallet t={t} deposit={deposit} />
    </div>
  );
};

export default Deposit;
