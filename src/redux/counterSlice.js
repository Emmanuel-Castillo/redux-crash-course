//redux store contains slices which each storing a state and functions to change the state (reducers)

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

//reducers have actions inside, to change state value

//action is used to change the state
//a reducer is a fnx that takes in the state and an action, and returns a new state
//redux store is immutable, read only

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function

//export the three actions to be able to use it in any component
export const { increment, decrement, incrementByAmount } = counterSlice.actions

//export the slice to use in our store
export default counterSlice.reducer