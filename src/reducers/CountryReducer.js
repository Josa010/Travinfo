import { types } from '../types/types';

export const CountryReducer = (state = {}, action) => {
	switch (action.type) {
		case types.setCountryData:
			return {
				...state,
				data: action.payload,
			};

		default:
			return state;
	}
};
