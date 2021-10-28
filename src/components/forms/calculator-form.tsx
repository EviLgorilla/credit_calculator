import { Col, Form, InputNumber, Row, Select } from "antd";
import React, { FunctionComponent } from "react";

const normalizeNumberValue = (value: any) => {
    return value ? value.toString() : null;
};

type CalculateFormProps = {
    form: any,
    onValuesChange: (values: any) => void,
    optionsBank: any[],
}

const CalculatorForm: FunctionComponent<CalculateFormProps> = ({ form, onValuesChange, optionsBank }) => {

    return (
        <Form form={ form } layout="vertical" onValuesChange={ onValuesChange }>
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
                    >
                        <Select>
                            { optionsBank.map(bankItem => (
                                <Select.Option
                                    key={ bankItem.value }
                                    value={ bankItem.value }
                                    disabled={ bankItem.disabled }
                                >
                                    { bankItem.name }
                                </Select.Option>
                            )) }
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default CalculatorForm;
