import { Button, Modal } from "antd";
import React, { useCallback, useState } from "react";

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
            <Modal visible={ isOpenModal } onCancel={ onCloseModal }>
                test
            </Modal>
        </div>
    );
};

export default BankPage;
