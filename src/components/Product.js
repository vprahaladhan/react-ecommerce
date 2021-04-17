import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => (
  <Card style={{textAlign: 'center'}}>
    <Card.Img variant="top" src={product.image} alt={product.title} className='card-img-full' />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
      <Card.Text>AUD {product.price}</Card.Text>
    </Card.Body>
  </Card>
);

export default Product;