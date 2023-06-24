import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/user';

export const store2 = configureStore({
	reducer: {
		user: userReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
});
