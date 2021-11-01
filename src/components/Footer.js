import React from 'react';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';

import '../styles/components/Footer.css';

export const Footer = () => {
	return (
		<footer className='Footer'>
			<Box
				px={{ xs: 3, sm: 10 }}
				py={{ xs: 5, sm: 10 }}
				sx={{ bgcolor: 'info.main' }}
				color='white'
			>
				<Container maxWidth='lg'>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>Api</Box>
							<Box>
								<Link
									href='https://travelbriefing.org/api'
									color='inherit'
								>
									Travel Info
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>Contact</Box>
							<Box>
								<Link href='/' color='inherit'>
									Email
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={1}>Github</Box>
							<Box>
								<Link href='/' color='inherit'>
									Repository
								</Link>
							</Box>
						</Grid>
					</Grid>
					<Box
						textAlign='center'
						pt={{ xs: 5, sm: 10 }}
						pb={{ xs: 5, sm: 0 }}
					>
						Footer by material &reg; {new Date().getFullYear()}
					</Box>
				</Container>
			</Box>
		</footer>
	);
};
