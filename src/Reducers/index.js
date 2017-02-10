import { combineReducers } from 'redux';
import inputs from './inputs';
import components from './components';
import results from './results';

const iotCalc = combineReducers({
  inputs,
  components,
  results
});

export default iotCalc;