export const set_s3_permanent_datastore_action = 'SET_PERMANENT_DATASTORE';
export function set_s3_permanent_datastore(number) {
  return { type: set_s3_permanent_datastore_action, number }
}

export const set_kinesis_stream_data_streaming_action = 'SET_KINESIS_STREAM_DATA_STREAMING';
export function set_kinesis_stream_data_streaming(number) {
  return { type: set_kinesis_stream_data_streaming_action, number }
}

export const set_lambda_writing_to_firehose_elasticsearch_action = 'SET_LAMBDA_WRITING_TO_FIREHOSE_ELASTICSEARCH';
export function set_lambda_writing_to_firehose_elasticsearch(number) {
  return { type: set_lambda_writing_to_firehose_elasticsearch_action, number }
}

export const set_kinesis_firehose_ingesting_data_to_s3_action = 'SET_KINESIS_FIREHOSE_INGESTING_DATA_TO_S3';
export function set_kinesis_firehose_ingesting_data_to_s3(number) {
  return { type: set_kinesis_firehose_ingesting_data_to_s3_action, number }
}