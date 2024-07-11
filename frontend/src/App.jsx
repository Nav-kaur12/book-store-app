import React from 'react'
import Home from './components/Home/Home'
import Course from './components/Course'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Courses from './components/Courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'


const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Home/></>
    },
    {
      path:'/course',
      element:<><Courses/></>
    },
    {
      path:'/signup',
      element:<><Signup/></>
    }
  ])
    return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <RouterProvider router={router}/>     
      
      </div>
     </>
  )
}

export default App