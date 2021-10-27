import { Button, Modal } from "antd";
import React, { useCallback, useState } from "react";
import { BankTable } from "../../components/bank-table";
import CreateBankForm from "../../components/forms/create-bank-form";

const BankPage = () => {
    const [isOpenModal, setOpenModal] = useState(false);

    const onOpenModal = useCallback(() => {
        setOpenModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setOpenModal(false);
    }, []);

    return (
        <div>
            <Button type="primary" onClick={ onOpenModal }>Add bank</Button>
            <Modal 
                visible={ isOpenModal } 
                title="Create bank" 
                onCancel={ onCloseModal } 
                footer={ null }
            >
                <CreateBankForm onCancel={ onCloseModal } onSubmit={ () => {} } />
            </Modal>
            <BankTable />
        </div>
    );
};

export default BankPage;
