import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const myKey = 'tlGPJHqQYAiOnONKrESphRcYcXGTgSpW';

export const getForecast = createAsyncThunk('location/getForecast', async (locationKey, { dispatch, getState }) => {
	const api = {
		base: `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`,
		query: `?apikey=${myKey}`
	};
	return fetch(api.base + api.query).then(res => res.json());
});

const forecastSlice = createSlice({
	name: 'currentCondition',
	initialState: {
		data: [],
		status: null
	},
	extraReducers: {
		[getForecast.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getForecast.fulfilled]: (state, { payload }) => {
			state.data = payload;
			state.status = 'success';
		},
		[getForecast.rejected]: (state, action) => {
			state.status = 'failed';
		}
	}
});

export default forecastSlice.reducer;
