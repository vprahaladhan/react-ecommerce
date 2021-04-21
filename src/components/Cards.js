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
  const [search, setSearch] = React.useState();

  const gotoPage = page => {
    queryBooks(search, (page - 1)  * MAX_RESULTS);
    setPage(page);
  }

  return (
    <div>
      <GlobalCss />
      <SearchBooks search={search} searchBooks={() => queryBooks(search)} setSearch={value => setSearch(value)} />
      {(search && books.length !== 0) ? 
        <div>
          <Pagination count={Math.ceil(totalBooks / MAX_RESULTS)} shape="rounded" onChange={(event, page) => gotoPage(page)} />
          <CardDeck>
            {books.map(book => {
              return <Card key={book.id} book={{...book.volumeInfo, id: book.id}} addToCart={addToCart} cart={cart} />
            })}
          </CardDeck>
        </div> : <div><h2>No books found!</h2></div>
      }
    </div>
  );
}

export default Cards;