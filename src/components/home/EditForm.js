import { React, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditForm = ( {id} ) => {
    const [showModal, setShow] = useState(false);
    const [ username, setUserName ] = useState('');
    const [ activityType, setActivity ] = useState('');
    const [ duration, setDuration ] = useState('');
    const [ date, setDate ] = useState('');
    const [ description, setDescription ] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = () => {
        handleShow();
        singleGetCall(id);
    }


    // get single info call
    const singleGetCall = async (id) => {
        try{
            const response = await axios.get(`http://localhost:9000/info/get-single/${id}`)
            if (response.status === 200){
                console.log(response.data);
                 // Format the date here to match "yyyy-MM-dd"
                const apiDate = new Date(response.data.date);
                const formattedDate = apiDate.toISOString().split('T')[0];

                setUserName(response.data.username);
                setDuration(response.data.duration);
                setDescription(response.data.description);
                setDate(formattedDate);
                setActivity(response.data.activityType);
            }
        }
        catch (err) {
            console.log('singleGetCall is not working.');
        }
    }

    return (
        <div>
            <Button onClick={handleEdit} >Edit</Button>
            <Modal show={showModal} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Exercise Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type='text'
                                value={username}
                                onChange={ (e) => {setUserName(e.target.value)} } 
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Date</Form.Label>
                            <Form.Control 
                                type='date'
                                value={date} 
                                onChange={ (e) => {setDate(e.target.value)} }
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Type</Form.Label>
                            <Form.Control 
                                as='select'
                                value={activityType} 
                                onChange={ (e) => {setActivity(e.target.value)} }
                            >
                                <option selected>Choose an Activity</option>
                                <option value="Run" >Run</option>
                                <option value="Bicycle-ride" >Bicycle-ride</option>
                                <option value="Swim" >Swim</option>
                                <option value="Walk" >Walk</option>
                                <option value="Hike" >Hike</option>
                            </Form.Control> 
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Duration</Form.Label>
                            <Form.Control 
                                type='number'
                                value={duration} 
                                onChange={ (e) => {setDuration(e.target.value)} }
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as='textarea' 
                                rows={3}
                                value={description}
                                onChange={ (e) => {setDescription(e.target.value)} }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose} >Close</Button>
                    <Button variant='primary'>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditForm;
