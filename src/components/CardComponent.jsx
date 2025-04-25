import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = ({ title, text, imageUrl }) => {
  return (
    <Card style={{ width: '18rem' }} className="m-3 shadow">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
