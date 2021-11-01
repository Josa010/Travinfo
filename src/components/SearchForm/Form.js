import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import { LoadingButton } from '@mui/lab';

import { startGetCountryData } from '../../actions/search';

import '../../styles/components/SearchForm/Form.css';

export const Form = () => {
	const form = useRef(null);

	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.ui);

	const handleClick = (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			country: formData.get('country'),
		};
		dispatch(startGetCountryData(data));
	};

	return (
		<form
			className='Search-form'
			// onSubmit={handleSubmit}
			ref={form}
		>
			<div className='Search-input-container'>
				<SearchIcon />{' '}
				<input
					disabled={isLoading}
					type='text'
					placeholder='Country'
					name='country'
				/>
			</div>
			<LoadingButton
				onClick={handleClick}
				loading={isLoading}
				loadingIndicator='Loading...'
				variant='outlined'
				type='submit'
			>
				Search
			</LoadingButton>
		</form>
	);
};
