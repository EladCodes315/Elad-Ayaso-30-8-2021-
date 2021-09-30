import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteCityComp from './FavoriteCityComp';
import './FavoritesScreen.css';

const FavoritesScreen = () => {
	let { data: favoritesData } = useSelector(state => state.favorites);

	return (
		<div className="favoritesscreen">
			{console.log('Hello from Favorites Comp')}
			<h2 className="favorites-headline">My Favorites</h2>
			{favoritesData.length === 0 ? (
				<h5>You Don't Have Any Favorites Yet!</h5>
			) : (
				<div className="favorites-grid">{favoritesData.map((fav, index) => <FavoriteCityComp key={index} fav={fav} />)}</div>
			)}
		</div>
	);
};

export default React.memo(FavoritesScreen);
