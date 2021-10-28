import { Button, Space, Table } from "antd";
import React, { FunctionComponent } from "react";

type BankTableProps = {
    data: any[]
    onRemove: (id: any) => void
}

const BankTable: FunctionComponent<BankTableProps> = ({ onRemove, data }) => {
    const columns = [
        {
            title: "bankName",
            dataIndex: "bankName",
            key: "bankName"
        },
        {
            title: "Rate",
            dataIndex: "rate",
            key: "rate"
        },
        {
            title: "Max sum",
            dataIndex: "max",
            key: "max"
        },
        {
            title: "Minimum down payment",
            key: "minPayment",
            dataIndex: "minPayment"
        },
        {
            title: "Max period",
            key: "period",
            dataIndex: "period"
        },
        {
            title: "Action",
            key: "action",
            render: (text: any, record: any) => (
                <Space size="middle">
                    <Button onClick={ () => onRemove(record.key) }>Delete</Button>
                </Space>
            )
        }
    ];

    return <Table columns={ columns } dataSource={ data } />;
};

export default BankTable;
