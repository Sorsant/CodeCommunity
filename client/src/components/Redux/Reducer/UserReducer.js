import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        userExtra: []
    },
    reducers: {
        getUser: (state, action) => {
            state.users = action.payload;
        },
        getUserExtra: (state, action) => {
            state.userExtra = action.payload;
        }
    }
});

export const {
    getUser,
    getUserExtra

} = userSlice.actions;

export default userSlice.reducer;