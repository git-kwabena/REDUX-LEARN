import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {  increment,
          decrement, 
          incrementByAmount } from './features/counter/counterSlice'
import {useFetchUSersQuery} from './features/users/usersApiSlice'


function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  const {data=[], isSuccess } =useFetchUSersQuery()
  console.log(data)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=>dispatch(increment())}>
          count is {count}
        </button>
        <button onClick={()=> dispatch(incrementByAmount(10))}>
          Count is {count}
        </button>
        <p>Increment By 10</p>
        <div>
          <p>Number fetched: {data.length}</p>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>

      </div>
    </>
  )
}

export default App
