import React from 'react';
import { Input, InputGroup, Icon } from 'rsuite';

const styles = {
  width: 300,
  margin: '20px auto'
};

const SearchBooks = ({ queryBooks }) => {
  const [search, setSearch] = React.useState('');

  const onClick = () => {
    queryBooks(search).then((results) => {
      console.log('Results >> ', results);
      setSearch('');
    });
  }

  return (
    <div>
      <InputGroup style={styles}>
        <Input value={search} onChange={value => setSearch(value)} />
        <InputGroup.Button onClick={onClick}>
          <Icon icon="search" />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
}

export default SearchBooks;