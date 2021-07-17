import React from 'react';
// import Card from './Card';
// import { CardDeck } from 'react-bootstrap';
// import Carousel from 'react-multi-carousel';

import Carousel from '../containers/ProductCarousel';
// import 'react-multi-carousel/lib/styles.css';

const Home = ({ listings, addToCart, cart }) => (
  <div>
    <h2 style={{width: 'fit-content', margin: 'auto', paddingBottom: '20px'}}>Welcome to ECOM - for all things online!</h2>

    <div style={{textAlign: 'center', position: 'relative'}}>
      <Carousel listings={listings['825']} addToCart={addToCart} cart={cart} />
      <Carousel listings={listings['374']} addToCart={addToCart} cart={cart} />
    </div>
  </div>
);

export default Home;