import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

const result_table = [
  {
    text: 'Total',
    name: 'total',
    type: 'text',
  },
  {
    text: 'Average Monthly Cost',
    name: 'average_monthly_cost',
    type: 'result',
    class: 'monthly_cost',
    lastResult: (state) => '$' + ((((12 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval) * 0.03000))+(Math.round(12 * (744 * ((Math.max(Math.ceil(state.inputs.lambda_count / 2),Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval) / 5000) * 10 * 0.017) + ((state.inputs.number_of_devices / state.inputs.data_interval) * 60 * 60 / 1000000 * 0.0165)))))+(Math.ceil(12 * 744 * (state.inputs.lambda_count * Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval / 5000) * 10 * 0.008064)))+(12 * ((5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval))) * 0.0584))+(Math.ceil(12 * (744 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 500)) * 0.11300))))+(12 * ((state.inputs.number_of_devices / state.inputs.data_interval) * 0.12500))+(Math.round(12 * (744 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 1.31300))))+(12 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 100))) / 12)).toFixed(2),
  },
  {
    text: 'Total 1 Year Cost',
    name: 'total_1_year_cost',
    type: 'result',
    class: 'one_year_cost',
    lastResult: (state) => "$" + (((12 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval) * 0.03000))+(Math.round(12 * (744 * ((Math.max(Math.ceil(state.inputs.lambda_count / 2),Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval) / 5000) * 10 * 0.017) + ((state.inputs.number_of_devices / state.inputs.data_interval) * 60 * 60 / 1000000 * 0.0165)))))+(Math.ceil(12 * 744 * (state.inputs.lambda_count * Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval / 5000) * 10 * 0.008064)))+(12 * ((5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval))) * 0.0584))+(Math.ceil(12 * (744 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 500)) * 0.11300))))+(12 * ((state.inputs.number_of_devices / state.inputs.data_interval) * 0.12500))+(Math.round(12 * (744 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 1.31300))))+(12 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 100)))).toFixed(2)
  },
  {
    text: 'Per Device Yearly Cost',
    name: 'per_device_yearly_cost',
    type: 'result',
    class: 'per_device_cost',
    lastResult: (state) => '$' + ((((12 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval) * 0.03000))+(Math.round(12 * (744 * ((Math.max(Math.ceil(state.inputs.lambda_count / 2),Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval) / 5000) * 10 * 0.017) + ((state.inputs.number_of_devices / state.inputs.data_interval) * 60 * 60 / 1000000 * 0.0165)))))+(Math.ceil(12 * 744 * (state.inputs.lambda_count * Math.ceil(state.inputs.number_of_devices / state.inputs.data_interval / 5000) * 10 * 0.008064)))+(12 * ((5 * (0.25 * (state.inputs.number_of_devices / state.inputs.data_interval))) * 0.0584))+(Math.ceil(12 * (744 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 500)) * 0.11300))))+(12 * ((state.inputs.number_of_devices / state.inputs.data_interval) * 0.12500))+(Math.round(12 * (744 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 1.31300))))+(12 * ((Math.ceil((state.inputs.number_of_devices / state.inputs.data_interval) / 1000)) * 100)))  / state.inputs.number_of_devices)).toFixed(2),
  }
];

class ResultTable extends Component {
  constructor(props) {
    super(props);
  };
  renderRow(thisInput) {
    let lastResult;

    switch(thisInput.type) {
      case 'result':
        lastResult = <td className={thisInput.class}>{thisInput.lastResult(this.props.state)}</td>;
        break;
    };
    return (
      <tr key={_.uniqueId()}>
        <td>{thisInput.text}</td>
        {lastResult}
      </tr>
    );
  };

  render() {
    const rows = result_table.map(total => this.renderRow(total));
    return (
      <table className="result_table">
        <tbody>
        { rows }
        </tbody>
      </table>
    )
  };
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(
  mapStateToProps,
)(ResultTable);