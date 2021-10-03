import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './FavoriteCityComp.css';

const FavoriteCityComp = ({ fav }) => {
	let { data: celcius } = useSelector(state => state.celcius);

	return (
		<div className="favorite-location">
			<div className="location-name">
				<Link to={`/Elad-Ayaso-30-8-2021-/${fav.id}`}>{fav.name}</Link>
			</div>
			<div className="location-degree">
				{celcius ? (
					`${fav.currentWeather.Temperature.Metric.Value}°${fav.currentWeather.Temperature.Metric.Unit}`
				) : (
					`${fav.currentWeather.Temperature.Imperial.Value}°${fav.currentWeather.Temperature.Imperial.Unit}`
				)}
			</div>
			<img
				src={`https://www.accuweather.com/images/weathericons/${fav.currentWeather.WeatherIcon}.svg`}
				className="w-icon"
				width="80px"
				height="80px"
				alt=""
			/>
		</div>
	);
};

export default React.memo(FavoriteCityComp);
