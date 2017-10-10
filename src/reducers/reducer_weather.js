import { FETCH_WEATHER } from '../actions';
import city from './reducer_helper';
	
export default function (state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
		if(!city(state, action.payload.data)) {
			return [ ...state, action.payload.data ]
		}
	}

	return state;
}