import React from 'react';
import { Link } from 'react-router-dom';
// import { Table, Dropdown, Button } from 'rsuite';
import { Table, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
// import { Whisper, Icon, IconButton, Popover } from 'rsuite';

const Cart = ({ cart, updateCart, clearCart }) => {
  const onCheckout = () => {
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

  return (
    <div style={{ margin: '2em' }}>
      <ToastContainer />
      <h2 style={{ textAlign: 'center' }}>SHOPPING CART</h2>
      <br /><br />
      <Table striped bordered hover size='sm' style={{maxWidth: '90%', margin: '0 auto'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>SKU</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.product_sku}</td>
              <td>{product.title}</td>
              <td>
                <DropdownButton 
                  size='sm' 
                  title={product.quantity} 
                  onSelect={(eventkey, event) => updateCart(parseInt(event.target.innerText), product)}>
                  {[...Array(11).keys()].map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
                </DropdownButton>
              </td>
              <td>${product.price}</td>
              <td>${product.quantity * product.price}</td>
            </tr>            
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <strong>GRAND TOTAL</strong>
            </td>
            <td>
              <strong>${cart.reduce((acc, value) => acc + (value.quantity * value.price), 0)}</strong>
            </td>
          </tr>
        </tbody>
      </Table>
      <div id="cart-action-container">
        <Button className='cart-action'><Link to='/react-ecommerce/products'>Continue Shopping</Link></Button>
        <Button className='cart-action' onClick={clearCart}>Clear Cart</Button>
        <Button className='cart-action' onClick={onCheckout}>Checkout</Button>
      </div>
    </div>
  );
}

export default Cart;