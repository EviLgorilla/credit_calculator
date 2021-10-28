import { Button, Modal } from "antd";
import React, { useCallback, useState } from "react";
import useBank from "./hooks/useBank";
import { BankTable } from "../../components/bank-table";
import CreateBankForm from "../../components/forms/create-bank-form";

const BankPage = () => {
    const { data, form, onSave, onRemove, isOpenModal, onOpenModal, onCloseModal } = useBank();

    return (
        <div>
            <Button type="primary" onClick={ onOpenModal }>Add bank</Button>
            <Modal 
                visible={ isOpenModal } 
                title="Create bank" 
                onCancel={ onCloseModal } 
                footer={ null }
            >
                <CreateBankForm
                    onCancel={ onCloseModal }
                    onSubmit={ onSave }
                    form={ form }
                />
            </Modal>
            <BankTable onRemove={ onRemove } data={ data } />
        </div>
    );
};

export default BankPage;
