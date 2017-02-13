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
				<div className="nav-container">
					<nav className="sticky">
						<div id="logo_small">
							<a href="http://vngrs.com">
								<img src="./src/Assets/logo_small.png" alt="VNGRS logo"/>
							</a>
						</div>
						<ul>
							<li><a href="http://vngrs.com">Home</a></li>
							<li><a href="http://vngrs.com/#about">About Us</a></li>
							<li><a href="http://vngrs.com/#join">Join Us</a></li>
							<li><a href="http://vngrs.com/#start_project">Contact</a></li>
							<li><a href="http://blog.vngrs.com" target="_blank">Blog</a></li>
						</ul>
					</nav>
				</div>
				<InputTable />
				<ComponentTable />
				<ResultTable />
			</div>
		);
	}
}

export default App;
