//creating api slice

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts"
    }),
    getPostbyId: builder.query({
      query: (id) => `posts/${id}`
    })
  })
});

//rtk query made new hook
export const {useGetAllPostsQuery, useGetPostbyIdQuery} = postsApi
