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
    cb: (state) => state.number_of_devices / state.data_interval
  }
];

function debounceEventHandler(...args) {
  const debounced = _.debounce(...args)
  return function(e, ...args) {
    e.persist()
    return debounced(e, ...args)
  }
}

class InputTable extends Component {
  constructor(props) {
    super(props);
  }

  renderRow(thisInput) {
    let secondTd;

    switch(thisInput.type) {
      case 'number_input':
        secondTd = this.renderNumberInput(thisInput);
        break;
      case 'result':
        secondTd = <div ref={thisInput.name}>{thisInput.cb(this.props.inputs)}</div>
        break;
    }

    return (
			<tr key={_.uniqueId()}>
				<td>{thisInput.text}</td>
				<td>{secondTd}</td>
			</tr>
    );
  }

  renderNumberInput(thisInput) {
    return (
			<input
				key={_.uniqueId()}
				type="number"
				name={thisInput.name}
				onChange={ debounceEventHandler(this.changeInput.bind(this, thisInput.action, thisInput.name), 50) }
				defaultValue={ this.props.inputs[thisInput.name] }
			/>
    );
  }

  changeInput(action, name, event) {
    this.props[action](event.target.value);
  }

  render() {
    const rows = input_table.map(input => this.renderRow(input));

    return (
			<table>
				<tbody>
        {rows}
				</tbody>
			</table>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    inputs: state.inputs,
		components: state.components
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDevicesChange: (num) => {
      dispatch(set_number_of_devices(num));
      dispatch()
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
