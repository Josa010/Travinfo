import React from 'react';
import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleLanguage = ({ data }) => {
	return (
		<CountryArticleContainer title='Language'>
			<div className='Article-language-container'>
				{data.map((language, index) => (
					<div key={`${language.language}${index}`}>
						<p>
							<span>Language: </span>
							{language.language}
						</p>
						<p>
							<span>Official: </span>
							{language.official}
						</p>
					</div>
				))}
			</div>
		</CountryArticleContainer>
	);
};
