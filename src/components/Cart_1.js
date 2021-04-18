import React from 'react';
import { Link } from 'react-router-dom';
// import { Table } from 'react-bootstrap';
import { Table, Dropdown, Whisper, Icon, IconButton, Popover, Button } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;

const Menu = ({ onSelect, rowData }) => (
  <Dropdown title={rowData.quantity} onSelect={onSelect}>
    {[...Array(11).keys()].map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
  </Dropdown>
);

const MenuPopover = ({ onSelect, rowData, ...rest }) => (
  <Popover {...rest} full>
    <Menu onSelect={onSelect} rowData={rowData} />
  </Popover>
);

let tableBody;

class CustomWhisper extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
  }

  handleSelectMenu(eventKey, event) {
    console.log(eventKey);
    this.trigger.hide();
  }

  render() {
    return (
      <Whisper
        placement="autoVerticalStart"
        trigger="click"
        triggerRef={ref => {
          this.trigger = ref;
        }}
        container={() => {
          return tableBody;
        }}
        speaker={<MenuPopover onSelect={this.handleSelectMenu} rowData={this.props.rowData} />}
      >
        {this.props.children}
      </Whisper>
    );
  }
}

const ActionCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props} className="link-group">
    <CustomWhisper rowData={rowData}>
      <IconButton appearance="subtle" icon={<Icon icon="more" />} />
    </CustomWhisper>
  </Cell>
);

class CustomColumnTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedKeys: [],
      data: props.cart
    };
    this.handleCheckAll = this.handleCheckAll.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheckAll(value, checked) {
    const checkedKeys = checked ? this.state.data.map(item => item.id) : [];
    this.setState({
      checkedKeys
    });
  }

  handleCheck(value, checked) {
    const { checkedKeys } = this.state;
    const nextCheckedKeys = checked
      ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);

    this.setState({
      checkedKeys: nextCheckedKeys
    });
  }

  render() {
    const { data, checkedKeys } = this.state;

    let checked = false;
    let indeterminate = false;

    if (checkedKeys.length === data.length) {
      checked = true;
    } else if (checkedKeys.length === 0) {
      checked = false;
    } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
      indeterminate = true;
    }

    return (
      <div style={{marginBottom: '20px'}}>
        <Table
          autoHeight
          data={data}
          id="table"
          bodyRef={ref => {
            tableBody = ref;
          }}
        >
          <Column width={80} align="center">
            <HeaderCell>#</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={300}>
            <HeaderCell>title</HeaderCell>
            <Cell>
              {rowData => <Link to={`/products/${rowData.product_sku}`}>{rowData.title}</Link>}
            </Cell>
          </Column>

          <Column width={160}>
            <HeaderCell>Quantity</HeaderCell>
            <ActionCell dataKey="quantity" />
          </Column>

          <Column width={160}>
            <HeaderCell>Unit Price</HeaderCell>
            <Cell dataKey="price" />
          </Column>

          <Column width={160}>
            <HeaderCell>Price</HeaderCell>
            <Cell>
              {rowData => rowData.quantity * rowData.price}
            </Cell>
          </Column>

          <Column width={200}>
            <HeaderCell>Action</HeaderCell>
            <ActionCell dataKey="id" />
          </Column>
        </Table>
      </div>
    );
  }
}

const Cart = ({ cart, clearCart }) => {
  console.log('Rendering cart here...', cart);
  return (
    <div style={{ margin: '2em' }}>
      <h2 style={{ textAlign: 'center' }}>SHOPPING CART</h2>
      <br /><br />
      <CustomColumnTable cart={cart} />
      <Button><Link to='/products'>Continue Shopping</Link></Button>
      <Button>Update Cart</Button>
      <Button onClick={clearCart}>Clear Cart</Button>
    </div>
  );
};

export default Cart;

  //     <Table
  //       height={400}
  //       data={cart}
  //       onRowClick={data => {
  //         console.log(data);
  //       }}
  //     >
  //       <Column width={150} align="center" fixed>
  //         <HeaderCell>Id</HeaderCell>
  //         <Cell dataKey="id" />
  //       </Column>

  //       <Column width={150} fixed>
  //         <HeaderCell>SKU</HeaderCell>
  //         <Cell dataKey="product_sku" />
  //       </Column>

  //       <Column width={300}>
  //         <HeaderCell>Title</HeaderCell>
  //         <Cell dataKey="title" />
  //       </Column>

  //       <Column width={150}>
  //         <HeaderCell>Quantity</HeaderCell>
  //         <Cell>
  //           {rowData => (
  //             <Dropdown title={rowData.quantity}>
  //               <Dropdown.Item>0</Dropdown.Item>
  //               <Dropdown.Item>1</Dropdown.Item>
  //               <Dropdown.Item>2</Dropdown.Item>
  //               <Dropdown.Item>3</Dropdown.Item>
  //               <Dropdown.Item>4</Dropdown.Item>
  //               <Dropdown.Item>5</Dropdown.Item>
  //               {/* {[...Array(11).keys()].map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)} */}
  //             </Dropdown>
  //           )}
  //         </Cell>
  //       </Column>

  //       <Column width={150}>
  //         <HeaderCell>Unit Price</HeaderCell>
  //         <Cell dataKey="price" />
  //       </Column>

  //       <Column width={150}>
  //         <HeaderCell>Price</HeaderCell>
  //         <Cell>
  //           {rowData => rowData.quantity * rowData.price}
  //         </Cell>
  //       </Column>

  //       <Column width={150} fixed="right">
  //         <HeaderCell>Action</HeaderCell>

  //         <Cell>
  //           {rowData => {
  //             function handleAction() {
  //               alert(`id:${rowData.id}`);
  //             }
  //             return (
  //               <span>
  //                 <a onClick={handleAction}> Edit </a> |{' '}
  //                 <a onClick={handleAction}> Remove </a>
  //               </span>
  //             );
  //           }}
  //         </Cell>
  //       </Column>
  //     </Table>
  //   </div>
  // </div>

  const { Column, HeaderCell, Cell, Pagination } = Table;

const EditCell = ({ rowData, dataKey, onChange, ...props }) => {
  const editing = rowData.status === 'EDIT';
  return (
    <Cell {...props} className={editing ? 'table-content-editing' : ''}>
      {editing ? (
        <input
          className="rs-input"
          defaultValue={rowData[dataKey]}
          onChange={event => {
            onChange && onChange(rowData.id, dataKey, event.target.value);
          }}
        />
      ) : (
        <span className="table-content-edit-span">{rowData[dataKey]}</span>
      )}
    </Cell>
  );
};

const ActionCell = ({ rowData, dataKey, onClick, ...props }) => {
  return (
    <Cell {...props} style={{ padding: '6px 0' }}>
      <Button
        appearance="link"
        onClick={() => {
          onClick && onClick(rowData.id);
        }}
      >
        {rowData.status === 'EDIT' ? 'Save' : 'Edit'}
      </Button>
    </Cell>
  );
};

const EditTable = ({ cart }) => {
  const [data, setData] = React.useState(cart);
  const handleChange = (id, key, value) => {
    const nextData = Object.assign([], data);
    nextData.find(item => item.id === id)[key] = value;
    setData(nextData);
  };
  const handleEditState = id => {
    const nextData = Object.assign([], data);
    const activeItem = nextData.find(item => item.id === id);
    activeItem.status = activeItem.status ? null : 'EDIT';
    setData(nextData);
  };

  return (
    <Table autoHeight data={data}>
      <Column width={100} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={100} fixed>
        <HeaderCell>SKU</HeaderCell>
        <Cell dataKey="product_sku" />
      </Column>

      <Column width={300}>
        <HeaderCell>Title</HeaderCell>
        <Cell dataKey="title" />
      </Column>

      <Column width={100}>
        <HeaderCell>Quantity</HeaderCell>
        <EditCell dataKey="quantity" onChange={handleChange} />
      </Column>

      <Column width={150}>
        <HeaderCell>Unit Price</HeaderCell>
        <Cell dataKey="price" />
      </Column>

      <Column width={150}>
        <HeaderCell>Price</HeaderCell>
        <Cell>
          {rowData => rowData.quantity * rowData.price}
        </Cell>
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>Action</HeaderCell>
        <ActionCell dataKey="id" onClick={handleEditState} />
      </Column>
    </Table>
  );
};

const Cart = ({ cart, clearCart }) => {
  console.log('Rendering cart here...', cart);
  return (
    <div style={{ margin: '2em' }}>
      <h2 style={{ textAlign: 'center' }}>SHOPPING CART</h2>
      <br /><br />
      <EditTable cart={cart} />
      <div id="cart-action-container">
        <Button className='cart-action'><Link to='/products'>Continue Shopping</Link></Button>
        <Button className='cart-action'>Update Cart</Button>
        <Button className='cart-action' onClick={clearCart}>Clear Cart</Button>
      </div>
    </div >
  );
};

export default Cart;

{/* <Table
autoHeight
data={cart}
onRowClick={data => {
  console.log(data);
}}
>
<Column width={100} align="center" fixed>
  <HeaderCell>Id</HeaderCell>
  <Cell dataKey="id" />
</Column>

<Column width={100} fixed>
  <HeaderCell>SKU</HeaderCell>
  <Cell dataKey="product_sku" />
</Column>

<Column width={300}>
  <HeaderCell>Title</HeaderCell>
  <Cell dataKey="title" />
</Column>

<Column width={100}>
  <HeaderCell>Quantity</HeaderCell>
  <Cell>
    {rowData => (
      <Dropdown title={rowData.quantity}>
        {[...Array(11).keys()].map(item => <Dropdown.Item key={item}>{item}</Dropdown.Item>)}
      </Dropdown>
    )}
  </Cell>
</Column>

<Column width={150}>
  <HeaderCell>Unit Price</HeaderCell>
  <Cell dataKey="price" />
</Column>

<Column width={150}>
  <HeaderCell>Price</HeaderCell>
  <Cell>
    {rowData => rowData.quantity * rowData.price}
  </Cell>
</Column>

<Column width={100} fixed="right">
  <HeaderCell>Action</HeaderCell>
  <Cell>
    {rowData => {
      function handleAction() {
        alert(`id:${rowData.id}`);
      }
      return (
        <span>
          <a onClick={handleAction}> Edit </a> |{' '}
          <a onClick={handleAction}> Remove </a>
        </span>
      );
    }}
  </Cell>
</Column> */}