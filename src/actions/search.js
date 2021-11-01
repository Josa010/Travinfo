import { types } from '../types/types';
import { setError, setLoading } from './ui';

export const startGetCountryData = ({ country }) => {
	const API = 'https://travelbriefing.org/';

	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const response = await fetch(`${API}${country}?format=json`);
			const data = await response.json();
			dispatch(setCountryData(data));
			dispatch(setLoading(false));
			dispatch(setError(null));
		} catch (error) {
			dispatch(setError(error));
			dispatch(setLoading(false));
		}
	};
};

export const setCountryData = (data) => {
	return {
		type: types.setCountryData,
		payload: data,
	};
};
