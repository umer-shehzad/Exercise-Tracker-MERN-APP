import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';

const ExerciseCard = ({ name, description, activityType, duration, date, id, handleDelete }) => {
  
  return (
    <div className='d-inline-flex flex-row p-3 bd-highlight'>
        <CardGroup>
        <Card border='secondary' style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="" alt="image" /> */}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                Activity type: {activityType}
                </Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Duration: {duration} minutes</Card.Text>
                <Card.Text>Date: {date}</Card.Text>
                <Button variant="primary">Edit</Button>{' '}
                <Button 
                onClick={() => {handleDelete(id)}}
                variant="danger">Delete</Button>
            </Card.Body>
        </Card>
        </CardGroup>
    </div>
    
  );
};

export default ExerciseCard;