import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    posts: [],
    login: false,
    addPost: [],
    users: [],
    userExtra: [],
  },
  reducers: {
    getAllPosts: (state, action) => {
      state.posts = action.payload;
    },
    filterAcendent: (state, action) => {
      state.posts = action.payload;
    },
    filterDesendent: (state, action) => {
      state.posts = action.payload;
    },
    filterTime: (state, action) => {
      const sortedPosts = [...state.posts];
      if (action.payload === 'news') {
        sortedPosts.sort((a, b) => {
          const dateA = new Date(a.created);
          const dateB = new Date(b.created);
          return dateB - dateA;
        });
      }
      if (action.payload === 'old') {
        sortedPosts.sort((a, b) => {
          const dateA = new Date(a.created);
          const dateB = new Date(b.created);
          return dateA - dateB;
        });
      }
      state.posts = sortedPosts;
    },
    getPostId: (state, action) => {
      state.posts = action.payload;
    },
    getSearchPosts: (state, action) => {
      state.posts = action.payload;
    },
    loginSwitch: (state, action) => {
      state.login= action.payload;
    },
    addPosts: (state, action) => {
      state.addPost = action.payload
    },
    getUser: (state, action) => {
      state.users = action.payload;
    },

    getUserExtra: (state, action) => {
      state.userExtra = action.payload;
    }
}});

export const {
  getAllPosts,
  filterAcendent,
  filterDesendent,
  filterTime,
  getPostId,
  getSearchPosts,
  loginSwitch,
  addPosts,
  getUserExtra,
  getUser
} = homeSlice.actions;

export default homeSlice.reducer;