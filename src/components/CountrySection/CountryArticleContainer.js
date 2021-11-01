import React from 'react';

export const CountryArticleContainer = ({ title, children }) => {
	return (
		<article className='Country-article'>
			<h2 className='Article-title'>{title}</h2>
			{children}
		</article>
	);
};
