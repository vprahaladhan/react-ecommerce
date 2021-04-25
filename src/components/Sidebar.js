import React from 'react';
import { Link } from 'react-router-dom';

import Badge from './CartBadge';

const Sidebar = ({ cartItemsCount }) => (
  <div className="ui visible left demo vertical inverted sidebar labeled icon menu">
    <Link className="item" as={Link} to="/">
      <i className="home icon"></i>
      Home
    </Link>
    <Link className="item" as={Link} to="/listings">
      <i className="block layout icon"></i>
      Products
    </Link>
    <Link className="item" as={Link} to="/cart">
      <Badge noOfItems={cartItemsCount} />
      Cart
    </Link>
  </div>
);

export default Sidebar;