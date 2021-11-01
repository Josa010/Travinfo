import React from 'react';
import { AppRouter } from './router/AppRouter';

import './styles/Global.css';

export const App = () => {
	return (
		<div id='app'>
			<AppRouter />
		</div>
	);
};
