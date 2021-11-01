import React from 'react';
import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleNeighbors = ({ data }) => {
	return (
		<CountryArticleContainer title='Neighbors'>
			<div className='Article-neighbors-container'>
				<ul>
					{data.neighbors.map((neighbor) => {
						return (
							<li key={neighbor.id}>
								{/* <a href={neighbor.url}>{neighbor.name}</a> */}
								{neighbor.name}
							</li>
						);
					})}
				</ul>
			</div>
		</CountryArticleContainer>
	);
};
