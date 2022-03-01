import * as FilterNumActionCreators from './filterNum';
import * as NumActionCreators from './num';

const ActionCreators = {
  ...FilterNumActionCreators,
  ...NumActionCreators,
};

export default ActionCreators;
