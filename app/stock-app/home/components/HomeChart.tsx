import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ApexCharts from "react-apexcharts";

interface IProps {
  t: any;
  listCharts: IHomeChart[];
}

const HomeChart = (props: IProps) => {
  const { t, listCharts } = props;

  const series: ApexAxisChartSeries = [
    {
      name: "Series 1",
      data: [
        [1609459200000, 31],
        [1609545600000, 40],
        [1609632000000, 28],
        [1609718400000, 51],
      ],
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
  };

  return (
    <div className="home-chart">
      <div className="home-chart__header">
        <div className="home-chart__header__title">IHSG</div>
        <div className="home-chart__header__content">7.056,04</div>
        <div className="home-chart__header__footer">-35,72 (-0,50%)</div>
      </div>

      <div className="home-chart__content">
        <ApexCharts
          type="area"
          options={options}
          series={series}
          height={140}
        />
      </div>
    </div>
  );
};

export default HomeChart;
