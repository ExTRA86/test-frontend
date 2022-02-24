import React, { FC, useEffect, useState } from 'react';
import { Navbar, Button, Alignment, InputGroup } from '@blueprintjs/core';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';

const NavigationBar: FC = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    query: '',
  });

  const { numbers } = useTypeSelector(state => state.num);
  const SearchedNumbers = numbers.filter(n => n === +filter.query) + '';

  const setRow = () => {
    dispatch({ type: 'ADD_ROW' });
  };

  const setSearched = () => {
    dispatch({ type: 'ADD_FILTER', payload: SearchedNumbers });
  };

  useEffect(() => {
    setSearched();
    // eslint-disable-next-line
  }, [filter]);

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <InputGroup
          placeholder='Search number...'
          type='number'
          value={filter.query}
          onChange={e => setFilter({ ...filter, query: e.target.value })}
        />
        <Button className='bp3-minimal' text='+' onClick={setRow} />
        <Navbar.Divider />
        <Navbar.Heading>NavigationBar</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
  );
};

export default NavigationBar;
