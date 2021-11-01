import React from 'react';
import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleVaccination = ({ data }) => {
	return (
		<CountryArticleContainer title='Vaccinations'>
			<div className='Article-vaccination-container'>
				{data.map((vaccination, index) => {
					return (
						<p key={`${vaccination.name}${index}`}>
							<span>{vaccination.name} </span>
							<br />
							{vaccination.message}
						</p>
					);
				})}
			</div>
		</CountryArticleContainer>
	);
};
