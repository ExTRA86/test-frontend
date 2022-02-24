import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { numberReducer } from './numberReducer';

export const rootReducer = combineReducers({
  num: numberReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
