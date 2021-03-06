import _ from 'lodash';
import React, {Component} from 'react';
import InputTable from './InputTable';
import ComponentTable from './ComponentsTable';
import ResultTable from './ResultTable';



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
								<img src="http://vngrs.com/img/logo_small.png" alt="VNGRS logo"/>
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
