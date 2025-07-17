import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full bg-[#f1f1f1] h-screen">
        <h1 className="text-4xl font-extralight">hello world</h1>
      </div>
    </>
  )
}

export default App
