import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { CardDeck, Nav, Navbar } from 'react-bootstrap';

import Card from './components/Card';
import Cart from './components/Cart';
import Badge from './components/CartBadge';

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  
  useEffect(() => {
    queryCart().then(cart => setCart(cart));
    queryProducts().then(products => setProducts(products));
  }, []);

  const Cards = () => (
    <CardDeck>
      {products.map(product => <Card key={product.id} product={product} addToCart={addToCart} cart={cart}/> )}
    </CardDeck>
  );

  const queryCart = (method='GET', body=null) => {
    console.log('Req body >> ', body);
    return fetch(`${process.env.REACT_APP_LOCAL_URL}/cart`, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }      
    }).then(response => response.json())
  };

  const queryProducts = (method='GET', body=null) => (
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
    console.log('Product to add >> ', product);
    queryCart('POST', product);
    setCart(cart.concat(product));
  }

  if (!products) {
    return null;
  }

  return (
    <div>
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/cart"><Badge noOfItems={cart.length} /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route path="/" render={() => <div><h1>Welcome Home!</h1></div>} exact />
      <Route path="/products" render={() => <Cards />} exact />
      <Route path="/products/:id" render={({ match }) => <div><h1>Product ID: {match.params.id}</h1></div>} />
      <Route path="/cart" render={() => <Cart cart={cart} />} />
    </Switch>
    </div>
  );
}

export default App;