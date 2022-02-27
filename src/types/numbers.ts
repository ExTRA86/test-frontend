export interface NumberState {
  numbers: number[];
}

export enum NumberActionTypes {
  ADD_NUM_ROW = 'ADD_NUM_ROW',
}

interface FetchNumberAction {
  type: NumberActionTypes.ADD_NUM_ROW;
  payload: number[];
}

export type NumberAction = FetchNumberAction;
