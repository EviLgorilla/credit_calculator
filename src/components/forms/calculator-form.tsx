import { Col, Form, InputNumber, Row, Select } from "antd";
import React from "react";

const normalizeNumberValue = (value: any) => {
    return value ? value.toString() : null;
};

const CalculatorForm = () => {
    const [form] = Form.useForm();
    return (
        <Form form={ form } layout="vertical">
            <Row gutter={ [24, 24] }>
                <Col span={ 8 }>
                    <Form.Item
                        name="sum"
                        label="Credit sum"
                        rules={ [{ required: true, min: 0, max: 5000000 }] }
                        normalize={ normalizeNumberValue }
                    >
                        <InputNumber min={ 0 } max={ 5000000 } style={ { width: "100%" } } />
                    </Form.Item>
                </Col>
                <Col span={ 8 }>
                    <Form.Item
                        name="initialFee"
                        label="Initial fee"
                        rules={ [{ required: true, min: 0, max: 5000000 }] }
                        normalize={ normalizeNumberValue }
                    >
                        <InputNumber min={ 0 } max={ 5000000 } style={ { width: "100%" } } />
                    </Form.Item>
                </Col>
                <Col span={ 8 }>
                    <Form.Item
                        name="bank"
                        label="Bank"
                        rules={ [{ required: true, min: 0, max: 5000000 }] }
                        normalize={ normalizeNumberValue }
                    >
                        <Select>
                            <Select.Option value={'privat'}>PRIVATBANK</Select.Option>
                            <Select.Option value={'mono'} disabled>MONOBANK</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default CalculatorForm;
