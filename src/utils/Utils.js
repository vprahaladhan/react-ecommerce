function findProductInListings(listings, productId) {
  let foundProduct;

  for (const [key, value] of Object.entries(listings)) {
    foundProduct = value.find(listing => listing.listing_id === parseInt(productId));
  }

  return foundProduct;
}

export default findProductInListings;