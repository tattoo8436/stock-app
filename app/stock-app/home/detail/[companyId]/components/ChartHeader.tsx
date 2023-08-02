import Image from "next/image";
import React from "react";

interface IProps {
  companyDetail: ICompanyDetail | null;
}
const ChartHeader = (props: IProps) => {
  const { companyDetail } = props;

  return (
    <div className="chart-header">
      <div className="chart-header__icon">
        <Image src={companyDetail?.logo ?? ""} alt="" />
      </div>

      <div className="chart-header__text">
        <div className="chart-header__text__name">{companyDetail?.name}</div>

        <div className="chart-header__text__description">
          {companyDetail?.description}
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
