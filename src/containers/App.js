import React, { Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

import { setSearchField, requestRobots} from '../actions.js';


const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
	
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onSearchange: (event) => dispatch(setSearchField(event.target.value)),
  	onRequestRobots: () => dispatch(requestRobots())
  } 
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({ robots: users})});
	}

	render() {
		const { robots } = this.state;
		
		const { searchField, onSearchange } = this.props;

		const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		if(!robots.length) {
			return <h1>Loading.....</h1>
		} else {
			return (
			<div className='tc'>
				<h1>Robofriends</h1>
				<SearchBox searchChange = {onSearchange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		); 
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);