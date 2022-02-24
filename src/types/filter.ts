export interface FilterState {
  query: any[];
}

export enum FilterActionTypes {
  ADD_FILTER = 'ADD_FILTER',
}

interface FetchFilterAction {
  type: FilterActionTypes.ADD_FILTER;
  payload: any[];
}

export type FilterAction = FetchFilterAction;
