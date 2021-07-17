import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { Pagination } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';

import Card from '../components/Card';
import SearchProducts from '../components/SearchProducts';

const ETSY_URL = process.env.REACT_APP_ETSY_API_NO_CORS_URL;
const API_KEY = process.env.REACT_APP_ETSY_API_KEY;
const MAX_RESULTS=process.env.REACT_APP_MAX_RESULTS;
const PRODUCTS_PER_PAGE = 8;

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

const Cards = ({ cart, addToCart }) => { 
  // const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState({});
  const [search, setSearch] = React.useState();
  const [products, setProducts] = React.useState();
  const [productsCount, setProductsCount] = React.useState({});

  const gotoPage = pageNo => {
    console.log('Page no >> ', pageNo)
    // setPage(pageNo);
    queryProducts(pageNo);
  }

  const queryProducts = async (pageNo = 1, method = 'GET', body = null) => {
    const etsyURL = `${ETSY_URL}/listings/active?api_key=${API_KEY}&limit=${PRODUCTS_PER_PAGE}`
    const response = await fetch('/post', {
      method: 'POST',
      body: JSON.stringify({
        url: `${etsyURL}&includes=MainImage&keywords=${search}&page=${pageNo}`
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const { count, results, pagination } = await response.json();
    setProducts(results);
    setProductsCount(count);
    setPages(pagination);
  };

  return (
    <div>
      <GlobalCss />
      <SearchProducts search={search} searchProducts={queryProducts} setSearch={value => setSearch(value)} />
      {products && products.length !== 0 ? 
        <div>
          <Pagination 
            count={Math.ceil(productsCount / PRODUCTS_PER_PAGE)} 
            shape="rounded" 
            onChange={(event, page) => gotoPage(page)} />
          <CardDeck>
            {products.map(product => (
              <Card key={product.listing_id} listing={product} addToCart={addToCart} cart={cart} />
            ))}
          </CardDeck>
        </div> : <div><h2>Sorry, no products found!</h2></div>
      }
    </div>
  );
}

export default Cards;