import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

const getUser = createAsyncThunk(
  'users/me',
  async (_, thunkAPI) => {
    try {
      const res = await fetch('/api/users/me', {
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
  }
);

export const googleAuthenticate = createAsyncThunk(
  'users/google',
  async ({ state, code }, thunkAPI) => {
      const body = JSON.stringify({
        code,
        state,
      });
      
      try {
        const res = await fetch('/api/users/google', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body,
        });

        const data = await res.json();
        console.log(data);

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
)

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
  'users/verify',
  async (_, thunkAPI) => {
    try {
      const res = await fetch('/api/users/verify', {
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

export const resetPassword = createAsyncThunk(
  'users/reset_password',
  async ({email}, thunkAPI) => {
    const body = JSON.stringify({
      email,
    });

    try {
      const res = await fetch('/api/users/reset_password', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body
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
  }
)

export const logout = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      const res = await fetch('/api/users/logout', {
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
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  registered: false,
};

const userSlice = createSlice({
  name: 'userdb',
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
      .addCase(googleAuthenticate.pending, state => {
        state.loading = true;
      })
      .addCase(googleAuthenticate.fulfilled, state => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(googleAuthenticate.rejected, state => {
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
      .addCase(resetPassword.pending, state => {
        state.loading = true
      })
      .addCase(resetPassword.fulfilled, state => {
        state.loading = false
      })
      .addCase(resetPassword.rejected, state => {
        state.loading = false
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
