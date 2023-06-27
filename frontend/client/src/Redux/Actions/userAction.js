import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk(
	'users/register',
	async ({ first_name, last_name, email, password, re_password }, thunkAPI) => {
		const body = JSON.stringify({
			first_name,
			last_name,
			email,
			password,
			re_password,
		});
{console.log("entre al post del register")}
		try {
			const res = await axios.post('/api/users/register', body, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			});

			const data = res.data;

			if (res.status === 201) {
				return data;
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data);
		}
	}
);

export const getUser = createAsyncThunk('users/me', async (_, thunkAPI) => {
	try {
		const res = await axios.get('/api/users/me', {
			headers: {
				Accept: 'application/json',
			},
		});
		{console.log("entre al get del getuser")}
		const data = res.data;

		if (res.status === 200) {
			return data;
		} else {
			return thunkAPI.rejectWithValue(data);
		}
	} catch (err) {
		return thunkAPI.rejectWithValue(err.response.data);
	}
});

export const login = createAsyncThunk(
	'users/login',
	async ({ email, password }, thunkAPI) => {
		const body = JSON.stringify({
			email,
			password,
		});

		try {
			const res = await axios.post('/api/users/login', body, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			});
{console.log("entre al post del login")}
			const data = res.data;

			if (res.status === 200) {
				const { dispatch } = thunkAPI;

				dispatch(getUser());

				return data;
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data);
		}
	}
);

export const checkAuth = createAsyncThunk(
	'users/verify',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get('/api/users/verify', {
				headers: {
					Accept: 'application/json',
				},
			});
			{console.log("entre al get del checkAuth")}
			const data = res.data;

			if (res.status === 200) {
				const { dispatch } = thunkAPI;

				dispatch(getUser());

				return data;
			} else {
				return thunkAPI.rejectWithValue(data);
			}
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data);
		}
	}
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
	try {
		const res = await axios.get('/api/users/logout', {
			headers: {
				Accept: 'application/json',
			},
		});
		{console.log("entre al get del logout")}
		const data = res.data;

		if (res.status === 200) {
			return data;
		} else {
			return thunkAPI.rejectWithValue(data);
		}
	} catch (err) {
		return thunkAPI.rejectWithValue(err.response.data);
	}
});