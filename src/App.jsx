import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'

function App() {
const count= useSelector(state => state.counter.count)
console.log("count", count)
const dispatch = useDispatch()
  const handleIncrement =()=>{
    dispatch(increment())

  }
  const handleDecrement =()=>{
    dispatch(decrement())

  }

  return (
    <>
     <h1 className="text-3xl font-bold underline text-focus-blue">
    Hello world!
  </h1>
    <button onClick={handleDecrement}>-</button>
{count}
  <button onClick={handleIncrement}>+</button>
    </>
  )
}

export default App
