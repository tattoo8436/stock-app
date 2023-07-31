import {
  formatRealNumer,
  formatValuePercent,
  getColorValue,
} from "@utils/index";
import { ApexOptions } from "apexcharts";
import classNames from "classnames";
import dynamic from "next/dynamic";
import React, { useState } from "react";
//import ApexCharts from "react-apexcharts";
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface IProps {
  t: any;
  dataChart: number[][];
  chartDetail: IHomeChartDetail | null;
}

const HomeChart = (props: IProps) => {
  const { t, dataChart, chartDetail } = props;

  const series: ApexAxisChartSeries = [
    {
      name: "Series 1",
      data: dataChart,
      color: "#E0144C",
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
    },
  };

  return (
    <div className="home-chart">
      <div className="home-chart__header">
        <div className="home-chart__header__title">
          {chartDetail?.name ?? ""}
        </div>
        <div className="home-chart__header__content">
          {formatRealNumer(chartDetail?.value1)}
        </div>
        <div
          className={`home-chart__header__footer ${getColorValue(
            chartDetail?.value2
          )}`}
        >
          {chartDetail
            ? formatValuePercent(chartDetail?.value2, chartDetail?.percent)
            : ""}
        </div>
      </div>

      <div className="home-chart__content" id="home-chart-content">
        <ApexCharts
          type="area"
          options={options}
          series={series}
          height={140}
        />
      </div>

      <div className="home-chart__footer">
        <div className="home-chart__footer__left">
          <div className="home-chart__footer__left__item">
            <div className="home-chart__footer__left__item__label">
              {t("fieldName.open")}
            </div>

            <div className="home-chart__footer__left__item__value negative">
              {formatRealNumer(chartDetail?.open)}
            </div>
          </div>

          <div className="home-chart__footer__left__item">
            <div className="home-chart__footer__left__item__label">
              {t("fieldName.high")}
            </div>

            <div className="home-chart__footer__left__item__value positive">
              {formatRealNumer(chartDetail?.high)}
            </div>
          </div>

          <div className="home-chart__footer__left__item">
            <div className="home-chart__footer__left__item__label">
              {t("fieldName.low")}
            </div>

            <div className="home-chart__footer__left__item__value negative">
              {formatRealNumer(chartDetail?.low)}
            </div>
          </div>
        </div>

        <div className="home-chart__footer__right">
          <div className="home-chart__footer__right__item">
            <div className="home-chart__footer__right__item__label">
              {t("fieldName.lot")}
            </div>

            <div className="home-chart__footer__right__item__value">
              {`${formatRealNumer(chartDetail?.lot)} M`}
            </div>
          </div>

          <div className="home-chart__footer__right__item">
            <div className="home-chart__footer__right__item__label">
              {t("fieldName.value")}
            </div>

            <div className="home-chart__footer__right__item__value">
              {`${formatRealNumer(chartDetail?.value)} T`}
            </div>
          </div>

          <div className="home-chart__footer__right__item">
            <div className="home-chart__footer__right__item__label">
              {t("fieldName.freq")}
            </div>

            <div className="home-chart__footer__right__item__value">
              {`${formatRealNumer(chartDetail?.freq)} M`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChart;
