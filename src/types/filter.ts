export interface FilterState {
  filteredNum: number[];
}

export enum FilterActionTypes {
  ADD_FILTERED_NUM = 'ADD_FILTERED_NUM',
}

interface FetchFilterAction {
  type: FilterActionTypes.ADD_FILTERED_NUM;
  payload: number[];
}

export type FilterAction = FetchFilterAction;
