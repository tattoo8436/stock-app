import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React from "react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IProps {
  t: any;
  dataChart: number[][];
}

const ChartContent = (props: IProps) => {
  const { t, dataChart } = props;

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
    <div className="chart-content">
      <ApexCharts type="area" options={options} series={series} height={140} />
    </div>
  );
};

export default ChartContent;
