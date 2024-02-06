import { useState } from 'react'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001");

function App() {
  return (
      <>hello</>
  )
}

export default App
