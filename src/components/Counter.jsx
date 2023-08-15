import React, { useState } from "react";

//new redux imports

//use useSelector hook to access the state slice
import { useSelector } from "react-redux";

//use useDispatch hook to use actions in the state slice
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import { useGetAllPostsQuery, useGetPostbyIdQuery } from "../redux/postsSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetPostbyIdQuery();

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
