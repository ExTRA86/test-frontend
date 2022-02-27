import { NumberAction, NumberActionTypes } from '../../types/numbers';

export function setNum(numbers: number[]): NumberAction {
  return { type: NumberActionTypes.ADD_NUM_ROW, payload: numbers };
}
