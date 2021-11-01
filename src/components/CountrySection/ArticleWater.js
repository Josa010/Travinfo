import React from 'react';
import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleWater = ({ data }) => {
	return (
		<CountryArticleContainer title='Water'>
			<div className='Article-water-container'>
				<p>
					<span>Drink water from the tap: </span>
					{data.short}
				</p>
			</div>
		</CountryArticleContainer>
	);
};
