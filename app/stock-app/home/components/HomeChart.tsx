import React from "react";

interface IProps {
  t: any;
}

const HomeChart = (props: IProps) => {
  return (
    <div className="home-chart">
      <div className="home-chart__header">
        <div className="home-chart__header__title">IHSG</div>
        <div className="home-chart__header__content">7.056,04</div>
        <div className="home-chart__header__footer">-35,72 (-0,50%)</div>
      </div>

      <div className="home-chart__content"></div>
    </div>
  );
};

export default HomeChart;
