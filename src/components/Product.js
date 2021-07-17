import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';

import Loader from '../utils/Loader';

const ETSY_URL = process.env.REACT_APP_ETSY_API_NO_CORS_URL;
const API_KEY = process.env.REACT_APP_ETSY_API_KEY;

const Product = ({ listing }) => {
  const { location } = useHistory();
  const [product, setProduct] = React.useState();

  React.useEffect(() => listing ? setProduct(listing) : fetchListing(), []);

  const fetchListing = async () => {
    const listingId = location.pathname.split('/').slice(-1);
    const etsyURL = `${ETSY_URL}/listings/${listingId}?api_key=${API_KEY}&includes=MainImage`
    const response = await fetch('/post', {
      method: 'POST',
      body: JSON.stringify({
        url: etsyURL
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const { results } = await response.json(); 
    setProduct(results[0]);
  }

  if (!product) {
    return <Loader />;
  }
 
  return (
    <Card style={{ textAlign: 'center' }}>
      {
        product.MainImage && product.MainImage.url_570xN &&
        <Image src={product.MainImage.url_570xN} alt={product.title} fluid />
      }
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.currency_code} {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;