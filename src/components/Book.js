import React from 'react';
import { Card } from 'react-bootstrap';

const Book = ({ book }) => (
  <Card style={{textAlign: 'center'}}>
    <Card.Img variant="top" src={book.image} alt={book.title} className='card-img-full' />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>{book.description}</Card.Text>
      <Card.Text>AUD {book.price}</Card.Text>
    </Card.Body>
  </Card>
);

export default Book;