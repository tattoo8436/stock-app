"use client";

import { Input } from "antd";
import React from "react";
import { FiSearch } from "react-icons/fi";

interface IProps {
  t: any;
}

const HomeSearch = (props: IProps) => {
  const { t } = props;

  return (
    <div className="home-search">
      <Input
        prefix={<FiSearch />}
        placeholder={t("common.command.search")}
        className="home-search__input"
      />
    </div>
  );
};

export default HomeSearch;
