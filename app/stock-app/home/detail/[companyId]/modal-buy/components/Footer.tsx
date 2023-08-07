import { formatIntegerNumer } from "@/app/utils";
import { Table } from "antd";
import { ColumnType, ColumnsType } from "antd/es/table";
import React from "react";

interface IProps {
  t: any;
  companyBuySell: ICompanyBuySell | null;
}

interface IDataType {
  lot1: number | null;
  bid: number | null;
  ask: number | null;
  lot2: number | null;
}

const Footer = (props: IProps) => {
  const { t, companyBuySell } = props;

  const dataSource: ICompanyBuySellTable[] | undefined =
    companyBuySell?.dataTable;

  const columns: ColumnsType<IDataType> = [
    {
      title: String(t("fieldName.lot")).toLocaleUpperCase(),
      dataIndex: "lot1",
      key: "lot1",
      className: "align-center",
      render: (e) => formatIntegerNumer(e),
    },
    {
      title: String(t("fieldName.bid")).toLocaleUpperCase(),
      dataIndex: "bid",
      key: "bid",
      className: "align-center",
      render: (e) => formatIntegerNumer(e),
    },
    {
      title: String(t("fieldName.ask")).toLocaleUpperCase(),
      dataIndex: "ask",
      key: "ask",
      className: "align-center",
      render: (e) => formatIntegerNumer(e),
    },
    {
      title: String(t("fieldName.lot")).toLocaleUpperCase(),
      dataIndex: "lot2",
      key: "lot2",
      className: "align-center",
      render: (e) => formatIntegerNumer(e),
    },
  ];

  return (
    <div className="footer">
      <Table
        columns={columns}
        dataSource={dataSource ?? []}
        bordered
        pagination={false}
      />
    </div>
  );
};

export default Footer;
