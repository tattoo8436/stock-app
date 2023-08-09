import React from "react";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

interface IProps {
  t: TFunction<"translation", undefined>;
}

const Header = (props: IProps) => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <Link href="/stock-app/profile" className="header__icon">
        <FiChevronLeft />
      </Link>

      <div className="header__text">{t("page.deposit")}</div>
    </div>
  );
};

export default Header;
