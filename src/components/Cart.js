import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import ProductsTable from './ProductsTable';

const Cart = ({ cart, user, updateCart, clearCart, createOrder }) => {
  const history = useHistory();

  const onCheckout = async () => {
    if (user) {
      await createOrder({ items: Array.from(cart), userId: user.id });
      clearCart();
      toast.success('Thank you, your order has been successfully processed!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else {
      history.push('/login');
    }
  }

  return (
    <div style={{ margin: '2em' }}>
      <ToastContainer />
      <h2 style={{ textAlign: 'center' }}>SHOPPING CART</h2>
      <br /><br />
      <ProductsTable cart={cart} updateCart={updateCart} />
      <div id="cart-action-container">
        <Button className='cart-action'><Link to='/listings'>Continue Shopping</Link></Button>
        <Button className='cart-action' onClick={clearCart}>Clear Cart</Button>
        <Button className='cart-action' onClick={onCheckout}>Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;