import React, { FC, useEffect } from 'react';
import { Cell, Column, Table } from '@blueprintjs/table';
import { useTypeSelector } from '../hooks/useTypeSelector';

import { useDispatch } from 'react-redux';

const TableList: FC = () => {
  const dispatch = useDispatch();
  const setNum = () => {
    dispatch({
      type: 'ADD_NUM_ROW',
      payload: [...numbers, numbers.length * 2],
    });
  };

  const { numRows } = useTypeSelector(state => state.row);
  const { numbers } = useTypeSelector(state => state.num);
  const { query } = useTypeSelector(state => state.filter);

  useEffect(() => {
    setNum();
    // eslint-disable-next-line
  }, [numRows]);

  const numberCellRenderer = (rowIndex: number) => (
    <Cell>{Number(query) > 0 ? query : numbers[rowIndex]}</Cell>
  );

  return (
    <Table numRows={Number(query) > 0 ? 1 : numRows}>
      <Column name='Numbers' cellRenderer={numberCellRenderer} />
    </Table>
  );
};

export default TableList;
