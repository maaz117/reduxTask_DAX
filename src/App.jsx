import { useState } from 'react'
import './App.css'
import MyForm from './form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyForm />
    </>
  )
}

export default App
