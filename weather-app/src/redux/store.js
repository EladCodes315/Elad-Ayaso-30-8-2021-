import { configureStore } from '@reduxjs/toolkit';
import currentConditionReducer from './slices/currentConditionSlice';
import locationAutocompleteReducer from './slices/locationAutocompleteSlice';
import forecastReducer from './slices/forecastSlice';
import geolocationReducer from './slices/geolocationSlice';
import favoritesReducer from './slices/favoritesSlice';

export default configureStore({
	reducer: {
		currentCondition: currentConditionReducer,
		locationAutocomplete: locationAutocompleteReducer,
		forecast: forecastReducer,
		geolocation: geolocationReducer,
		favorites: favoritesReducer
	}
});
