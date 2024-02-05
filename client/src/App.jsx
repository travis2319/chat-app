import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import io from 'socket.io-client'

const socket =io.connect("http://localhost:3000");

function App() {
  const [count, setCount] = useState(0)

  return (
      <>hello</>
  )
}

export default App
