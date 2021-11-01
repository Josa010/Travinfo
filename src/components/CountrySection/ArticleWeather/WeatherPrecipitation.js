import React from 'react';

import {
	VictoryChart,
	VictoryGroup,
	VictoryLine,
	VictoryScatter,
	VictoryTooltip,
	VictoryVoronoiContainer,
} from 'victory';

export const WeatherPrecipitation = ({
	pMaxPoints,
	pMinPoints,
	pAvgPoints,
}) => {
	return (
		<VictoryChart
			height={500}
			containerComponent={<VictoryVoronoiContainer />}
		>
			<VictoryGroup
				color='#c43a31'
				labels={({ datum }) => `${datum.y}mm`}
				labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
				data={pMaxPoints}
			>
				<VictoryLine />
				<VictoryScatter size={({ active }) => (active ? 8 : 3)} />
			</VictoryGroup>
			<VictoryGroup
				color='#bca2f2'
				labels={({ datum }) => `${datum.y}mm`}
				labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
				data={pMinPoints}
			>
				<VictoryLine />
				<VictoryScatter size={({ active }) => (active ? 8 : 3)} />
			</VictoryGroup>
			<VictoryGroup
				color='#3f2'
				labels={({ datum }) => `${datum.y}mm`}
				labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
				data={pAvgPoints}
			>
				<VictoryLine />
				<VictoryScatter size={({ active }) => (active ? 8 : 3)} />
			</VictoryGroup>
		</VictoryChart>
	);
};
