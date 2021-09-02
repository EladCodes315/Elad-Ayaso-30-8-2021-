import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const myKey = 'U00lVIFaDs3DL1PhWC7xyQdiYHE0A34b';

export const getCurrentCondition = createAsyncThunk('location/getCurrentCondition', async (locationKey, { dispatch, getState }) => {
	const api = {
		base: `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
		query: `?apikey=${myKey}`
	};
	return fetch(api.base + api.query).then(res => res.json());
});

const currentConditionSlice = createSlice({
	name: 'currentCondition',
	initialState: {
		data: {},
		favoritesConditions: [],
		status: null
	},
	extraReducers: {
		[getCurrentCondition.pending]: (state, action) => {
			state.status = 'Get location conditions loading';
		},
		[getCurrentCondition.fulfilled]: (state, { payload }) => {
			state.data = payload[0];
			state.status = 'Get location conditions success';
		},
		[getCurrentCondition.rejected]: (state, action) => {
			state.status = 'Get location conditions failed';
		},
		removeFromFavoritesConditions: (state, action) => {
			let favoritesConditionsArr = [ ...state.favoritesConditions ];
			state.favoritesConditions = favoritesConditionsArr.filter(fav => fav.id === action.payload.id);
		}
	}
});

export default currentConditionSlice.reducer;
