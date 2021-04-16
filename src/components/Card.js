import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Text from './ExpendableText';

const ProductCard = ({ product }) => (
  <Card>
    <Link to={`/products/${product.id}`}> 
      <Card.Img variant="top" src={product.image} alt={product.title} className='card-img' />
    </Link>
    <Card.Body>
      <Link to={`/products/${product.id}`}>
        <Card.Title>{product.title}</Card.Title>
      </Link>
      <Text maxHeight={95}>{product.description}</Text>
      <Card.Text>AUD {product.price}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button>Add to cart</Button>
    </Card.Footer>
  </Card>
);

export default ProductCard;