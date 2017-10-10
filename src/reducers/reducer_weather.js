import FETCH_WEATHER from '../actions';

export default function (state = [], action) {
	switch (action.type) {
		case 'FETCH_WEATHER':
		state = [ action.payload.data, ...state ];
		return state;
	}

	return state;
}