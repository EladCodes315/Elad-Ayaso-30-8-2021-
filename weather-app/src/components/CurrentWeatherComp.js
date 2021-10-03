import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/slices/favoritesSlice';
import { changeDegree } from '../redux/slices/celciusSlice';
import './CurrentWeatherComp.css';

const CurrentWeatherComp = ({ city }) => {
	const dispatch = useDispatch();
	let { data: geolocationData } = useSelector(state => state.geolocation);
	let { data: currentConditionData } = useSelector(state => state.currentCondition);
	let { data: favorites } = useSelector(state => state.favorites);
	let { data: celcius } = useSelector(state => state.celcius);

	const checkIfFavorite = useCallback(
		() => {
			if (favorites.length === 0) {
				return false;
			}
			else {
				return favorites.some(fav => localStorage.getItem('locationKey') === fav.id);
			}
		},
		[ favorites ]
	);

	const favoritesHandler = useCallback(
		() => {
			if (checkIfFavorite()) {
				dispatch(
					removeFromFavorites({
						id: localStorage.getItem('locationKey')
					})
				);
			}
			else
				dispatch(
					addToFavorites({
						id: localStorage.getItem('locationKey'),
						name: city !== '' ? city : geolocationData.LocalizedName,
						currentWeather: { ...currentConditionData }
					})
				);
		},
		[ dispatch, checkIfFavorite, city, currentConditionData, geolocationData ]
	);

	return (
		<div className="current-location">
			<div className="location-weather-container">
				<div className="location-info">
					{city !== '' ? city : geolocationData.LocalizedName}
					<div className="favorites-icon" onClick={favoritesHandler}>
						{checkIfFavorite() ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
					</div>
				</div>
				<div className="weather-info">
					<div className="degrees-info">
						{celcius ? (
							`${currentConditionData.Temperature.Metric.Value}°${currentConditionData.Temperature.Metric.Unit}`
						) : (
							`${currentConditionData.Temperature.Imperial.Value}°${currentConditionData.Temperature.Imperial.Unit}`
						)}
						<div className="degree-change-btn" onClick={() => dispatch(changeDegree())}>
							|{celcius ? currentConditionData.Temperature.Imperial.Unit : currentConditionData.Temperature.Metric.Unit}
						</div>
					</div>
					<div className="weather-description">{currentConditionData.WeatherText}</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(CurrentWeatherComp);
