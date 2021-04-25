import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from '../components/Card';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProductCarousel = ({ keyword, listings, addToCart, cart }) => {
  if (!listings) return null;

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      showDots={false}
      slidesToSlide={2}
    >
      {listings.map(listing => (
        <div key={listing.listing_id}>
          <Card listing={listing} addToCart={addToCart} cart={cart} />
        </div>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;