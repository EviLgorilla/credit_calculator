import { Space, Table } from "antd";
import React from "react";



const BankTable = () => {
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
                    <span>Delete: { record.key }</span>
                </Space>
            )
        }
    ];

    const data = [
        {
            key: "1",
            bankName: "PRIVAT BANK",
            rate: 32,
            max: 3200000,
            minPayment: 120000,
            period: 36
        }
    ];

    return <Table columns={ columns } dataSource={ data } />;
};

export default BankTable;
