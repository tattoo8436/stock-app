"use client";

import { Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { FiSearch } from "react-icons/fi";

const ContentSearch = () => {
  const { t } = useTranslation();

  return (
    <div className="home__content__search">
      <Input
        prefix={<FiSearch />}
        placeholder={t("common.command.search")}
        className="search__input"
      />
    </div>
  );
};

export default ContentSearch;
