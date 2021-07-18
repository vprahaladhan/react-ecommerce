import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from './utils/Loader';
import Home from './components/Home';
import Cart from './components/Cart';
import Cards from './containers/Cards';
import Login from './components/Login';
import Logout from './components/Logout';
import Orders from './containers/Orders';
import Product from './components/Product';
import SideMenubar from './components/Sidebar';
import findProductInListings from './utils/Utils';
import PrivateRoute from './components/PrivateRoute';

const ETSY_URL = process.env.REACT_APP_ETSY_API_NO_CORS_URL;
const API_KEY = process.env.REACT_APP_ETSY_API_KEY;
const MAX_RESULTS = process.env.REACT_APP_MAX_RESULTS

const App = () => {
  const [user, setUser] = React.useState();
  const [cart, setCart] = React.useState([]);
  const [listings, setListings] = React.useState({});
  const [paginationItems, setPaginationItems] = React.useState({});
  const [listingsCount, setListingsCount] = React.useState({});

  useEffect(() => {
    (async function () {
      await queryProducts(825);
      await queryProducts(374);
      setCart(await queryCart());
    })();
  }, []);

  const queryCart = async (method = 'GET', body = null, id = '') => {
    const response = await fetch(`/json-server/cart/${id}`, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*'
      }
    });
    const results = await response.json();
    return results;
  };

  const queryProducts = async (category = '', keywords = '', method = 'GET', body = null) => {
    const etsyURL = `${ETSY_URL}/listings/active?api_key=${API_KEY}&limit=${MAX_RESULTS}`
    const response = await fetch('/post', {
      method: 'POST',
      body: JSON.stringify({
        url: `${etsyURL}&taxonomy_id=${category}&keywords=${keywords}&includes=MainImage`
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const { count, results, pagination } = await response.json();
    setListings(prevState => ({ ...prevState, [category]: results }));
    setListingsCount(prevState => ({ ...prevState, [category]: count }));
    setPaginationItems(prevState => ({ ...prevState, [category]: pagination }));
  };

  const addToCart = product => queryCart('POST', product).then(product => setCart(cart.concat(product)));

  const updateCart = (quantity, product) => {
    let newCart = [...cart];
    const index = newCart.findIndex(prod => prod.product_id === product.product_id);
    if (quantity !== 0) {
      newCart[index].quantity = quantity;
      queryCart('PATCH', { quantity }, product.id).then(() => setCart(newCart));
    } else {
      newCart.splice(index, 1);
      queryCart('DELETE', null, product.id).then(() => setCart(newCart));
    };
  };

  const clearCart = () => {
    Promise.all(cart.map(({id}) => queryCart('DELETE', null, id)))
      .then(() => setCart([]));
  }

  const createOrder = async (order) => {
    await fetch(`${process.env.REACT_APP_LOCAL_URL}/orders`, {
      method: 'POST',
      body: order ? JSON.stringify(order) : null,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });
  }

  return (
    <div>
      <SideMenubar user={user} cartItemsCount={cart.length} />

      {
        Object.keys(listings).length !== 0 ? 
          <div style={{ marginLeft: '125px' }}>
            <Switch>
              <Route path="/" exact render={() => <Home listings={listings} addToCart={addToCart} cart={cart} />} />
              <Route path="/login" render={() => <Login setUser={user => setUser(user)} />} />
              <Route path="/signup" render={() => <Login setUser={user => setUser(user)} />} />
              <Route path="/listings" exact render={() => (
                <Cards cart={cart} addToCart={addToCart} />
              )} />
              <Route
                path="/listings/:id"
                render={({ match }) => <Product listing={findProductInListings(listings, match.params.id)} />}
              />
              <Route path="/cart" render={() => (
                <Cart cart={cart} user={user} updateCart={updateCart} clearCart={clearCart} createOrder={createOrder}/>
              )} />
              <PrivateRoute path='/account' component={Orders} user={user} />
              <PrivateRoute path='/logout' component={Logout} user={user} setUser={setUser} />
            </Switch>
          </div> : <Loader />
      }
    </div>
  );
}

export default App;