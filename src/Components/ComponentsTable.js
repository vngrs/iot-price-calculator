import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

const headings = [
  "Service",
  "Role",
  "# of Instances/ Shard/ Data",
  "Type",
  "Price/Instance Unit/Hour",
  "Hourly Total",
  "Monthly Total",
  "Yearly Total"
];
const components_table = [
  {
    text: 'S3',
    role: 'Permanent Datastore',
    name: 's3_permanent_datastore',
    type: 'result',
    cb: (state) => 0.25 * (state.inputs.number_of_devices / state.inputs.data_interval),
		typeOf: "GB",
		price_instance: "0.03000",
    hourly_total: (state) => (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval) * 0.03000) / 744,
    monthly_total: (state) => Math.ceil(0.25 * (state.inputs.number_of_devices / state.inputs.data_interval) * 0.03000),
    yearly_total: (state) => 12 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval) * 0.03000)
  },
  {
    text: 'Kinesis Stream',
    role: 'Data Streaming',
    name: 'kinesis_stream_data_streaming',
    type: 'result',
    cb: (state) => state.inputs.number_of_devices / state.inputs.data_interval,
		typeOf:  "request per second",
		price_instance: "0.03400",
    hourly_total:(state) => (Math.max(Math.ceil(state.inputs.lambda_count / 2),Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval) / 5000) * 10 * 0.017) + ((state.inputs.number_of_devices / state.inputs.data_interval) * 60 * 60 / 1000000 * 0.0165),
    monthly_total:(state) => Math.ceil(744 * ((Math.max(Math.ceil(state.inputs.lambda_count / 2),Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval) / 5000) * 10 * 0.017) + ((state.inputs.number_of_devices / state.inputs.data_interval) * 60 * 60 / 1000000 * 0.0165))),
    yearly_total:(state) => Math.round(12 * (744 * ((Math.max(Math.ceil(state.inputs.lambda_count / 2),Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval) / 5000) * 10 * 0.017) + ((state.inputs.number_of_devices / state.inputs.data_interval) * 60 * 60 / 1000000 * 0.0165)))),
  },
  {
    text: 'Lambda',
    role: 'Writing to Firehose & Elasticsearch',
    name: 'lambda_writing_to_firehose_elasticsearch',
    type: 'result',
    cb: (state) => state.inputs.lambda_count,
		typeOf: "total lambda function",
		price_instance: "0.00806",
    hourly_total: (state) => state.inputs.lambda_count * Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval / 5000) * 10 * 0.008064,
    monthly_total: (state) => Math.ceil(744 * (state.inputs.lambda_count * Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval / 5000) * 10 * 0.008064)),
    yearly_total: (state) => Math.ceil(12 * 744 * (state.inputs.lambda_count * Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval / 5000) * 10 * 0.008064)),
  },
  {
    text: 'Kinesis Firehose',
    role: 'Ingesting Data to S3',
    name: 'kinesis_firehose_ingesting_data_to_s3',
    type: 'result',
    cb: (state) => 5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval)),
		typeOf: "GB",
		price_instance: "0.05840",
    hourly_total: (state) => "",
    monthly_total: (state) => (5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval))) * 0.0584,
    yearly_total: (state) => 12 * ((5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval))) * 0.0584),
  },
  {
    text: 'EC2',
    role: 'NodeJS - Elasticbeanstalk - Autoscale',
    name: 'ec2_nodejs_elasticbeanstalk_autoscale',
    type: 'result',
    cb: (state) => Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 500),
    typeOf: "c4.large",
    price_instance: 0.11300,
    hourly_total: (state) => (Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 500)) * 0.11300,
    monthly_total: (state) => 744 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 500)) * 0.11300),
    yearly_total: (state) => Math.ceil(12 * (744 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 500)) * 0.11300)))
  },
	{
    text: 'Elastic Load Balancer',
    role: 'For Elasticbeanstalk (Data transfer between AZs)',
    name: 'elastic_load_balancer',
    type: 'result',
    cb: (state) => state.inputs.number_of_devices / state.inputs.data_interval,
    typeOf: "GB",
    price_instance: "0.12500",
    hourly_total: (state) => "",
    monthly_total: (state) => (state.inputs.number_of_devices / state.inputs.data_interval) * 0.12500,
    yearly_total: (state) => 12 * ((state.inputs.number_of_devices / state.inputs.data_interval) * 0.12500)
  },
  {
    text: 'Elasticsearch',
    role: 'Data Storage and Kibana (based on 1 months, min 1.6tb storage)',
    name: 'elasticsearch_data_storage',
    type: 'result',
    cb: (state) => Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000),
    typeOf: "i2.xlarge.elasticsearch",
    price_instance: "1.31300",
    hourly_total: (state) => (Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 1.31300,
    monthly_total: (state) => 744 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 1.31300),
    yearly_total: (state) => Math.round(12 * (744 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 1.31300)))
  },
  {
    text: 'EMR/Hive',
    role: 'Bulk Processing - Daily',
    name: 'emr_hive_bulk_processing_daily',
    type: 'result',
    cb: (state) => 1,
    typeOf: "Job",
    price_instance: "100.00",
    hourly_total: (state) => "",
    monthly_total: (state) => (Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 100,
    yearly_total: (state) => 12 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 100)
  },

];

class ComponentsTable extends Component {
  renderRow(thisInput) {
    let result, typeOf, price_instance, hourly_total, monthly_total, yearly_total;

    switch(thisInput.type) {
      case 'result':
        result = <div ref={thisInput.name}>{thisInput.cb(this.props.state)}</div>;
				typeOf = <div>{thisInput.typeOf}</div>;
				price_instance = <div>{thisInput.price_instance}</div>;
				hourly_total = <div>{thisInput.hourly_total(this.props.state)}</div>;
        monthly_total = <div>{thisInput.monthly_total(this.props.state)}</div>;
        yearly_total = <div>{thisInput.yearly_total(this.props.state)}</div>
        break;
    }

    return (
			<tr key={_.uniqueId()}>
				<td>{thisInput.text}</td>
        <td>{thisInput.role}</td>
				<td>{result}</td>
				<td>{typeOf}</td>
				<td>{price_instance}</td>
        <td>{hourly_total}</td>
        <td>{monthly_total}</td>
        <td>{yearly_total}</td>
			</tr>
    );
  }

render() {
  const rows = components_table.map(input => this.renderRow(input));
  const table_headings = headings.map(heading => <th key={_.uniqueId()}>{heading}</th>)

  return (
		<table className="component_table">
			<tbody>
      <tr>
        {table_headings}
      </tr>
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