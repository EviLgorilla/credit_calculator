import { Button, Form, Input, InputNumber, Slider } from "antd";
import React, { FunctionComponent, useCallback, useMemo } from "react";

type BankFormProps = {
    onCancel: () => void,
    onSubmit: (value: any) => void
}

const CREDIT_PERIODS = [12, 24, 32];

const normalizeNumberValue = (value: any) => {
    return value ? value.toString() : null;
};

const CreateBankForm: FunctionComponent<BankFormProps> = ({ onCancel, onSubmit }) => {
    const [form] = Form.useForm();

    const maxCreditPeriod = useMemo(() => {
        const index = Math.round(Math.random() * 3) - 1;
        return CREDIT_PERIODS[index];
    }, []);
    
    const onUpdatePeriodFormValue = useCallback(value => {
        form.setFieldsValue({
            period: value
        });
    }, [form]);

    return (
        <Form form={ form } layout="vertical" onFinish={ onSubmit }>
            <Form.Item
                name="bankName"
                label="Bank name"
                rules={ [{ required: true, min: 2, max: 32 }] }
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="rate"
                label="Rate"
                rules={ [{ required: true, min: 0, max: 50 }] }
                normalize={ normalizeNumberValue }
            >
                <InputNumber min={ 0 } max={ 50 } style={ { width: "100%" } } />
            </Form.Item>
            <Form.Item 
                name="max"
                label="Max sum"
                rules={ [{ required: true, min: 0, max: 5000000 }] }
                normalize={ normalizeNumberValue }
            >
                <InputNumber min={ 0 } max={ 5000000 } style={ { width: "100%" } } />
            </Form.Item>
            <Form.Item
                name="minPayment"
                label="Minimum down payment" 
                rules={ [{ required: true, min: 0, max: 100 }] }
                normalize={ normalizeNumberValue }
            >
                <InputNumber min={ 0 } max={ 100 } style={ { width: "100%" } } />
            </Form.Item>
            <Form.Item
                name="period"
                label="Max period"
                rules={ [{ required: true }] }
            >
                <Input style={ { display: "none" } } />
                <Slider max={ maxCreditPeriod } onChange={ onUpdatePeriodFormValue } />
            </Form.Item>
            <div style={ { display: "flex", justifyContent: "space-between" } }>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button onClick={ onCancel }>
                    Cancel
                </Button>
            </div>
        </Form>
    );
};

export default CreateBankForm;
