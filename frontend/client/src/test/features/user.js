import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const register = createAsyncThunk(
	'users/register',
	async ({ first_name, last_name, email, password }, thunkAPI) => {
		const body = JSON.stringify({
			first_name,
			last_name,
			email,
			password,
		});

		try {
			const res = await fetch('/api/users/register', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body,
			});

			const data = await res.json();

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

const getUser = createAsyncThunk('users/me', async (_, thunkAPI) => {
	try {
		const res = await fetch('/api/users/me', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});

		const data = await res.json();

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
			const res = await fetch('/api/users/login', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body,
			});

			const data = await res.json();

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
	'https://codecommunity-production.up.railway.app/users/verify',
	async (_, thunkAPI) => {
		try {
			const res = await fetch('https://codecommunity-production.up.railway.app/api/users/verify', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
				},
			});

			const data = await res.json();

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
		const res = await fetch('/api/users/logout', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});

		const data = await res.json();

		if (res.status === 200) {
			return data;
		} else {
			return thunkAPI.rejectWithValue(data);
		}
	} catch (err) {
		return thunkAPI.rejectWithValue(err.response.data);
	}
});
export const getHomePosts = createAsyncThunk('posts/getHomePosts', async () => {
	const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/';
	const response = await axios.get(endpoint);
	return response.data;
  });
  
  export const filterAZ = createAsyncThunk('posts/filterAZ', async () => {
	const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/?ordering=title/';
	const response = await axios.get(endpoint);
	return response.data;
  });
  
  export const filterZA = createAsyncThunk('posts/filterZA', async () => {
	const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/post/?ordering=-title/';
	const response = await axios.get(endpoint);
	return response.data;
  });
  
  export const filterPublications = createAsyncThunk('posts/filterPublications', async (payload) => {
	// Implement your logic for filtering publications
	return payload;
  });
  
  export const search = createAsyncThunk('posts/search', async (name) => {
	const endpoint = `https://codecommunity-production.up.railway.app/codec/api/post/?search=${name}`;
	const response = await axios.get(endpoint);
	return response.data;
  });
  
 
  export const getAllLanguages = createAsyncThunk('languages/getAllLanguages', async () => {
	const url = 'https://codecommunity-production.up.railway.app/codec/api/language/';
	const response = await axios.get(url);
	return response.data;
  });
  
  export const addHomePosts = createAsyncThunk('posts/addHomePosts', async (post) => {
	const url = 'https://codecommunity-production.up.railway.app/codec/api/post/';
	const response = await axios.post(url, post);
	return response.data;
  });
  
  export const postUser = createAsyncThunk('posts/postUser', async (payload) => {
	const createUser = await axios.post('https://codecommunity-production.up.railway.app/codec/api/users/', payload);
	return createUser.data;
  });
const initialState = {
	isAuthenticated: false,
	user: null,
	loading: false,
	registered: false,
	posts: [],
    addPost: [],   
    languages: []
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
				state.users = action.payload; // Update users in state
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
			})
			.addCase(getHomePosts.fulfilled, (state, action) => {
				state.posts = action.payload;
			})
			.addCase(filterAZ.fulfilled, (state, action) => {
				state.posts = action.payload;
			})
			.addCase(filterZA.fulfilled, (state, action) => {
				state.posts = action.payload;
			})
			.addCase(filterPublications.fulfilled, (state, action) => {
				state.posts = action.payload;
			})
			.addCase(search.fulfilled, (state, action) => {
				state.posts = action.payload;
			})
			.addCase(getAllLanguages.fulfilled, (state, action) => {
				state.languages = action.payload;
			})
			.addCase(addHomePosts.fulfilled, (state, action) => {
				// Handle successful post addition if needed
			})
			.addCase(postUser.fulfilled, (state, action) => {
				// Handle successful user creation if needed
			});
	},
});

export const { resetRegistered } = userSlice.actions;
export default userSlice.reducer;
