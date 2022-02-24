import { FC } from 'react';
import { Cell, Column, Table } from '@blueprintjs/table';
import { useTypeSelector } from '../hooks/useTypeSelector';

const TableList: FC = () => {
  const { query } = useTypeSelector(state => state.filter);

  const numberCellRenderer = (rowIndex: number) => (
    <Cell>{query[rowIndex]}</Cell>
  );

  return (
    <Table numRows={query.length}>
      <Column name='Numbers' cellRenderer={numberCellRenderer} />
    </Table>
  );
};

export default TableList;
