import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<h2>
					Get a five-day forecast in your favorite city
				</h2>
				
      	<SearchBar />
        <WeatherList />
      </div>
    );
  }
}
