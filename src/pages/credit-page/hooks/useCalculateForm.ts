import { Form } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";

interface IFormData {
    sum: string | null,
    initialFee: string | null,
    bank: number | null,
}

const useCalculateForm = () => {
    const [bankData, setBankData] = useState([]);
    const [formData, setFormData] = useState<IFormData>({
        sum: null,
        initialFee: null,
        bank: null
    });

    const [form] = Form.useForm();

    const onValuesChange = useCallback((value) => {
        setFormData(prevState => ({ ...prevState, ...value }));
    }, []);

    useEffect(() => {
        const banksFromLocalStorage = localStorage.getItem("banks");
        if (banksFromLocalStorage) {
            const parseBankFromLocalStorage = JSON.parse(banksFromLocalStorage);
            setBankData(parseBankFromLocalStorage);
        }
    }, []);

    const optionsBank = useMemo(() => {
        return bankData.map((bankItem: any) => {
            const percent = Number(formData.initialFee) / Number(formData.sum) * 100;
            return {
                name: bankItem.bankName,
                value: bankItem.key,
                disabled:  Number(bankItem.minPayment) >= percent
            };
        });
    }, [bankData, formData]);

    const monthlyPayment = useMemo(() => {
        if (formData.sum && formData.initialFee && formData.bank) {
            const bank: any = bankData.find((bankItem: any) => bankItem.key === formData.bank);
            const P = Number(formData.sum);
            const r = Number(bank.rate);
            const n = Number(bank.period);
            const part1 = P * (r/ 12) * Math.pow(1 + r/12, n);
            const part2 = Math.pow(1 + r/12, n) - 1;
            return (part1 / part2).toString();
        }
        return "Please filled all fields";
    }, [formData, bankData]);


    return { bankData, form, onValuesChange, optionsBank, monthlyPayment };
};

export default useCalculateForm;
