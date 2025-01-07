import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import Login from './components/login'
import About from './components/about'
import User from './components/user'
import Error from './components/error'

function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <><Navbar /><Home /></>,
        errorElement: <Error />,
      },
      {
        path: '/login',
        element: <><Navbar /><Login /></>,
        errorElement: <Error />,
      },
      {
        path: '/about',
        element: <><Navbar /><About /></>,
        errorElement: <Error />,
      },
      {
        path: '/user/:username',
        element: <><Navbar /><User /></>,
        errorElement: <Error />,
      }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
