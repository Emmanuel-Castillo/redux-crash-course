//create redux store
//now to give every component access to redux store
//by passing it to our App component

import { configureStore } from "@reduxjs/toolkit";

//import the slice into the redux store
import counterSlice from "./counterSlice";

import { postsApi } from "./postsSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [postsApi.reducerPath]: postsApi.reducer,
  },

  //caching and invalidation purposes
  //making data fetching more performant
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
