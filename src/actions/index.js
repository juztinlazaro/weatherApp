import axios from 'axios';

const API_KEY = "54755288beb8212b2fd9e7ca2b7399bf";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},US`;
  const request = axios.get(url);
  
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}