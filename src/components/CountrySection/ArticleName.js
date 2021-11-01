import React from 'react';
import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleName = ({ data }) => {
	const iso2 = data.names.iso2.toLowerCase();
	const flag = `https://flagcdn.com/${iso2}.svg`;

	return (
		<CountryArticleContainer title={data.names.name}>
			<div className='Article-name-container'>
				<div className='Img-container'>
					<img src={flag} alt={data.names.name} />
				</div>
				<div className='Name-info-container'>
					<p>
						<span>Full name:</span> {data.names.full}
					</p>
					<p>
						<span>Continent:</span> {data.names.continent}
					</p>
				</div>
			</div>
		</CountryArticleContainer>
	);
};
