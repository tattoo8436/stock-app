"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FiChevronLeft, FiStar } from "react-icons/fi";
import { LuAlarmClock } from "react-icons/lu";

const Header = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="stock-app-detail-header">
      <div className="stock-app-detail-header__left">
        <FiChevronLeft 
          className="stock-app-detail-header__left__item"
          onClick={() => handleBack()}
        />
      </div>

      <div className="stock-app-detail-header__right">
        <LuAlarmClock className="stock-app-detail-header__right__item" />
        <FiStar className="stock-app-detail-header__right__item item-star" />
      </div>
    </div>
  );
};

export default Header;
