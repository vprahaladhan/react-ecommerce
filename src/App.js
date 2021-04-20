import React, { useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';
import Cards from './components/Cards';
import Book from './components/Book';
import Badge from './components/CartBadge';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const URL = process.env.REACT_APP_BOOKS_API_URL_WITH_KEY;
const MAX_RESULTS=process.env.REACT_APP_MAX_RESULTS

const App = () => {
  const [totalBooks, setTotalBooks] = React.useState(0); 
  const [books, setBooks] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [user, setUser] = React.useState();

  useEffect(() => {
    queryCart();
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

  const queryBooks = (search, method = 'GET', body = null) => (
    search && fetch(`${URL}&q=intitle:${search}&maxResults=${MAX_RESULTS}`, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(response => response.json())
      .then(({totalItems, items}) => {
        setBooks(items);
        setTotalBooks(totalItems);
      })
  );

  const addToCart = (book) => {
    queryCart('POST', book).then(book => setCart(cart.concat(book)));
  }

  const updateCart = (quantity, book) => {
    let newCart = [...cart];
    const index = newCart.findIndex(prod => prod.id === book.id);
    if (quantity !== 0) {
      newCart[index].quantity = quantity;
      queryCart('PATCH', { quantity }, book.id).then(() => setCart(newCart));
    } else {
      newCart.splice(index, 1);
      queryCart('DELETE', null, book.id).then(() => setCart(newCart));
    };
  };

  const clearCart = () => {
    Promise.all(cart.map(book => queryCart('DELETE', null, book.id)))
      .then(() => setCart([]));
  }

  if (!books) {
    return null;
  }

  return (
    <div>
      <div class="ui visible left demo vertical inverted sidebar labeled icon menu">
        <Link class="item" as={Link} to="/">
          <i class="home icon"></i>
          Home
        </Link>
        <Link class="item" as={Link} to="/books">
          <i class="block layout icon"></i>
          Books
        </Link>
        <Link class="item" as={Link} to="/cart">
          <Badge noOfItems={cart.length} />
          Cart
        </Link>
      </div>

      <div style={{marginLeft: '90px'}}>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/books" exact render={() => (
            <Cards 
              books={books} 
              cart={cart}
              totalBooks={totalBooks} 
              addToCart={addToCart} 
              queryBooks={queryBooks} />
          )} />
          <Route
            path="/books/:id"
            render={({ match }) => <Book book={books.find(prod => prod.id === parseInt(match.params.id))} />}
          />
          <Route path="/cart" render={() => <Cart cart={cart} updateCart={updateCart} clearCart={clearCart} />} />
          {/* <PrivateRoute component={Cart} path="/cart" user={user} cart={cart} updateCart={updateCart} clearCart={clearCart} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;