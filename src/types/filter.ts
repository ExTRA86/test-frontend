export interface FilterState {
  query: string;
}

export enum FilterActionTypes {
  ADD_FILTER = 'ADD_FILTER',
}

interface FetchFilterAction {
  type: FilterActionTypes.ADD_FILTER;
  payload: string;
}

export type FilterAction = FetchFilterAction;
