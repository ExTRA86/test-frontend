import { FC } from 'react';
import { Cell, Column, Table } from '@blueprintjs/table';
import { useTypeSelector } from '../hooks/useTypeSelector';

const TableList: FC = () => {
  const { filteredNum } = useTypeSelector(state => state.filter);

  const numberCellRenderer = (rowIndex: number) => (
    <Cell>{filteredNum[rowIndex]}</Cell>
  );

  return (
    <Table numRows={filteredNum.length}>
      <Column name='Numbers' cellRenderer={numberCellRenderer} />
    </Table>
  );
};

export default TableList;
