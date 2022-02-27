import { FC, useEffect, useState } from 'react';
import { Navbar, Button, Alignment, InputGroup } from '@blueprintjs/core';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useAction';

const NavigationBar: FC = () => {
  const [filter, setFilter] = useState('');

  const { numbers } = useTypeSelector(state => state.num);
  const { setNum, setSearched } = useActions();

  const searchedNumbers = numbers.filter((n: number) => {
    if (filter === '') {
      return n;
    } else if (n === +filter) {
      return n;
    }
    return false;
  });

  useEffect(() => {
    setSearched([...searchedNumbers]);
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
        <Button
          className='bp3-minimal'
          text='+'
          onClick={() => setNum([...numbers, (numbers.length + 1) * 2])}
        />
        <Navbar.Divider />
        <Navbar.Heading>NavigationBar</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
  );
};

export default NavigationBar;
