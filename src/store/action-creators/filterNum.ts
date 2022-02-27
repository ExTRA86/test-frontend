import { FilterAction, FilterActionTypes } from '../../types/filter';

export function setSearched(filteredNum: number[]): FilterAction {
  return { type: FilterActionTypes.ADD_FILTERED_NUM, payload: filteredNum };
}
