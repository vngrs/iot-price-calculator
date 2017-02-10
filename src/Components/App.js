import _ from 'lodash';
import React, {Component} from 'react';
import InputTable from './InputTable';
import ComponentTable from './ComponentsTable';
import { createStore } from 'redux';
import inputs from '../Reducers/inputs'
import components from '../Reducers/components';

let store = createStore(inputs);
let store2 = createStore(components);

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<InputTable />
				<ComponentTable />
			</div>
		);
	}
}

export default App;
