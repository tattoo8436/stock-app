"use client";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import {
  getCompanyDetail,
  getDataBuySell,
} from "@api/stock-app/home/companyApi";
import ChartHeader from "./components/ChartHeader";
import ChartDetail from "./components/ChartDetail";
import ChartContent from "./components/ChartContent";
import ChartFooter from "./components/ChartFooter";
import ContentFilter from "./components/ContentFilter";
import ContentHeader from "./components/ContentHeader";
import ContentTable from "./components/ContentTable";
import "@config/i18n";
import ModalBuy from "./modal-buy";
import ModalSuccess from "./modal-success";

const Detail = ({ params }: { params: { companyId: number } }) => {
  const { t } = useTranslation();
  const [companyDetail, setCompanyDetail] = useState<ICompanyDetail | null>(
    null
  );
  const [search, setSearch] = useState<string>("1M");
  const [tab, setTab] = useState<string>("KEYSTATISTICS");
  const [openModalBuy, setOpenModalBuy] = useState<boolean>(false);
  const [openModalSell, setOpenModalSell] = useState<boolean>(false);
  const [companyBuySell, setCompanyBuySell] = useState<ICompanyBuySell | null>(
    null
  );
  const [openModalSuccess, setOpenModalSuccess] = useState<boolean>(false);

  useEffect(() => {
    fetchCompanyDetail();
    fetchCompanyBuySell();
  }, []);

  const fetchCompanyDetail = async () => {
    try {
      const data = await getCompanyDetail();
      console.log(data);
      setCompanyDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompanyBuySell = async () => {
    try {
      const data = await getDataBuySell();
      console.log(data);
      setCompanyBuySell(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="stock-app-detail">
      <Header />

      <div className="stock-app-detail-content">
        <ChartHeader companyDetail={companyDetail} />

        <ChartDetail companyDetail={companyDetail} />

        <ChartContent t={t} dataChart={companyDetail?.dataChart ?? []} />

        <ChartFooter search={search} setSearch={setSearch} />

        <ContentFilter t={t} tab={tab} setTab={setTab} />

        <ContentHeader t={t} companyDetail={companyDetail} />

        <ContentTable t={t} companyDetail={companyDetail} />
      </div>

      <Footer
        t={t}
        setOpenModalBuy={setOpenModalBuy}
        setOpenModalSell={setOpenModalSell}
      />

      <ModalBuy
        t={t}
        openModal={openModalBuy}
        setOpenModal={setOpenModalBuy}
        setOpenModalSuccess={setOpenModalSuccess}
        companyBuySell={companyBuySell}
      />

      <ModalSuccess
        t={t}
        openModal={openModalSuccess}
        setOpenModal={setOpenModalSuccess}
      />
    </div>
  );
};

export default Detail;
