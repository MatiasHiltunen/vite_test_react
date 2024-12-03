import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <p>Laskuri: {count}</p>
    </>
  )
}

export default App
