"use client";

import React from "react";
import { FiFileText, FiHome, FiStar, FiUser } from "react-icons/fi";
import { LuPieChart } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const Footer = () => {
  const pathName: string = usePathname();
  const router: AppRouterInstance = useRouter();

  const handleChangePage = (link: string) => {
    router.push(link);
  };

  console.log(pathName);

  return (
    <div className="stock-app-footer">
      <div
        className={classNames("stock-app-footer__item", {
          active: pathName === "/stock-app/home",
        })}
        onClick={() => handleChangePage("/stock-app/home")}
      >
        <FiHome />
      </div>
      <div
        className={classNames("stock-app-footer__item", {
          active: pathName === "/stock-app/watchlist",
        })}
        onClick={() => handleChangePage("/stock-app/watchlist")}
      >
        <FiStar />
      </div>
      <div
        className={classNames("stock-app-footer__item", {
          active: pathName === "/stock-app/portfolio",
        })}
        onClick={() => handleChangePage("/stock-app/portfolio")}
      >
        <LuPieChart />
      </div>
      <div
        className={classNames("stock-app-footer__item", {
          active: pathName === "/stock-app/transaction",
        })}
        onClick={() => handleChangePage("/stock-app/transaction")}
      >
        <FiFileText />
      </div>
      <div className="stock-app-footer__item">
        <FiUser />
      </div>
    </div>
  );
};

export default Footer;
