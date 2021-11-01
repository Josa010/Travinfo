import React from 'react';
import { useSelector } from 'react-redux';
import { CountrySection } from '../components/CountrySection/CountrySection';
import { Form } from '../components/SearchForm/Form';

import '../styles/pages/Home.css';

export const Home = () => {
	const country = useSelector((state) => state.country);

	return (
		<div>
			<p>
				Are you about to travel to an unknown country? well, you can
				know everything about that country only in a few seconds!
			</p>

			<Form />
			{country.data && <CountrySection data={country.data} />}
		</div>
	);
};
