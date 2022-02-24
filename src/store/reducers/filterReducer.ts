import {
  FilterState,
  FilterAction,
  FilterActionTypes,
} from '../../types/filter';

const initialState: FilterState = {
  query: [],
};

export const filterReducer = (
  state = initialState,
  action: FilterAction,
): FilterState => {
  switch (action.type) {
    case FilterActionTypes.ADD_FILTER:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

export function setSearched(query: any): FilterAction {
  return { type: FilterActionTypes.ADD_FILTER, payload: [] };
}
