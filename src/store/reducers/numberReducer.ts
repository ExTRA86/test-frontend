import {
  NumberAction,
  NumberActionTypes,
  NumberState,
} from '../../types/numbers';

const initialState: NumberState = {
  numbers: [],
};

export const numberReducer = (
  state = initialState,
  action: NumberAction,
): NumberState => {
  switch (action.type) {
    case NumberActionTypes.ADD_NUM_ROW:
      return { ...state, numbers: action.payload };
    default:
      return state;
  }
};

export function setNum(row: number): NumberAction {
  return { type: NumberActionTypes.ADD_NUM_ROW, payload: [] };
}
