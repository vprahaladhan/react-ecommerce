import React from 'react';
import { Input, InputGroup, Icon } from 'rsuite';

const styles = {
  width: 300,
  margin: '20px auto'
};

const SearchProducts = ({ search, setSearch, searchProducts }) => (
  <div>
    <InputGroup style={styles}>
      <Input value={search} onChange={value => setSearch(value)} />
      <InputGroup.Button onClick={() => searchProducts()}>
        <Icon icon="search" />
      </InputGroup.Button>
    </InputGroup>
  </div>
);

export default SearchProducts;