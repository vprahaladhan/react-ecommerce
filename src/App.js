import React, { useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';
import Cards from './components/Cards';
import Product from './components/Product';
import Badge from './components/CartBadge';

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);

  useEffect(() => {
    queryCart().then(cart => setCart(cart));
    queryProducts().then(products => setProducts(products));
  }, []);

  const queryCart = (method = 'GET', body = null, id) => (
    fetch(`${process.env.REACT_APP_LOCAL_URL}/cart/${id ? id : ''}`, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  );

  const queryProducts = (method = 'GET', body = null) => (
    fetch(`${process.env.REACT_APP_API_URL}/products`, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
  )

  const addToCart = (product) => {
    queryCart('POST', product).then(product => setCart(cart.concat(product)));
  }

  const updateCart = (quantity, product) => {
    let newCart = [...cart];
    const index = newCart.findIndex(prod => prod.id === product.id);
    if (quantity !== 0) {
      newCart[index].quantity = quantity;
      queryCart('PATCH', { quantity }, product.id).then(() => setCart(newCart));
    } else {
      newCart.splice(index, 1);
      queryCart('DELETE', null, product.id).then(() => setCart(newCart));
    };
  };

  const clearCart = () => {
    Promise.all(cart.map(product => queryCart('DELETE', null, product.id)))
      .then(() => setCart([]));
  }

  if (!products) {
    return null;
  }

  return (
    <div>
      <div class="ui visible left demo vertical inverted sidebar labeled icon menu">
        <Link class="item" as={Link} to="/">
          <i class="home icon"></i>
          Home
        </Link>
        <Link class="item" as={Link} to="/products">
          <i class="block layout icon"></i>
          Products
        </Link>
        <Link class="item" as={Link} to="/cart">
          <Badge noOfItems={cart.length} />
          Cart
        </Link>
      </div>

      <div style={{marginLeft: '90px'}}>
        <Switch>
          <Route path="/react-ecommerce" exact render={() => <Home />} />
          <Route path="/react-ecommerce/products" exact render={() => <Cards products={products} cart={cart} addToCart={addToCart} />} />
          <Route
            path="/react-ecommerce/products/:id"
            render={({ match }) => <Product product={products.find(prod => prod.id === parseInt(match.params.id))} />}
          />
          <Route path="/react-ecommerce/cart" render={() => <Cart cart={cart} updateCart={updateCart} clearCart={clearCart} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;