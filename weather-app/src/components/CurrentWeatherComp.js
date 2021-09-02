import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/slices/favoritesSlice';
import './CurrentWeatherComp.css';

const CurrentWeatherComp = ({ celcius, setCelcius, city, getDegreesStr }) => {
	const dispatch = useDispatch();
	let { data: geolocationData } = useSelector(state => state.geolocation);
	let { data: currentConditionData } = useSelector(state => state.currentCondition);
	let { data: favorites } = useSelector(state => state.favorites);

	const checkIfFavorite = () => {
		if (favorites.length === 0) {
			return false;
		}
		else {
			let check = favorites.some(fav => localStorage.getItem('locationKey') === fav.id);
			return check;
		}
	};

	const favoritesHandler = () => {
		if (checkIfFavorite()) {
			dispatch(
				removeFromFavorites({
					id: localStorage.getItem('locationKey') !== null ? localStorage.getItem('locationKey') : geolocationData.Key
				})
			);
		}
		else
			dispatch(
				addToFavorites({
					id: localStorage.getItem('locationKey') !== null ? localStorage.getItem('locationKey') : geolocationData.Key,
					name: city !== '' ? city : geolocationData.LocalizedName,
					currentWeather: { ...currentConditionData }
				})
			);
	};

	return (
		<div className="current-location">
			<div className="location-weather-container">
				<div className="location-info">
					{city === '' ? geolocationData.LocalizedName : city}
					<div className="favorites-icon" onClick={favoritesHandler}>
						{checkIfFavorite() ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
					</div>
				</div>
				<div className="weather-info">
					<div className="degrees-info">
						{getDegreesStr(currentConditionData.Temperature.Imperial.Value)}
						<div className="degree-change-btn" onClick={() => setCelcius(!celcius)}>
							|{celcius ? currentConditionData.Temperature.Imperial.Unit : currentConditionData.Temperature.Metric.Unit}
						</div>
					</div>
					<div className="weather-description">{currentConditionData.WeatherText}</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeatherComp;
