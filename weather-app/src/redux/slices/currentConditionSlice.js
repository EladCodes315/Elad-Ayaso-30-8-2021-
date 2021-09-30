import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const myKey = 'pTlggNCtyjllgOjeA8DqkvFbY7nADvhw';

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
		status: null
	},
	extraReducers: {
		[getCurrentCondition.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getCurrentCondition.fulfilled]: (state, { payload }) => {
			state.data = payload[0];
			state.status = 'success';
		},
		[getCurrentCondition.rejected]: (state, action) => {
			state.status = 'failed';
		}
	}
});

export default currentConditionSlice.reducer;
