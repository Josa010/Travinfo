import React, { useEffect } from 'react';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleMap = ({ data }) => {
	const { lat, long, zoom } = data;

	const TOKEN =
		'pk.eyJ1Ijoiam9zYTAxMCIsImEiOiJja3ZoMHoyem0xa3NiMnVudWlvcTZmZXBiIn0.9fIsROOkaiuQ-NL_Xdy3sQ';

	mapboxgl.accessToken = TOKEN;

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/mapbox/streets-v11', // style URL
			center: [long, lat], // starting position [lng, lat]
			zoom: zoom, // starting zoom
		});
	}, [lat, long, zoom]);

	return (
		<CountryArticleContainer title='Map'>
			<div className='Article-Map-container'>
				<div id='map'></div>
			</div>
		</CountryArticleContainer>
	);
};
