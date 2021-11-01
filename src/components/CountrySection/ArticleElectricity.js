import React from 'react';
import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleElectricity = ({ data }) => {
	return (
		<CountryArticleContainer title='Electricity'>
			<div className='Article-electricity-container'>
				<p>
					<span>Voltage: </span>
					{data.voltage}
				</p>
				<p>
					<span>Frequency: </span>
					{data.frequency}
				</p>
				{data.plugs.map((plug, index) => (
					<p key={`${plug}${index}`}>
						<span>Plug {index + 1}: </span>
						{plug}
					</p>
				))}
			</div>
		</CountryArticleContainer>
	);
};
