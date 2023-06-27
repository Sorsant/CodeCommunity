import {createSlice} from'@reduxjs/toolkit'

export const HomeSlice = createSlice({
  name: 'Home',
  initialState: {
    posts: [],
    addPost: [],
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
  },
});
export const {getAllPosts,filterAcendent,filterDesendent,filterTime,getPostId,getSearchPosts}=HomeSlice.actions
export default HomeSlice.reducer