import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Button, Card } from 'react-bootstrap';

import Text from './ExpandableText';

const BookCard = ({ listing, addToCart, cart }) => (
  <Card>
    <Link to={`/listings/${listing.listing_id}`}>
      {
        listing.MainImage && listing.MainImage.url_170x135 && 
        <Image variant="top" src={listing.MainImage.url_170x135} alt={listing.title} fluid /> 
      }
    </Link>
    
    <Card.Body>
      <Link to={`/listings/${listing.listing_id}`}>
        <Card.Title>{listing.title}</Card.Title>
      </Link>
      <Card.Text>{listing.currency_code} {listing.price}</Card.Text>
    </Card.Body>

    <Card.Footer>
      <Button 
        disabled={cart.find(({ product_id }) => product_id === listing.listing_id)}
        onClick={() => addToCart({
          product_id: listing.listing_id,
          title: listing.title,
          quantity: 1,
          price: listing.price ? listing.price : 'NA'
        })}
      >
        Add to cart
      </Button>
    </Card.Footer>
  </Card>
);

export default BookCard;