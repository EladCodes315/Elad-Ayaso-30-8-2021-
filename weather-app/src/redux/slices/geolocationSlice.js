import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const myKey = 'pTlggNCtyjllgOjeA8DqkvFbY7nADvhw';

export const getGeolocation = createAsyncThunk('location/getGeolocation', async (latLonStr, { dispatch, getState }) => {
	const api = {
		base: 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search',
		query: `?apikey=${myKey}&q=${latLonStr}`
	};
	return fetch(api.base + api.query).then(res => res.json());
});

const geolocationSlice = createSlice({
	name: 'geolocation',
	initialState: {
		data: {},
		status: null
	},
	extraReducers: {
		[getGeolocation.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getGeolocation.fulfilled]: (state, { payload }) => {
			state.data = payload;
			state.status = 'success';
		},
		[getGeolocation.rejected]: (state, action) => {
			state.status = 'failed';
		}
	}
});

export default geolocationSlice.reducer;
