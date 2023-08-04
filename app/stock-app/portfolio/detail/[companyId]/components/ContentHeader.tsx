import {
  formatRealNumer,
  formatValuePercent,
  getColorValue,
} from "@/app/utils";
import Image from "next/image";
import React from "react";

interface IProps {
  portfolioDetail: IPortfolioDetail | null;
}

const ContentHeader = (props: IProps) => {
  const { portfolioDetail } = props;

  return (
    <div className="content-header">
      <div className="item__left">
        <div className="item__left__logo">
          <Image src={portfolioDetail?.logo} alt="" />
        </div>

        <div className="item__left__text">
          <div className="item__left__text__name">{portfolioDetail?.name}</div>
          <div className="item__left__text__description">
            {portfolioDetail?.description}
          </div>
        </div>
      </div>

      <div className="item__right">
        <div className="item__right__value1">
          {formatRealNumer(portfolioDetail?.value1)}
        </div>
        <div
          className={`item__right__value2 ${getColorValue(
            portfolioDetail?.value2
          )}`}
        >
          {formatValuePercent(
            portfolioDetail?.value2 ?? 0,
            portfolioDetail?.percent ?? 0
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
