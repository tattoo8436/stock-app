import classNames from "classnames";
import { TFunction } from "i18next";
import React from "react";

interface IProps {
  t: TFunction<"translation", undefined>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderFilter = (props: IProps) => {
  const { t, filter, setFilter } = props;

  const handeChangeFilter = (filter: string) => {
    setFilter(filter);
  };

  return (
    <div className="header-filter">
      <div
        className={classNames("header-filter__item", {
          active: filter === "TODAY",
        })}
        onClick={() => handeChangeFilter("TODAY")}
      >
        {t("common.label.today")}
      </div>

      <div
        className={classNames("header-filter__item", {
          active: filter === "7HARI",
        })}
        onClick={() => handeChangeFilter("7HARI")}
      >
        {t("common.label.7hari")}
      </div>

      <div
        className={classNames("header-filter__item", {
          active: filter === "30HARI",
        })}
        onClick={() => handeChangeFilter("30HARI")}
      >
        {t("common.label.30hari")}
      </div>

      <div
        className={classNames("header-filter__item", {
          active: filter === "90HARI",
        })}
        onClick={() => handeChangeFilter("90HARI")}
      >
        {t("common.label.90hari")}
      </div>

      <div
        className={classNames("header-filter__item", {
          active: filter === "PERIODE",
        })}
        onClick={() => handeChangeFilter("PERIODE")}
      >
        {t("common.label.periode")}
      </div>
    </div>
  );
};

export default HeaderFilter;
