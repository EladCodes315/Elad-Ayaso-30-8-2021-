import React from 'react';
import './ForecastDay.css';

const ForecastDay = ({ daily, getDegreesStr }) => {
	const dayFinder = () => {
		let d = new Date(daily.Date);
		let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
		let day = days[d.getDay()];
		return day;
	};

	return (
		<div className="weather-forecast-item" style={{}}>
			{console.log('Hello from Forecast Comp')}
			<div className="day">{dayFinder()}</div>
			<img src={`https://www.accuweather.com/images/weathericons/${daily.Day.Icon}.svg`} className="w-icon" alt="" />
			<div className="temp">
				{getDegreesStr(daily.Temperature.Minimum.Value)} - {getDegreesStr(daily.Temperature.Maximum.Value)}
			</div>
		</div>
	);
};

export default React.memo(ForecastDay);
