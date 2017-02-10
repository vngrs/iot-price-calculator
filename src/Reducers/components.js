import _ from 'lodash';
import { set_s3_permanent_datastore_action, set_kinesis_stream_data_streaming_action, set_lambda_writing_to_firehose_elasticsearch_action, set_kinesis_firehose_ingesting_data_to_s3_action} from '../Actions/componentsTable';

const initialState = {
  s3_permanent_datastore: 10,
  kinesis_stream_data_streaming: 10,
  lambda_writing_to_firehose_elasticsearch: 10,
  kinesis_firehose_ingesting_data_to_s3: 10

};

function components (state = initialState, action) {
  switch (action.type) {
    case set_s3_permanent_datastore_action:
      return _.merge(_.cloneDeep(state), { s3_permanent_datastore: action.number });
      break;
    case set_kinesis_stream_data_streaming_action:
      return _.merge(_.cloneDeep(state), { kinesis_stream_data_streaming: action.number });
      break;
    case set_lambda_writing_to_firehose_elasticsearch_action:
      return _.merge(_.cloneDeep(state), { lambda_writing_to_firehose_elasticsearch: action.number });
      break;
    case set_kinesis_firehose_ingesting_data_to_s3_action:
      return _.merge(_.cloneDeep(state), { kinesis_firehose_ingesting_data_to_s3: action.number });
      break;
  }
  return state;
}
export default components;
