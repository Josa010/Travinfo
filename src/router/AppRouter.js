import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from '../components/Footer';

import Layout from '../containers/Layout';
import { About } from '../pages/About';
import { Home } from '../pages/Home';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Layout>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
					</Switch>
				</Layout>
				<Footer />
			</div>
		</Router>
	);
};
