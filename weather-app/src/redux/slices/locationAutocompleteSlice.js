import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const myKey = 'U00lVIFaDs3DL1PhWC7xyQdiYHE0A34b';

export const getLocationAutocomplete = createAsyncThunk('location/getLocationAutocomplete', async (cityName, { dispatch, getState }) => {
	const api = {
		base: 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete',
		query: `?apikey=${myKey}&q=${cityName}`
	};
	return fetch(api.base + api.query).then(res => res.json());
});

const locationAutocompleteSlice = createSlice({
	name: 'locationAutocomplete',
	initialState: {
		data: [],
		status: null
	},
	extraReducers: {
		[getLocationAutocomplete.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getLocationAutocomplete.fulfilled]: (state, { payload }) => {
			state.data = payload;
			state.status = 'success';
		},
		[getLocationAutocomplete.rejected]: (state, action) => {
			state.status = 'failed';
		}
	}
});

export default locationAutocompleteSlice.reducer;
