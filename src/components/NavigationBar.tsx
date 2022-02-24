import React, { FC, useEffect, useState } from 'react';
import { Navbar, Button, Alignment, InputGroup } from '@blueprintjs/core';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';

const NavigationBar: FC = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const { numbers } = useTypeSelector(state => state.num);

  const searchedNumbers = numbers.filter(n => {
    if (filter === '') {
      return n;
    } else if (n === +filter) {
      return n;
    }
  });

  const setNum = () => {
    dispatch({
      type: 'ADD_NUM_ROW',
      payload: [...numbers, (numbers.length + 1) * 2],
    });
  };

  const setSearched = () => {
    dispatch({ type: 'ADD_FILTER', payload: [...searchedNumbers] });
  };

  useEffect(() => {
    setSearched();
    // eslint-disable-next-line
  }, [searchedNumbers]);

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <InputGroup
          placeholder='Search number...'
          type='number'
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <Button className='bp3-minimal' text='+' onClick={setNum} />
        <Navbar.Divider />
        <Navbar.Heading>NavigationBar</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
  );
};

export default NavigationBar;
