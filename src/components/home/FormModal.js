import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ExerciseForm from './Form';

const FormModal = ({fetchData}) => {
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //submit form button
    

    return(
        <div>
            <Button onClick={handleShow}>Add Exercise</Button>
            <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Exercise Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ExerciseForm closeModal= { handleClose } fetchData={fetchData} />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}

export default FormModal;