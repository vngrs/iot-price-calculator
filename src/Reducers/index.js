import { combineReducers } from 'redux';
import inputs from './inputs';
import components from './components';

const iotCalc = combineReducers({
  inputs,
  components
});

export default iotCalc;