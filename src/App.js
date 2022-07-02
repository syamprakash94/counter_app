import { useState } from 'react'
import React from 'react'
import "./App.css"

const App = () => {
  const [count, setcount] = useState(0)
  return (
  <div className="container my-5">
    <div className='card text-center my-5'>
      <h1 className='my-5'>Counter App</h1>
      <h1>{count}</h1>
      <div  className='my-5'>
        <button onClick={ () => setcount (count + 1)}
        className="btn-success button1"
        >Increment</button>
        <button onClick={ () => setcount (count - 1)}
        disabled={count===0}
        className="btn-danger button2"
        >Decrement</button>
        <button onClick={ () => setcount (0)}
        disabled={count===0}
        className="btn-light button3"
        >Reset</button>
      </div>
    </div>
    </div>
  )
}

export default App
