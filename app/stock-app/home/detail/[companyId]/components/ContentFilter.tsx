import classNames from "classnames";
import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  t: any;
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
}

const ContentFilter = (props: IProps) => {
  const { t, tab, setTab } = props;

  const handleChangeTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className="content-filter">
      <div
        className={classNames("content-filter__item", {
          active: tab === "ANALISIS",
        })}
        onClick={() => handleChangeTab("ANALISIS")}
      >
        {t("common.label.analisis")}
      </div>

      <div
        className={classNames("content-filter__item", {
          active: tab === "NEWS",
        })}
        onClick={() => handleChangeTab("NEWS")}
      >
        {t("common.label.news")}
      </div>

      <div
        className={classNames("content-filter__item", {
          active: tab === "ORDERBOOK",
        })}
        onClick={() => handleChangeTab("ORDERBOOK")}
      >
        {t("common.label.orderBook")}
      </div>

      <div
        className={classNames("content-filter__item", {
          active: tab === "KEYSTATISTICS",
        })}
        onClick={() => handleChangeTab("KEYSTATISTICS")}
      >
        {t("common.label.keyStatistics")}
      </div>

      <div
        className={classNames("content-filter__item", {
          active: tab === "COMPANYPROFILE",
        })}
        onClick={() => handleChangeTab("COMPANYPROFILE")}
      >
        {t("common.label.companyProfile")}
      </div>
    </div>
  );
};

export default ContentFilter;
