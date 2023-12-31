import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
   name: "home",
   initialState: {
      posts: [],
      posts2: [],
      login: false,
      addPost: [],
      users: [],
      userExtra: [],
      menssageD: "",
      comments: [],
      review:[],
      review_user: [],

   },
   reducers: {
      getAllPosts: (state, action) => {
         state.posts2 = action.payload
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
         if (action.payload === "news") {
            sortedPosts.sort((a, b) => {
               const dateA = new Date(a.created);
               const dateB = new Date(b.created);
               return dateB - dateA;
            });
         }
         if (action.payload === "old") {
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
         state.posts2  = state.payload;
         state.posts = action.payload;
      },
      loginSwitch: (state, action) => {
         state.login = action.payload;
      },
      addPosts: (state, action) => {
         state.addPost = action.payload;
      },
      getUser: (state, action) => {
         state.users = action.payload;
      },
      getUserExtra: (state, action) => {
         state.userExtra = action.payload;
      },
      // allLikesPost: (state, action) => {
      //    const { postId, userId } = action.payload;
      //    console.log(postId, "reducer");
      //    console.log(userId, "reducer");

      //    const post = state.posts.find((post) => post.id === postId);
      //    if (post) {
      //       post.likes.push(userId);
      //    }
      // },
      resetUser: (state, action) => {
         state.users = [];
      },
      resetUserExtra: (state, action) => {
         state.userExtra = [];
      },
      filterlikes: (state, action) => {
         const sortedPosts = [...state.posts];
         if (action.payload === "less") {
         sortedPosts.sort((a, b) => a.likes.length - b.likes.length);
         }
         if (action.payload === "All") {
         sortedPosts.sort((a, b) => b.likes.length - a.likes.length);
         }
         state.posts = sortedPosts;
      },
      getReview:(state, action) => {
         state.review = action.payload
      },
      getReview_user:(state, action) => {
         state.review_user = action.payload
      }
      
   },
});

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
   getUser,
   menssageData,
   allLikesPost,
   resetUserExtra,
   resetUser,
   filterlikes,
   getReview,
   getReview_user,
} = homeSlice.actions;

export default homeSlice.reducer;
