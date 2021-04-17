import React from 'react';
import { Table } from 'react-bootstrap';

const Cart = ({ cart }) => (
  <div style={{margin: '2em'}}>
    <h2  style={{textAlign: 'center'}}>SHOPPING CART</h2>
    <br/><br/>
    <Table bordered hover>
      <thead style={{textAlign: 'center'}}>
        <tr>
          <th>#</th>
          <th>Product SKU</th>
          <th>Title</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(({ id, product_sku, title, quantity, price }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{product_sku}</td>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{quantity * price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default Cart;