import {
  FilterState,
  FilterAction,
  FilterActionTypes,
} from '../../types/filter';

const initialState: FilterState = {
  filteredNum: [],
};

export const filterReducer = (
  state = initialState,
  action: FilterAction,
): FilterState => {
  switch (action.type) {
    case FilterActionTypes.ADD_FILTERED_NUM:
      return { ...state, filteredNum: action.payload };
    default:
      return state;
  }
};
