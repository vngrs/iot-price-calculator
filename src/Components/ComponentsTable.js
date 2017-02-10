import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

const components_table = [
  {
    text: 'S3 Permanent Datastore',
    name: 's3_permanent_datastore',
    type: 'result',
    cb: (state) => 0.25 * (state.inputs.number_of_devices / state.inputs.data_interval),
		typeOf: "GB",
		price_instance: "0.03000",
  },
  {
    text: 'Kinesis Stream Data Streaming',
    name: 'kinesis_stream_data_streaming',
    type: 'result',
    cb: (state) => state.inputs.number_of_devices / state.inputs.data_interval,
		typeOf:  "request per second",
		price_instance: "0.03400",
  },
  {
    text: 'Lambda Writing to Firehose & Elasticsearch',
    name: 'lambda_writing_to_firehose_elasticsearch',
    type: 'result',
    cb: (state) => state.inputs.lambda_count,
		typeOf: "total lambda function",
		price_instance: "0.00806",
  },
  {
    text: 'Kinesis Firehose Ingesting Data to S3',
    name: 'kinesis_firehose_ingesting_data_to_s3',
    type: 'result',
    cb: (state) => 5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval)),
		typeOf: "GB",
		price_instance: "0.05840",
  },
  {
    text: 'EC2 NodeJS - Elasticbeanstalk - Autoscale',
    name: 'ec2_nodejs_elasticbeanstalk_autoscale',
    type: 'result',
    cb: (state) => 5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval)),
    typeOf: "GB",
    price_instance: "0.05840",
  },
	{
    text: 'Elastic Load Balancer For Elasticbeanstalk (Data transfer between AZs)',
    name: 'elastic_load_balancer',
    type: 'result',
    cb: (state) => 5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval)),
    typeOf: "GB",
    price_instance: "0.05840",
  },
  {
    text: 'Elasticsearch Data Storage and Kibana (based on 1 months, min 1.6tb storage)',
    name: 'elasticsearch_data_storage',
    type: 'result',
    cb: (state) => 5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval)),
    typeOf: "GB",
    price_instance: "0.05840",
  },
  {
    text: 'EMR/Hive Bulk Processing - Daily',
    name: 'emr_hive_bulk_processing_daily',
    type: 'result',
    cb: (state) => 5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval)),
    typeOf: "GB",
    price_instance: "0.05840",
  },

]

class ComponentsTable extends Component {
  renderRow(thisInput) {
    let result, typeOf, price_instance;

    switch(thisInput.type) {
      case 'result':
        result = <div ref={thisInput.name}>{thisInput.cb(this.props.state)}</div>;
				typeOf = <div>{thisInput.typeOf}</div>;
				price_instance = <div>{thisInput.price_instance}</div>
        break;
    }

    return (
			<tr key={_.uniqueId()}>
				<td>{thisInput.text}</td>
				<td>{result}</td>
				<td>{typeOf}</td>
				<td>{price_instance}</td>
			</tr>
    );
  }

render() {
  const rows = components_table.map(input => this.renderRow(input));
	return (
		<table>
			<tbody>
			{ rows }
			</tbody>
		</table>
	)
}
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(
  mapStateToProps,
)(ComponentsTable);