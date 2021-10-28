import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";

const useBank = () => {
    const [data, setData] = useState([]);
    const [isOpenModal, setOpenModal] = useState(false);
    const [form] = Form.useForm();

    const onOpenModal = useCallback(() => {
        setOpenModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        form.resetFields();
        setOpenModal(false);
    }, [form]);

    const onRemove = useCallback((id) => {
        setData(prevData => {
            const newData = prevData.filter((bankItem: any) => bankItem.key !== id);
            localStorage.setItem("banks", JSON.stringify(newData));
            return newData;
        });
    }, []);

    const onSave = useCallback((values) => {
        // @ts-ignore
        setData(prevData => {
            const key = Date.now();
            const splitArray = [...prevData, { key, ... values }];
            localStorage.setItem("banks", JSON.stringify(splitArray));
            return splitArray;
        });

        form.resetFields();
        onCloseModal();
    }, [form, onCloseModal]);


    useEffect(() => {
        const banksFromLocalStorage = localStorage.getItem("banks");
        if (banksFromLocalStorage) {
            const parseBankFromLocalStorage = JSON.parse(banksFromLocalStorage);
            setData(parseBankFromLocalStorage);
        }
    }, []);

    return { data, form, onSave, onRemove, isOpenModal, onOpenModal, onCloseModal };
};

export default useBank;
