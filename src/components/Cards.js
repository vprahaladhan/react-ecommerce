import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { Pagination } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';

import Card from './Card';
import SearchBooks from './SearchBooks';

const MAX_RESULTS=process.env.REACT_APP_MAX_RESULTS;

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    '.MuiPagination-ul': {
      justifyContent: 'center',
      marginTop: '20px'
    },
  },
})(() => null);

const Cards = ({ books, cart, totalBooks, addToCart, queryBooks }) => { 
  const [page, setPage] = React.useState(1);

  return (
    <div>
      <GlobalCss />
      <SearchBooks queryBooks={queryBooks} />
      {console.log('Total Books >> ', totalBooks)}
      <Pagination count={Math.ceil(totalBooks / MAX_RESULTS)} shape="rounded" onChange={(event, page) => setPage(page)} />
      <CardDeck>
        {books.map(book => {
          return <Card key={book.id} book={book.volumeInfo} addToCart={addToCart} cart={cart} />
        })}
      </CardDeck>
    </div>
  );
}

export default Cards;