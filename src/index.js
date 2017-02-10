'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './Components/App.js';
import iotCalc from './Reducers';

import './style.scss';

let store = createStore(
	iotCalc,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);