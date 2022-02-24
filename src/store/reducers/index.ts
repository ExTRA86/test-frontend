import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { numberReducer } from './numberReducer';
import { rowReducer } from './rowReducer';

export const rootReducer = combineReducers({
  row: rowReducer,
  num: numberReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
