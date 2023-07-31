import classNames from "classnames";
import React from "react";

interface IProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const ChartFooter = (props: IProps) => {
  const { search, setSearch } = props;

  const handleChangeSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <div className="chart-footer">
      <div
        className={classNames("chart-footer__item", {
          active: search === "1D",
        })}
        onClick={() => handleChangeSearch("1D")}
      >
        1D
      </div>
      <div className="divider"></div>
      <div
        className={classNames("chart-footer__item", {
          active: search === "5D",
        })}
        onClick={() => handleChangeSearch("5D")}
      >
        5D
      </div>
      <div className="divider"></div>
      <div
        className={classNames("chart-footer__item", {
          active: search === "1M",
        })}
        onClick={() => handleChangeSearch("1M")}
      >
        1M
      </div>
      <div className="divider"></div>
      <div
        className={classNames("chart-footer__item", {
          active: search === "6M",
        })}
        onClick={() => handleChangeSearch("6M")}
      >
        6M
      </div>
      <div className="divider"></div>
      <div
        className={classNames("chart-footer__item", {
          active: search === "YTD",
        })}
        onClick={() => handleChangeSearch("YTD")}
      >
        YTD
      </div>
      <div className="divider"></div>
      <div
        className={classNames("chart-footer__item", {
          active: search === "1Y",
        })}
        onClick={() => handleChangeSearch("1Y")}
      >
        1Y
      </div>
      <div className="divider"></div>
      <div
        className={classNames("chart-footer__item", {
          active: search === "3Y",
        })}
        onClick={() => handleChangeSearch("3Y")}
      >
        3Y
      </div>
      <div className="divider"></div>
      <div
        className={classNames("chart-footer__item", {
          active: search === "5Y",
        })}
        onClick={() => handleChangeSearch("5Y")}
      >
        5Y
      </div>
    </div>
  );
};

export default ChartFooter;
