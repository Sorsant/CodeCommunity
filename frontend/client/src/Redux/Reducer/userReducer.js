import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { register, getUser, checkAuth, login, logout } from '../Actions/userAction';


const initialState = {
	isAuthenticated: false,
	user: null,
	loading: false,
	registered: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetRegistered: state => {
			state.registered = false;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.loading = true;
			})
			.addCase(register.fulfilled, state => {
				state.loading = false;
				state.registered = true;
			})
			.addCase(register.rejected, state => {
				state.loading = false;
			})
			.addCase(login.pending, state => {
				state.loading = true;
			})
			.addCase(login.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = true;
			})
			.addCase(login.rejected, state => {
				state.loading = false;
			})
			.addCase(getUser.pending, state => {
				state.loading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(getUser.rejected, state => {
				state.loading = false;
			})
			.addCase(checkAuth.pending, state => {
				state.loading = true;
			})
			.addCase(checkAuth.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = true;
			})
			.addCase(checkAuth.rejected, state => {
				state.loading = false;
			})
			.addCase(logout.pending, state => {
				state.loading = true;
			})
			.addCase(logout.fulfilled, state => {
				state.loading = false;
				state.isAuthenticated = false;
				state.user = null;
			})
			.addCase(logout.rejected, state => {
				state.loading = false;
			});
	},
});

export const { resetRegistered } = userSlice.actions;
export default userSlice.reducer;