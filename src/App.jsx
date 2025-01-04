import { useState } from 'react'
import './App.css'
import MyForm from './form'
import BasicFormExample from './formikhook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MyForm /> */}
      <BasicFormExample />
    </>
  )
}

export default App
