import { useState } from 'react'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001");

function App() {
  const [count, setCount] = useState(0)

  return (
      <>hello</>
  )
}

export default App
