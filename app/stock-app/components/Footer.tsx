"use client";

import React from "react";
import { FiFileText, FiHome, FiStar, FiUser } from "react-icons/fi";
import { LuPieChart } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Link from "next/link";

const Footer = () => {
  const pathName: string = usePathname();
  const router: AppRouterInstance = useRouter();

  const handleChangePage = (link: string) => {
    router.push(link);
  };

  console.log(pathName);

  return (
    <div className="stock-app-footer">
      <Link
        href="/stock-app/home"
        className={classNames("stock-app-footer__item", {
          active: pathName === "/stock-app/home",
        })}
      >
        <FiHome />
      </Link>

      <Link
        href="/stock-app/watchlist"
        className={classNames("stock-app-footer__item", {
          active: pathName === "/stock-app/watchlist",
        })}
      >
        <FiStar />
      </Link>

      <Link
        href="/stock-app/portfolio"
        className={classNames("stock-app-footer__item", {
          active: pathName === "/stock-app/portfolio",
        })}
        onClick={() => handleChangePage("/stock-app/portfolio")}
      >
        <LuPieChart />
      </Link>

      <Link
        href="/stock-app/transaction"
        className={classNames("stock-app-footer__item", {
          active: pathName === "/stock-app/transaction",
        })}
        onClick={() => handleChangePage("/stock-app/transaction")}
      >
        <FiFileText />
      </Link>

      <Link
        href="/stock-app/profile"
        className={classNames("stock-app-footer__item", {
          active: pathName === "/stock-app/profile",
        })}
        onClick={() => handleChangePage("/stock-app/profile")}
      >
        <FiUser />
      </Link>
    </div>
  );
};

export default Footer;
