import { formatRealNumer } from "@/app/utils";
import React from "react";

interface IProps {
  t: any;
  companyDetail: ICompanyDetail | null;
}

const ContentHeader = (props: IProps) => {
  const { t, companyDetail } = props;

  return (
    <div className="content-header">
      <div className="content-header__title">
        {t("common.label.keyStatistics")}
      </div>

      <div className="content-header__detail">
        <div className="content-header__detail__title">
          {t("common.label.netIncome")}
        </div>

        <div className="content-header__detail__item">
          <div className="content-header__detail__item__left">
            {t("common.label.marketCap")}
          </div>
          <div className="content-header__detail__item__right">{`${formatRealNumer(
            companyDetail?.keyStatistics?.marketCap
          )} B`}</div>
        </div>

        <div className="content-header__detail__item">
          <div className="content-header__detail__item__left">
            {t("common.label.currentShareOutstanding")}
          </div>
          <div className="content-header__detail__item__right">{`${formatRealNumer(
            companyDetail?.keyStatistics?.currentShare
          )} B`}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
