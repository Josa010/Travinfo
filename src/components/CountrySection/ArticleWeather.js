import React from 'react';
import { WeatherTemperature } from './ArticleWeather/WeatherTemperature';
import { WeatherPrecipitation } from './ArticleWeather/WeatherPrecipitation';
import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleWeather = ({ data }) => {
	const dataKeys = Object.keys(data);
	const tMaxPoints = [];
	for (let i = 0; i < dataKeys.length; i++) {
		tMaxPoints.push({
			x: dataKeys[i].slice(0, 3),
			y: parseInt(data[dataKeys[i]].tMin),
		});
	}

	const tMinPoints = [];
	for (let i = 0; i < dataKeys.length; i++) {
		tMinPoints.push({
			x: dataKeys[i].slice(0, 3),
			y: parseInt(data[dataKeys[i]].tMax),
		});
	}

	const tAvgPoints = [];
	for (let i = 0; i < dataKeys.length; i++) {
		tAvgPoints.push({
			x: dataKeys[i].slice(0, 3),
			y: parseInt(data[dataKeys[i]].tAvg),
		});
	}

	const pMaxPoints = [];
	for (let i = 0; i < dataKeys.length; i++) {
		pMaxPoints.push({
			x: dataKeys[i].slice(0, 3),
			y: parseInt(data[dataKeys[i]].pMax),
		});
	}

	const pMinPoints = [];
	for (let i = 0; i < dataKeys.length; i++) {
		pMinPoints.push({
			x: dataKeys[i].slice(0, 3),
			y: parseInt(data[dataKeys[i]].pMin),
		});
	}

	const pAvgPoints = [];
	for (let i = 0; i < dataKeys.length; i++) {
		pAvgPoints.push({
			x: dataKeys[i].slice(0, 3),
			y: parseInt(data[dataKeys[i]].pAvg),
		});
	}

	return (
		<CountryArticleContainer title='Weather'>
			<div className='Article-weather-container'>
				<h3>Temperature in the next months (°C)</h3>
				<WeatherTemperature
					tMaxPoints={tMaxPoints}
					tAvgPoints={tAvgPoints}
					tMinPoints={tMinPoints}
				/>

				<h3>Precipitation in the next months (mm)</h3>
				<WeatherPrecipitation
					pMaxPoints={pMaxPoints}
					pAvgPoints={pAvgPoints}
					pMinPoints={pMinPoints}
				/>
			</div>
		</CountryArticleContainer>
	);
};
