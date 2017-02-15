import _ from 'lodash';
import { set_number_of_devices_action, set_data_interval_action, set_lambda_function_count_action, set_data_vol_per_sec_action, set_s3_permanent_datastore_action } from '../Actions/inputTable';

const initialState = {
  number_of_devices: 10000,
  data_interval: 10,
  lambda_count: 2,
  data_vol_per_sec: 1000
};

function inputs (state = initialState, action) {
  switch (action.type) {
    case set_number_of_devices_action:
      return _.merge(_.cloneDeep(state), { number_of_devices: action.number });
      break;
    case set_data_interval_action:
      return _.merge(_.cloneDeep(state), { data_interval: action.number });
      break;
    case set_lambda_function_count_action:
      return _.merge(_.cloneDeep(state), { lambda_count: action.number });
      break;
  }

  return state;
}

export default inputs;
