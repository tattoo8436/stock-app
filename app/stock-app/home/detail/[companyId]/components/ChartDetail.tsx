import {
  formatRealNumer,
  formatValuePercent,
  getColorValue,
} from "@utils/index";
import { Col, Row } from "antd";
import React from "react";

interface IProps {
  companyDetail: ICompanyDetail | null;
}

const ChartDetail = (props: IProps) => {
  const { companyDetail } = props;

  return (
    <div className="chart-detail">
      <div className="chart-detail__left">
        <div className="chart-detail__left__value1">
          {formatRealNumer(companyDetail?.value1)}
        </div>

        <div
          className={`chart-detail__left__value2 ${getColorValue(
            companyDetail?.value2
          )}`}
        >
          {formatValuePercent(
            companyDetail?.value2 ?? 0,
            companyDetail?.percent ?? 0
          )}
        </div>
      </div>

      <Row className="chart-detail__right" justify="end">
        {companyDetail?.tags?.map((i, index) => {
          return (
            <Col key={index} className="chart-detail__right__item">
              <div className="item-wrapper">{i}</div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ChartDetail;
