import { React, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ExerciseForm from './Form';

const EditForm = ( {id} ) => {
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow} >Edit</Button>
            <Modal show={showModal} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Exercise Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExerciseForm id={id} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditForm;
