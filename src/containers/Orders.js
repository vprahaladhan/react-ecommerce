import React from 'react';

import ProductsTable from '../components/ProductsTable';

const Orders = ({ user }) => {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`/json-server/orders?userId=${user.id}`);
      setOrders(await response.json());
    }
    fetchOrders();
  }, []);

  return (
    <div style={{ margin: '2em' }}>
      <h2 style={{ textAlign: 'center' }}>ORDERS</h2>
      <br /><br />
      { 
        orders.map(order => (
          <div>
            <ProductsTable key={order.id} cart={order.items} />
            <br/>
          </div>
        ))
      }
    </div>
  );
}

export default Orders;