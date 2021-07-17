import React from 'react';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';

const ProductsTable = ({ cart, updateCart }) => (
  <Table striped bordered hover size='sm' style={{ maxWidth: '90%', margin: '0 auto' }}>
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
          <td>{product.product_id}</td>
          <td>{product.title}</td>
          <td>
            <DropdownButton
              size='sm'
              title={product.quantity}
              disabled={!updateCart}
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
);

export default ProductsTable;