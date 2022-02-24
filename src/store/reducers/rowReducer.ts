import { RowState, RowActionTypes, RowAction } from '../../types/rows';

const initialState: RowState = {
  numRows: 1,
};

export const rowReducer = (
  state = initialState,
  action: RowAction,
): RowState => {
  switch (action.type) {
    case RowActionTypes.ADD_ROW:
      return { ...state, numRows: state.numRows + 1 };
    default:
      return state;
  }
};

export function setRow(row: number): RowAction {
  return { type: RowActionTypes.ADD_ROW };
}
