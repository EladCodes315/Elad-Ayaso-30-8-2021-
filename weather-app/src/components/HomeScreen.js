import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationAutocomplete } from '../redux/slices/locationAutocompleteSlice';
import { getCurrentCondition } from '../redux/slices/currentConditionSlice';
import { getForecast } from '../redux/slices/forecastSlice';
import { getGeolocation } from '../redux/slices/geolocationSlice';
import ForecastDay from './ForecastDay';
import CurrentWeatherComp from './CurrentWeatherComp';
import { FormControl, InputGroup, Modal, Spinner } from 'react-bootstrap';
import './HomeScreen.css';

const HomeScreen = ({ match }) => {
	const [ query, setQuery ] = useState('');
	const [ displaySuggestionBox, setDisplaySuggestionBox ] = useState(false);
	const [ city, setCity ] = useState('');
	const [ celcius, setCelcius ] = useState(false);
	const dispatch = useDispatch();
	let { data: currentConditionData } = useSelector(state => state.currentCondition);
	let { data: forecastData } = useSelector(state => state.forecast);
	let { data: locationAutocompleteData } = useSelector(state => state.locationAutocomplete);
	let { data: geolocationData } = useSelector(state => state.geolocation);
	let { data: favorites } = useSelector(state => state.favorites);

	useEffect(() => {
		if (match.params.id !== undefined) {
			dispatch(getGeolocation('32.045, 34.77'));
			dispatch(getCurrentCondition(match.params.id));
			dispatch(getForecast(match.params.id));
			localStorage.setItem('locationKey', match.params.id);
			console.log(localStorage.getItem('locationKey'));
			setCity(favorites.find(fav => fav.id === match.params.id).name);
		}
		else {
			dispatch(getGeolocation('32.045, 34.77'));
			dispatch(getCurrentCondition('215854'));
			dispatch(getForecast('215854'));
			localStorage.setItem('locationKey', '215854');
			setCity('');
		}
	}, []);

	const search = async cityName => {
		dispatch(getLocationAutocomplete(cityName));
	};

	const getDegreesStr = fahren => {
		if (celcius) {
			let calcCelcius = (fahren - 32) / 1.8;
			return `${calcCelcius.toFixed(1)}°C`;
		}
		else return `${fahren.toFixed(1)}°F`;
	};

	const clickSuggestion = location => {
		setQuery(location.LocalizedName);
		dispatch(getCurrentCondition(location.Key));
		dispatch(getForecast(location.Key));
		setCity(location.LocalizedName);
		localStorage.setItem('locationKey', location.Key);
	};

	const suggestionBoxHandler = () => {
		if (displaySuggestionBox) {
			setDisplaySuggestionBox(false);
		}
	};

	return (
		<div className="homescreen" onClick={suggestionBoxHandler}>
			<InputGroup className="input-group" style={{ width: '350px' }}>
				<FormControl
					className="input-textfield"
					placeholder="Enter city here"
					value={query}
					onClick={() => setDisplaySuggestionBox(true)}
					onChange={event => {
						search(event.target.value);
						setQuery(event.target.value);
					}}
					autoComplete="off"
				/>
			</InputGroup>
			{displaySuggestionBox && locationAutocompleteData.length > 0 ? (
				<div className="autocomplete-container">
					{locationAutocompleteData.map((location, index) => {
						return (
							<div className="option" key={index} onClick={() => clickSuggestion(location)} tabIndex="0">
								<span>
									{location.LocalizedName}, {location.Country.LocalizedName}
								</span>
							</div>
						);
					})}
				</div>
			) : (
				<div />
			)}

			{currentConditionData.WeatherText === undefined || forecastData.DailyForecasts === undefined || geolocationData.Key === undefined ? (
				<Spinner animation="border" style={{ marginTop: '50px' }} />
			) : currentConditionData.status === 'failed' || currentConditionData.status === 'failed' || geolocationData.status === 'failed' ? (
				alert('Server Failed To Fetch From API!!!')
			) : (
				<div className="weather-container">
					<CurrentWeatherComp city={city} celcius={celcius} setCelcius={setCelcius} getDegreesStr={getDegreesStr} />

					<div className="forecast-info">
						{forecastData.DailyForecasts.map((daily, index) => <ForecastDay key={index} daily={daily} getDegreesStr={getDegreesStr} />)}
					</div>
				</div>
			)}
		</div>
	);
};
export default HomeScreen;
