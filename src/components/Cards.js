import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { Pagination } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';

import Card from './Card';

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

const Cards = ({ products, cart, addToCart }) => { 
  const [page, setPage] = React.useState(1);

  return (
    <div>
      <GlobalCss />
      <Pagination count={products.length / 4} shape="rounded" onChange={(event, page) => setPage(page)} />
      <CardDeck>
        {products.slice((page - 1) * 4, page * 4).map(product => {
            return <Card key={product.id} product={product} addToCart={addToCart} cart={cart} />
          })
        }
      </CardDeck>
    </div>
  );
}

export default Cards;