import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Text from './ExpandableText';

const BookCard = ({ book, addToCart, cart }) => (
  <Card>
    <Link to={`/books/${book.id}`}>
      {console.log('Book > ', book)}
      {/* <Card.Img variant="top" src={book.imageLinks.smallThumbnail} alt={book.title} className='card-img' /> */}
      <img src={book.imageLinks.smallThumbnail} alt={book.title} />
    </Link>
    <Card.Body>
      <Link to={`/books/${book.id}`}>
        <Card.Title>{book.title}</Card.Title>
      </Link>
      {book.authors.map(author => <Card.Text key={author}>{author}, </Card.Text>)}
      <Text maxHeight={95}>{book.description}</Text>
    </Card.Body>
    <Card.Footer>
      <Button 
        disabled={cart.find(({ book_sku }) => book_sku === book.id)}
        onClick={() => addToCart({
          book_sku: book.id,
          title: book.title,
          quantity: 1,
          price: book.price
        })}
      >
        Add to cart
      </Button>
    </Card.Footer>
  </Card>
);

export default BookCard;