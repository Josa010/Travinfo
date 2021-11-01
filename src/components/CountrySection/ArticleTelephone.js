import React from 'react';
import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleTelephone = ({ data }) => {
	return (
		<CountryArticleContainer title='Telephone'>
			<div className='Article-telephone-container'>
				<p>
					<span>Calling code: </span>
					{data.calling_code}
				</p>
				<p>
					<span>Police: </span>
					{data.police}
				</p>
				<p>
					<span>Ambulance: </span>
					{data.ambulance}
				</p>
				<p>
					<span>Fire: </span>
					{data.fire}
				</p>
			</div>
		</CountryArticleContainer>
	);
};
