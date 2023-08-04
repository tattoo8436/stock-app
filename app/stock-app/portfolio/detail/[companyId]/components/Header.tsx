"use client";

import { TFunction } from "i18next";
import { useRouter } from "next/navigation";
import React from "react";
import { FiChevronLeft, FiStar } from "react-icons/fi";
import { LuAlarmClock } from "react-icons/lu";

interface IProps {
  t: TFunction<"translation", undefined>;
}

const Header = (props: IProps) => {
  const { t } = props;

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="portfolio-detail-header">
      <div className="portfolio-detail-header__icon">
        <FiChevronLeft
          className="portfolio-detail-header__icon__item"
          onClick={() => handleBack()}
        />
      </div>

      <div className="portfolio-detail-header__text">
        {t("page.investmentDetail")}
      </div>
    </div>
  );
};

export default Header;
