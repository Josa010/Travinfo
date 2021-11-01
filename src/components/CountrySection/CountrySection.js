import React from 'react';

import '../../styles/components/CountrySection/CountrySection.css';
import { ArticleAdvise } from './ArticleAdvise';
import { ArticleCurrency } from './ArticleCurrency';
import { ArticleElectricity } from './ArticleElectricity';
import { ArticleLanguage } from './ArticleLanguage';
import { ArticleMap } from './ArticleMap';
import { ArticleName } from './ArticleName';
import { ArticleNeighbors } from './ArticleNeighbors';
import { ArticleTelephone } from './ArticleTelephone';
import { ArticleTimezone } from './ArticleTimezone';
import { ArticleVaccination } from './ArticleVaccination';
import { ArticleWater } from './ArticleWater';
import { ArticleWeather } from './ArticleWeather';

export const CountrySection = ({ data }) => {
	return (
		<section className='CountryInfo-container'>
			<ArticleName data={data} />
			<ArticleNeighbors data={data} />
			<ArticleMap data={data.maps} />
			<ArticleTimezone lat={data.maps.lat} long={data.maps.long} />
			<ArticleLanguage data={data.language} />
			<ArticleElectricity data={data.electricity} />
			<ArticleTelephone data={data.telephone} />
			<ArticleWater data={data.water} />
			<ArticleVaccination data={data.vaccinations} />
			<ArticleCurrency data={data.currency} />
			<ArticleWeather data={data.weather} />
			<ArticleAdvise data={data.advise} />
		</section>
	);
};
