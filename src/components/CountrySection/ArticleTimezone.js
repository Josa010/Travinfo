import React, { useEffect, useState } from 'react';
import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleTimezone = ({ lat, long }) => {
	const key = 'SBYPQC100O6O';
	const TIMEZONE_API = `http://api.timezonedb.com/v2.1/get-time-zone?key=${key}&format=json&by=position&lat=${lat}&lng=${long}`;

	const [data, setData] = useState({});

	useEffect(() => {
		const timezoneFetch = async () => {
			try {
				const response = await fetch(TIMEZONE_API);
				const data = await response.json();
				setData(data);
			} catch (error) {
				console.log(error);
			}
		};

		timezoneFetch();
	}, [TIMEZONE_API]);

	return (
		<CountryArticleContainer title='Timezone'>
			<div className='Article-timezone-container'>
				<p>
					<span>Zone name: </span>
					{data.zoneName}
				</p>
				<p>
					<span>Abbreviation: </span>
					{data.abbreviation}
				</p>
				<p>
					<span>GMT Offset: </span>
					{data.gmtOffset}
				</p>
				<p>
					<span>Current Time: </span>
					{data.formatted}
				</p>
			</div>
		</CountryArticleContainer>
	);
};
