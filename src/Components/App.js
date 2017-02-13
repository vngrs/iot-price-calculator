import _ from 'lodash';
import React, {Component} from 'react';
import InputTable from './InputTable';
import ComponentTable from './ComponentsTable';
import ResultTable from './ResultTable';
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
				<div className="logo_div">
					<img className="vngrs_logo" src="http://vngrs.com/img/logo.png" alt=""/>
				</div>
				<InputTable />
				<ComponentTable />
				<ResultTable />
			</div>
		);
	}
}

export default App;
