import React from "react";
import useCalculateForm from "./hooks/useCalculateForm";
import CalculatorForm from "../../components/forms/calculator-form";

const CreditPage = () => {
    const { form, onValuesChange, optionsBank, monthlyPayment } = useCalculateForm();
    return (
        <div>
            <CalculatorForm
                form={ form }
                onValuesChange={ onValuesChange }
                optionsBank={ optionsBank }
            />
            <div style={ { marginTop: 24 } }>
                Monthly payment: { monthlyPayment }
            </div>
        </div>
    );
};

export default CreditPage;
