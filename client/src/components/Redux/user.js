import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

export const register = createAsyncThunk("users/register", async ({ first_name, last_name, email, password, re_password }, thunkAPI) => {
   const body = JSON.stringify({
      first_name,
      last_name,
      email,
      password,
      re_password,
   });

   try {
      const response = await axios.post(`/auth/users/`, body, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      });

      const data = response.data;

      if (response.status === 201) {
         await axios.post("/codec/api/user_extras/", { id: data.id });
         return data;
      } else {
         return thunkAPI.rejectWithValue(data);
      }
   } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
   }
});

export const getUser = createAsyncThunk("users/me", async (_, thunkAPI) => {
   const access = Cookies.get("access") || localStorage.getItem("access");

   try {
      const response = await axios.get(`/auth/users/me/`, {
         headers: {
            Accept: "application/json",
            Authorization: `JWT ${access}`,
         },
      });

      const data = response.data;

      if (response.status === 200) {
         localStorage.setItem("id", data.id);
         return data;
      } else {
         return thunkAPI.rejectWithValue(data);
      }
   } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
   }
});

export const googleRegister = createAsyncThunk("register/google", async ({ userGoogle }, thunkAPI) => {

   const body = JSON.stringify({
      first_name: userGoogle.familyName,
      last_name: userGoogle.givenName,
      email: userGoogle.email,
      password: `Aa${userGoogle.googleId}`,
      re_password: `Aa${userGoogle.googleId}`,
   });

   try {
      const response = await axios.post(`/auth/users/`, body, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      });

      const data = response.data;

      if (response.status === 201) {
         await axios.post("/codec/api/user_extras/", { id: data.id });
         return data;
      } else {
         return thunkAPI.rejectWithValue(data);
      }
   } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
   }
});

export const googleAuthenticate = createAsyncThunk("login/google", async ({ userGoogle }, thunkAPI) => {
   const body = JSON.stringify({
      email: userGoogle.email,
      password: `Aa${userGoogle.googleId}`,
   });

   try {
      const response = await axios.post(`/auth/jwt/create/`, body, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      });

      const data = response.data;
      console.log(data);

      if (response.status === 200) {
         Cookies.set("access", data.access, {
            expires: 5,
            path: "/",
            sameSite: "strict",
         });
         localStorage.setItem("access", data.access);

         Cookies.set("refresh", data.refresh, {
            expires: 8,
            path: "/",
            sameSite: "strict",
         });
         localStorage.setItem("refresh", data.refresh);

         const { dispatch } = thunkAPI;
         dispatch(getUser());

         return data;
      } else {
         return thunkAPI.rejectWithValue(data);
      }
   } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
   }
});

export const login = createAsyncThunk("users/login", async ({ email, password }, thunkAPI) => {
   const body = JSON.stringify({
      email: email,
      password: password,
   });

   try {
      const response = await axios.post(`/auth/jwt/create/`, body, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      });

      const data = response.data;

      if (response.status === 200) {
         Cookies.set("access", data.access, {
            expires: 5,
            path: "/",
            sameSite: "strict",
         });
         localStorage.setItem("access", data.access);

         Cookies.set("refresh", data.refresh, {
            expires: 8,
            path: "/",
            sameSite: "strict",
         });
         localStorage.setItem("refresh", data.refresh);

         const { dispatch } = thunkAPI;
         dispatch(getUser());

         return data;
      } else {
         return thunkAPI.rejectWithValue(data);
      }
   } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
   }
});

export const checkAuth = createAsyncThunk("users/verify", async (_, thunkAPI) => {
   const access = Cookies.get("access") || localStorage.getItem("access");

   const body = JSON.stringify({
      token: access,
   });

   try {
      const response = await axios.post(`/auth/jwt/verify/`, body, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      });

      const data = response.data;

      if (response.status === 200) {
         const { dispatch } = thunkAPI;

         dispatch(getUser());

         return data;
      } else {
         return thunkAPI.rejectWithValue(data);
      }
   } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
   }
});

export const resetPassword = createAsyncThunk("users/reset_password", async ({ email }, thunkAPI) => {
   const body = JSON.stringify({
      email,
   });

   try {
      const response = await axios.post(`/auth/users/reset_password/`, body, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      });

      const data = response.data;
      return data;
   } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
   }
});

export const logout = createAsyncThunk("users/logout", async (_, thunkAPI) => {
   try {
      Cookies.remove("access");
      Cookies.remove("refresh");
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("loggedInUserId");
      localStorage.removeItem("admin");
      localStorage.removeItem("id");
   } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
   }
});

export const isAdmin = createAsyncThunk("users/admin", async (_, thunkAPI) => {
   const id = localStorage.getItem("loggedInUserId");

   try {
      const response = await axios.get(`/codec/api/users/${id}/`, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      });

      const data = response.data;

      if (data.is_superuser === true) {
         localStorage.setItem("admin", data.is_superuser);
         return data;
      } else {
         return thunkAPI.rejectWithValue(data);
      }
   } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
   }
});

const initialState = {
   isAuthenticated: false,
   user: null,
   loading: false,
   registered: false,
   admin: false,
   errors: [],
};

const userSlice = createSlice({
   name: "userdb",
   initialState,
   reducers: {
      resetRegistered: (state) => {
         state.registered = false;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(register.pending, (state) => {
            state.loading = true;
         })
         .addCase(register.fulfilled, (state) => {
            state.loading = false;
            state.registered = true;
         })
         .addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
         })
         .addCase(googleRegister.pending, (state) => {
            state.loading = true;
         })
         .addCase(googleRegister.fulfilled, (state) => {
            state.loading = false;
            state.registered = true;
         })
         .addCase(googleRegister.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
         })
         .addCase(login.pending, (state) => {
            state.loading = true;
         })
         .addCase(login.fulfilled, (state) => {
            state.loading = false;
            state.isAuthenticated = true;
         })
         .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
         })
         .addCase(googleAuthenticate.pending, (state) => {
            state.loading = true;
         })
         .addCase(googleAuthenticate.fulfilled, (state) => {
            state.loading = false;
            state.isAuthenticated = true;
         })
         .addCase(googleAuthenticate.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
         })
         .addCase(getUser.pending, (state) => {
            state.loading = true;
         })
         .addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
         })
         .addCase(getUser.rejected, (state) => {
            state.loading = false;
         })
         .addCase(checkAuth.pending, (state) => {
            state.loading = true;
         })
         .addCase(checkAuth.fulfilled, (state) => {
            state.loading = false;
            state.isAuthenticated = true;
         })
         .addCase(checkAuth.rejected, (state) => {
            state.loading = false;
         })
         .addCase(resetPassword.pending, (state) => {
            state.loading = true;
         })
         .addCase(resetPassword.fulfilled, (state) => {
            state.loading = false;
         })
         .addCase(resetPassword.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
         })
         .addCase(logout.pending, (state) => {
            state.loading = true;
         })
         .addCase(logout.fulfilled, (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
         })
         .addCase(logout.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
         })
         .addCase(isAdmin.fulfilled, (state) => {
            state.admin = true;
         });
   },
});

export const { resetRegistered } = userSlice.actions;
export default userSlice.reducer;
