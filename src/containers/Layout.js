import React from 'react';

import { Header } from '../components/Header';

import '../styles/containers/Layout.css';

const Layout = ({ children }) => {
	return (
		<div className='Layout-container'>
			<Header>{children}</Header>
		</div>
	);
};

export default Layout;
