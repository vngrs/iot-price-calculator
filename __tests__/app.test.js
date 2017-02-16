import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from '../src/Components/App';
import iotCalc from '../src/Reducers/index';
import '../src/style.scss';


describe('Amazon Web Services IoT Tests: ', function() {
  let div = document.createElement('div');
  div.setAttribute('id', 'root');
  document.querySelector('body').appendChild(div);
  let store = createStore(iotCalc, {
    inputs: {
      number_of_devices: 1000,
      data_interval: 20,
      lambda_count: 2
    }
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  it('1st Test - It should give "Average Monthly Cost" as $1419.86 when Number of Devices = 1000, Data Sending Interval = 20 and Lambda Function = 2', function(){
    const monthly_cost = document.querySelector('.monthly_cost').innerHTML;
    expect(monthly_cost).to.equal('$1419.86');
  });
  it('2nd Test - It should give "Total 1 Year Cost" as $17038.30 when Number of Devices = 1000, Data Sending Interval = 20 and Lambda Function = 2', function(){
    const total_year = document.querySelector('.one_year_cost').innerHTML;
    expect(total_year).to.equal('$17038.30');
  });

  it('3rd Test - It should give "Per Device Yearly Cost" as $17.04 when Number of Devices = 1000, Data Sending Interval = 20 and Lambda Function = 2', function(){
    const per_device = document.querySelector('.per_device_cost').innerHTML;
    expect(per_device).to.equal('$17.04');
  });
});

