import React, {Component} from 'react';
import { headings, firstData, secondData, thirdData, fourthData, fifthData, sixthData, seventhData, eightData, ninthData, totalString, averageMonthlyCost, totalYearlyCost, perDeviceCost} from '../Helpers/tableData';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<table>
			<tbody>
				<tr>
				{headings.map(function(heading, index){
					return <th key={index}>{heading}</th>
				})}
				</tr>
				<tr>
					{firstData.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{secondData.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{thirdData.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{fourthData.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{fifthData.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{sixthData.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{seventhData.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{eightData.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{ninthData.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{totalString.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{averageMonthlyCost.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{totalYearlyCost.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				<tr>
					{perDeviceCost.map(function(data, index){
					return <td key={index}>{data}</td>
				})}
				</tr>
				</tbody>
			</table>)
	}
}

export default App