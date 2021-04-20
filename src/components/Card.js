import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Text from './ExpandableText';

const ProductCard = ({ product, addToCart, cart }) => (
  <Card>
    <Link to={`/react-ecommerce/products/${product.id}`}> 
      <Card.Img variant="top" src={product.image} alt={product.title} className='card-img' />
    </Link>
    <Card.Body>
      <Link to={`/react-ecommerce/products/${product.id}`}>
        <Card.Title>{product.title}</Card.Title>
      </Link>
      <Text maxHeight={95}>{product.description}</Text>
      <Card.Text>AUD {product.price}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button 
        disabled={cart.find(({ product_sku }) => product_sku === product.id)}
        onClick={() => addToCart({
          product_sku: product.id,
          title: product.title,
          quantity: 1,
          price: product.price
        })}
      >
        Add to cart
      </Button>
    </Card.Footer>
  </Card>
);

export default ProductCard;