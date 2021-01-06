import React, { Component} from 'react';
import CardList from './CardList'
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1>Robofriends</h1>
				<SearchBox searchChange = {this.onSearchange}/>
				<CardList robots={filteredRobots}/>
			</div>

		);
	}
}

	

export default App;