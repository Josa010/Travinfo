import React from 'react';
import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleAdvise = ({ data }) => {
	const dataKeys = Object.keys(data);
	const advices = [];

	const sliceWord = (word) => {
		const sliceEnd = word.indexOf('<', 2);
		const sliceStart = word.indexOf('>', 2);
		if (word.indexOf('<', 2) !== -1) {
			const wordSliced = word.slice(sliceStart + 1, sliceEnd);
			return wordSliced;
		}
		return word;
	};

	for (let i = 0; i < dataKeys.length; i++) {
		const word = data[dataKeys[i]].advise;

		const advise = sliceWord(word);

		advices.push({
			country: dataKeys[i],
			advise: advise,
			url: data[dataKeys[i]].url,
		});
	}

	return (
		<CountryArticleContainer title='Advices'>
			<div className='Article-advise-container'>
				{advices.map((advise, index) => (
					<div key={`${advise.country}${index}`}>
						<p>
							<span>{advise.country}: </span>
							{advise.advise}
						</p>
						<a
							href={advise.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							More info
						</a>
						<br />
						<br />
					</div>
				))}
			</div>
		</CountryArticleContainer>
	);
};
