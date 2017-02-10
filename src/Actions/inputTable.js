export const set_number_of_devices_action = 'SET_NUMBER_OF_DEVICES';
export function set_number_of_devices(number) {
  return { type: set_number_of_devices_action, number }
}

export const set_data_interval_action = 'SET_DATA_INTERVAL';
export function set_data_interval(number) {
  return { type: set_data_interval_action, number }
}

export const set_lambda_function_count_action = 'SET_LAMBDA_FUNCTION_COUNT';
export function set_lambda_function_count(number) {
  return { type: set_lambda_function_count_action, number }
}

export const set_data_vol_per_sec_action = 'SET_DATA_VOL_PER_SEC';
export function set_data_vol_per_sec(number) {
  return { type: set_data_vol_per_sec_action, number }
}