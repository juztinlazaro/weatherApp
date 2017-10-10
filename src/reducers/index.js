import { combineReducers } from 'redux';
import FETCH_WEATHER from '../actions';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
