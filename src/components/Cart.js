import React from 'react';
import { Link } from 'react-router-dom';
// import { Table } from 'react-bootstrap';
import { Table, Dropdown, Whisper, Icon, IconButton, Popover } from 'rsuite';

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
      <div>
        <Table
          height={420}
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

const Cart = ({ cart }) => (
  <div style={{ margin: '2em' }}>
    <h2 style={{ textAlign: 'center' }}>SHOPPING CART</h2>
    <br /><br />
    <CustomColumnTable cart={cart} />
  </div>
);

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
