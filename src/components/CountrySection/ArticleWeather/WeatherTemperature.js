import React from 'react';

import {
	VictoryChart,
	VictoryGroup,
	VictoryLine,
	VictoryScatter,
	VictoryTooltip,
	VictoryVoronoiContainer,
} from 'victory';

export const WeatherTemperature = ({ tMaxPoints, tMinPoints, tAvgPoints }) => {
	return (
		<VictoryChart
			height={500}
			containerComponent={<VictoryVoronoiContainer />}
		>
			<VictoryGroup
				color='#c43a31'
				labels={({ datum }) => `${datum.y}°C`}
				labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
				data={tMaxPoints}
			>
				<VictoryLine />
				<VictoryScatter size={({ active }) => (active ? 8 : 3)} />
			</VictoryGroup>
			<VictoryGroup
				color='#bca2f2'
				labels={({ datum }) => `${datum.y}°C`}
				labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
				data={tMinPoints}
			>
				<VictoryLine />
				<VictoryScatter size={({ active }) => (active ? 8 : 3)} />
			</VictoryGroup>
			<VictoryGroup
				color='#3f2'
				labels={({ datum }) => `${datum.y}°C`}
				labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
				data={tAvgPoints}
			>
				<VictoryLine />
				<VictoryScatter size={({ active }) => (active ? 8 : 3)} />
			</VictoryGroup>
		</VictoryChart>
	);
};
