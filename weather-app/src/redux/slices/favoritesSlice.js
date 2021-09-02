import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		data: [],
		status: null
	},
	reducers: {
		addToFavorites: (state, action) => {
			state.data.push(action.payload);
		},
		removeFromFavorites: (state, action) => {
			let favoritesArr = [ ...state.data ];
			state.data = favoritesArr.filter(fav => fav.id !== action.payload.id);
		}
	}
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
