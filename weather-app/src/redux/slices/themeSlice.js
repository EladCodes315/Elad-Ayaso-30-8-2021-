import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		data: 'dark'
	},
	reducers: {
		changeTheme: (state, action) => {
			if (state.data === 'dark') {
				state.data = 'light';
			}
			else {
				state.data = 'dark';
			}
		}
	}
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
