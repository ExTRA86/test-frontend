export interface RowState {
  numRows: number;
}

export enum RowActionTypes {
  ADD_ROW = 'ADD_ROW',
}

interface FetchRowAction {
  type: RowActionTypes.ADD_ROW;
}

export type RowAction = FetchRowAction;
