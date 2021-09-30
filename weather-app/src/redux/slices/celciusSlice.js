import { createSlice } from '@reduxjs/toolkit';

export const celciusSlice = createSlice({
	name: 'celcius',
	initialState: {
		data: false
	},
	reducers: {
		changeDegree: (state, action) => {
			state.data = !state.data;
		}
	}
});

export const { changeDegree } = celciusSlice.actions;

export default celciusSlice.reducer;
