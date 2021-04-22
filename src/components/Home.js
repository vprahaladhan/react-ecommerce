import React from 'react';
import Card from './Card';
import { CardDeck } from 'react-bootstrap';

const CategoryProducts = ({ category, products, addToCart, cart }) => (
  <div>
    <h3>{category}</h3>
    <CardDeck>
        {products
          .filter(product => product.category.toLowerCase().includes(category)).slice(0, 4)
            .map(product => (
              <Card key={product.id} product={product} addToCart={addToCart} cart={cart} />
            ))
        }
    </CardDeck>
  </div>
);

const Home = ({ products, addToCart, cart }) => (
  <div style={{textAlign: 'center', position: 'relative'}}>
    <h2>Welcome to ECOM - for all things online!</h2>
    <CategoryProducts category="men's clothing" products={products} addToCart={addToCart} cart={cart} />
    <CategoryProducts category="women's clothing" products={products} addToCart={addToCart} cart={cart} />
    <CategoryProducts category="jewelery" products={products} addToCart={addToCart} cart={cart} />
    <CategoryProducts category="electronics" products={products} addToCart={addToCart} cart={cart} />
  </div>
);

export default Home;