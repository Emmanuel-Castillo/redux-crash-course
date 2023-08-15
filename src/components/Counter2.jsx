import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

function Counter2() {
  const dispatch = useDispatch()

  return (
    <div>
      <h1>This is Counter2</h1>
      <button
      onClick={() => dispatch(increment())}
      >Increment</button>
      <button
      onClick={() => dispatch(decrement())}
      >Decrement</button>

    </div>
  )
}

export default Counter2