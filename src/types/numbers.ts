export interface NumberState {
  numbers: any[];
}

export enum NumberActionTypes {
  ADD_NUM_ROW = 'ADD_NUM_ROW',
}

interface FetchNumberAction {
  type: NumberActionTypes.ADD_NUM_ROW;
  payload: any[];
}

export type NumberAction = FetchNumberAction;
