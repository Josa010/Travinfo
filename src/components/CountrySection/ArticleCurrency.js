import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import { CountryArticleContainer } from './CountryArticleContainer';

export const ArticleCurrency = ({ data }) => {
	const currencies = [...data.compare];
	const currentRate = data.rate;

	const [currency, setCurrency] = useState(currencies[151].rate);
	const [acutualCountryCurrency, setAcutualCountryCurrency] = useState(1);
	const [result, setResult] = useState(0);

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	const handleCountryCurrencyChange = (e) => {
		setAcutualCountryCurrency(e.target.value);
	};

	useEffect(() => {
		const value = (acutualCountryCurrency / currentRate) * currency;
		setResult(value);
	}, [acutualCountryCurrency, currentRate, currency]);

	return (
		<CountryArticleContainer title='Currency'>
			<div className='Article-currency-container'>
				<p>
					<span>Name: </span>
					{data.name}
				</p>
				<p>
					<span>Code: </span>
					{data.code}
				</p>
				<p>
					<span>Symbol: </span>
					{data.symbol}
				</p>

				<Box
					component='form'
					sx={{ '& .MuiTextField-root': { mt: 3, width: '25ch' } }}
					noValidate
					autoComplete='off'
				>
					<div>
						<TextField
							id='outlined-number'
							label={data.name}
							sx={{ mb: 2 }}
							type='number'
							value={acutualCountryCurrency}
							onChange={handleCountryCurrencyChange}
							InputLabelProps={{
								shrink: true,
							}}
						/>

						<Divider />

						<TextField
							id='outlined-select-currency'
							select
							label='To'
							value={currency}
							onChange={handleChange}
							helperText='Please select your currency'
						>
							{currencies.map((option) => (
								<MenuItem
									key={`${option.rate}${option.name}`}
									value={option.rate}
								>
									{option.name}
								</MenuItem>
							))}
						</TextField>

						<TextField
							label='Equals to'
							variant='filled'
							value={result}
							color='success'
							focused
						/>
					</div>
				</Box>
			</div>
		</CountryArticleContainer>
	);
};
