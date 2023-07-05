import { createSlice } from '@reduxjs/toolkit';

export const communitySlice = createSlice({
  name: 'community',
  initialState: {
    communities: [],
    languages: [],
  },
  reducers: {
    allCommunitys: (state, action) => {
      state.communities = action.payload;

    },
    getIdCommunity: (state, action) => {
      state.communities = action.payload;
    },
    getLanguages: (state, action) => {
      state.languages = action.payload;
    }
  },
});

export const {
  allCommunitys,
  getIdCommunity,
  getLanguages,
} = communitySlice.actions;

export default communitySlice.reducer;
