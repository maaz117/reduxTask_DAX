import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import Login from './components/login'
import About from './components/about'
import User from './components/user'

function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <><Navbar /><Home /></>,
      },
      {
        path: '/login',
        element: <><Navbar /><Login /></>,
      },
      {
        path: '/about',
        element: <><Navbar /><About /></>,
      },
      {
        path: '/user/:username',
        element: <><Navbar /><User /></>,
      }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
