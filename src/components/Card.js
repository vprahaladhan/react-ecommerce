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

    {/* <Card.Footer>
      <Button 
        disabled={cart.find(({ book_sku }) => book_sku === book.id)}
        onClick={() => addToCart({
          book_sku: book.id,
          title: book.title,
          quantity: 1,
          price: book.price ? book.price : 'NA'
        })}
      >
        Add to cart
      </Button>
    </Card.Footer> */}
  </Card>
);

export default BookCard;