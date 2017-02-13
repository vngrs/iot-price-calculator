import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { set_data_interval, set_number_of_devices, set_lambda_function_count } from '../Actions/inputTable.js';

const input_table = [
  {
    text: 'Number of Devices',
    name: 'number_of_devices',
    type: 'number_input',
    action: 'onDevicesChange'
  },
  {
    text: 'Data Sending Interval (sec)',
    name: 'data_interval',
    type: 'number_input',
    action: 'onIntervalChange'
  },
  {
    text: 'Lambda Function Count',
    name: 'lambda_count',
    type: 'number_input',
    action: 'onLambdaCountChange'
  },
  {
    text: 'Data volume per second',
    name: 'data_volume_per_second',
    type: 'result',
    cb: (state) => (state.number_of_devices / state.data_interval).toFixed(2)
  }
];

function debounceEventHandler(...args) {
  const debounced = _.debounce(...args)
  return function(e, ...args) {
    e.persist();
    return debounced(e, ...args)
  };
};

class InputTable extends Component {
  constructor(props) {
    super(props);
  };

  renderRow(thisInput) {
    let values;

    switch(thisInput.type) {
      case 'number_input':
        values = this.renderNumberInput(thisInput);
        break;
      case 'result':
        values = <div ref={thisInput.name}>{thisInput.cb(this.props.inputs)}</div>;
        break;
    };
    return (
			<tr key={`tr_key_${thisInput.name}`}>
				<td>{thisInput.text}</td>
				<td>{values}</td>
			</tr>
    );
  };
  renderNumberInput(thisInput, index) {
    return (
			<input
				key={index}
				type="number"
				name={thisInput.name}
				onChange={ debounceEventHandler(this.changeInput.bind(this, thisInput.action, thisInput.name), 500) }
				defaultValue={ this.props.inputs[thisInput.name] }
			/>
    );
  };

  changeInput(action, name, event) {
    this.props[action](event.target.value);
  };

  render() {
    let self = this;
    const rows = input_table.map(function(input) {
      return self.renderRow(input);
    });

    return (
			<table className="input_table">
				<tbody>
        <tr><th>Variables</th></tr>
        {rows}
				</tbody>
			</table>
    );

  };
};

const mapStateToProps = (state) => {
  return {
    inputs: state.inputs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDevicesChange: (num) => {
      dispatch(set_number_of_devices(num));
    },
    onIntervalChange: (num) => {
      dispatch(set_data_interval(num));
    },
    onLambdaCountChange: (num) => {
      dispatch(set_lambda_function_count(num));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTable);
