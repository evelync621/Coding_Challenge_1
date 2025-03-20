import { useState } from 'react'
import './App.css'
import Tabs from './components/Tabs'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <div>
    <h1>Vite + React</h1>
    <Tabs />
  </div>
)
}

export default App
