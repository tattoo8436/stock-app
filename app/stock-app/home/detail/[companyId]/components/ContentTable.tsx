import { Table } from "antd";
import { ColumnType, ColumnsType } from "antd/es/table";
import React from "react";

interface IProps {
  t: any;
  companyDetail: ICompanyDetail | null;
}

interface IDataType {
  id: number;
  2022: number | null;
  2021: number | null;
  2020: number | null;
}

const ContentTable = (props: IProps) => {
  const { t, companyDetail } = props;

  const dataSource: ITableCompany[] | undefined =
    companyDetail?.keyStatistics?.dataTable;

  const columns: ColumnsType<IDataType> = [
    {
      title: t("fieldName.period"),
      dataIndex: "id",
      key: "id",
      className: "text-bold align-center",
      render: (e) => {
        return `Q${e}`;
      },
    },
    {
      title: "2022",
      dataIndex: "2022",
      key: "2022",
      className: "align-right",
      render: (e) => (e ? `${e} B` : "-"),
    },
    {
      title: "2021",
      dataIndex: "2021",
      key: "2021",
      className: "align-right",
      render: (e) => (e ? `${e} B` : "-"),
    },
    {
      title: "2020",
      dataIndex: "2020",
      key: "2020",
      className: "align-right",
      render: (e) => (e ? `${e} B` : "-"),
    },
  ];

  return (
    <div className="content-table">
      <Table
        columns={columns}
        dataSource={dataSource ?? []}
        bordered
        pagination={false}
      />
    </div>
  );
};

export default ContentTable;
